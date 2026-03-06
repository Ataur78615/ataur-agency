"use client";

import { useEffect, useState } from "react";

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface PaymentOptions {
    packageName: string;
    amount: number;
    userData: {
        name: string;
        email: string;
        phone: string;
    };
    onSuccess?: (response: any) => void;
    onError?: (error: any) => void;
}

export default function useRazorpay() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (window.Razorpay) {
            setIsLoaded(true);
        }
    }, []);

    const handlePayment = async ({ packageName, amount, userData, onSuccess, onError }: PaymentOptions) => {
        if (!window.Razorpay) {
            alert("Razorpay SDK failed to load. Please check your internet connection.");
            return;
        }

        try {
            // 1. Create order on the server
            const response = await fetch("/api/razorpay/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount,
                    receipt: `receipt_${packageName.replace(/\s+/g, "_").toLowerCase()}`,
                }),
            });

            const order = await response.json();

            if (order.error) {
                throw new Error("Order creation failed: " + order.error);
            }

            // 2. Open Razorpay Checkout
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: "Ataur Agency",
                description: `Payment for ${packageName}`,
                order_id: order.id,
                handler: async function (response: any) {
                    console.log(">>> RAZORPAY: Payment success, starting verification...");
                    // 3. Verify payment on the server
                    try {
                        const verifyRes = await fetch("/api/razorpay/verify", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                ...response,
                                userData,
                                packageName,
                                amount
                            }),
                        });

                        const verifyData = await verifyRes.json();

                        if (verifyRes.status !== 200) {
                            throw new Error(verifyData.error || "Verification failed on server");
                        }

                        console.log(">>> RAZORPAY: Verification process completed", verifyData);

                        if (onSuccess) onSuccess({ ...response, ...verifyData });
                        else alert("Payment Successful!");

                        // Redirect to WhatsApp or show a success message
                        if (verifyData.whatsappUrl) {
                            window.open(verifyData.whatsappUrl, "_blank");
                        }
                    } catch (err: any) {
                        console.error(">>> RAZORPAY: Verification error", err);
                        alert("Verification Error: " + err.message + ". Please contact support with your Payment ID: " + response.razorpay_payment_id);
                    }
                },
                prefill: {
                    name: userData.name,
                    email: userData.email,
                    contact: userData.phone,
                },
                theme: {
                    color: "#2563eb",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function (response: any) {
                console.error(">>> RAZORPAY: Payment failed", response.error);
                if (onError) onError(response.error);
                else alert("Payment Failed: " + response.error.description);
            });
            rzp.open();
        } catch (error: any) {
            console.error(">>> RAZORPAY: Error", error);
            alert(error.message || "Something went wrong with the payment.");
        }
    };

    return { handlePayment, isLoaded, setIsLoaded };
}
