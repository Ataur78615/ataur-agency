"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

const QA_DATA = [
    { q: "Ataur Agency kya karti hai?", a: "Hum Hotels, Retail Brands, Startups aur Growing Companies ke liye Digital Marketing (Ads), Website Development (Next.js/MERN), AI Automation (n8n) aur Cyber Security (Pen-testing) provide karte hain." },
    { q: "Aapka main focus kya hai?", a: "Humara main focus 'Business Growth + Automation + Security' par hai taaki aapka business bina kisi rukawat ke scale kar sake." },
    { q: "Aap kis type ke businesses ke saath kaam karte hain?", a: "Hum majorly Hotels, Retail Brands, Tech Startups aur Corporate Companies ke saath kaam karte hain." },
    { q: "Aap ko dusri agencies se alag kya banata hai?", a: "Hum growth (Ads), efficiency (Automation) aur safety (Security) ka ek complete ecosystem provide karte hain, jo dusri agencies aksar alag-alag karti hain." },
    { q: "Aapka mission kya hai?", a: "Humara mission hai: 'Grow Your Business. Automate Your Leads. Secure Your Brand.'" },
    { q: "Aapse contact kaise karein?", a: "Aap humein WhatsApp par message ya call kar sakte hain: 7250570798. Email: atauragency@gmail.com" },

    // Projects & Successes
    { q: "HotelUpWala kya hai?", a: "HotelUpWala ek complete hotel solution platform hai jo listing, booking aur management ko asan banata hai. Ye MD Ataur Ansari ka ek major success project hai." },
    { q: "Stayzzy Bloom kya hai?", a: "Stayzzy Bloom ek premium hotel website hai jo Next.js aur TypeScript se bani hai, focusing on speed aur conversions." },
    { q: "B2B Trips project kya hai?", a: "B2B Trips ek bulk booking platform hai jo travel agents aur businesses ke liye design kiya gaya hai." },
    { q: "Code Fixer AI kya hai?", a: "Ye ek AI-powered tool hai jo MERN stack aur Gemini API se bana hai, jo developers ko programming errors fix karne me help karta." },
    { q: "College Notes Creator kya hai?", a: "Ye students ke liye ek automated platform hai jo notes create aur manage karne me help karta hai." },

    // Services Detail
    { q: "Aap kaun kaun se ads run karte ho?", a: "Hum Meta Ads (FB/IG), Google Search/Display Ads, LinkedIn Professional Ads aur direct WhatsApp Marketing Ads run karte hain." },
    { q: "AI Automation (n8n) kya hai?", a: "n8n ek powerful workflow tool hai. Hum isse aapke leads ka 24/7 automated follow-up aur CRM management setup karte hain taaki koi lead miss na ho." },
    { q: "Cyber Security me kya karte ho?", a: "Hum website security audits, penetration testing (loopholes find karna), aur social media account protection provide karte hain." },
    { q: "Pricing kaise decide hoti hai?", a: "Pricing project ke complexity aur requirements par depend karti hai. Best quote ke liye contact karein: 7250570798, Email: atauragency@gmail.com" },
    { q: "Who developed this website?", a: "This website is developed by Ataur Agency Owner MD ATAUR ANSARI using modern technologies like Next.js and Tailwind CSS." },
    { q: "Start kaise karein?", a: "Bus ek WhatsApp message bhejiye 7250570798 par, hum baaki handle kar lenge!" },
];

const SUGGESTIONS = [
    "HotelUpWala success story?",
    "Ads performance details?",
    "n8n AI Automation kya hai?",
    "B2B Trips project?",
    "Pricing & Contact?"
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "🥳 Welcome to Ataur Agency. How can I help you grow your business today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // AI Logic
        setTimeout(() => {
            const response = findResponse(text);
            const botMessage: Message = {
                id: Date.now() + 1,
                text: response,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const findResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();

        // High priority checks
        if (lowerInput.includes("price") || lowerInput.includes("pricing") || lowerInput.includes("cost") || lowerInput.includes("charge")) {
            return "Humare paas ek 'Services Pricing Pool' hai jisme hum Market Rate se 50% OFF de rahe hain 3-month packages par. For example, Meta/Google Ads setup & management sirf ₹45,000 / $540 me available hai 3 months ke liye. Details ke liye 'Pricing' section check karein ya humein contact karein: 7250570798.";
        }
        if (lowerInput.includes("who developed") || lowerInput.includes("creator") || lowerInput.includes("owner") || lowerInput.includes("maker")) {
            return "This website is developed by Ataur Agency Owner MD ATAUR ANSARI.";
        }
        if (lowerInput.includes("refund") || lowerInput.includes("return") || lowerInput.includes("cancel")) {
            return "Ataur Agency ki 'Strict No Refund Policy' hai. Ek baar project shuru hone ke baad koi refund nahi milta. Ads management ke liye 15-day prior notice required hai. Detail ke liye /terms page check karein.";
        }
        if (lowerInput.includes("payment") || lowerInput.includes("advance") || lowerInput.includes("milestone")) {
            return "Project start karne ke liye 50% advance payment mandatory hai. Balance 50% handover se pehle dena hota hai. Late payments par 5% weekly fee apply hoti hai.";
        }
        if (lowerInput.includes("support") || lowerInput.includes("maintenance") || lowerInput.includes("bug")) {
            return "Hum website launch ke baad 30 days tak free technical support provide karte hain. AI workflows me 1 month ki monitoring included hoti hai.";
        }
        if (lowerInput.includes("contact") || lowerInput.includes("number") || lowerInput.includes("phone")) {
            return "Aap humein WhatsApp ya Call kar sakte hain: 7250570798. Email: atauragency@gmail.com";
        }

        // Matching from Q&A data
        const match = QA_DATA.find((item) => {
            const q = item.q.toLowerCase();
            return lowerInput.includes(q) || q.includes(lowerInput);
        });

        if (match) return match.a;

        return "Shukriya! Aapka sawal thoda specific hai. Behtar jankari ke liye aap humare expert se Direct WhatsApp (7250570798) par baat kar sakte hain. Kya main kisi aur cheez me help kar sakta hoon?";
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-[30px] right-[30px] z-[1001] w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl group border-2 border-white/20"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                            ✕
                        </motion.span>
                    ) : (
                        <motion.div key="chat" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Label */}
                <div className="absolute right-full mr-4 bg-gray-900/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl hidden md:block">
                    AtaurAgency AI Agent
                </div>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-24 right-6 md:right-8 z-[1001] w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/30">
                                        <span className="text-xl">🤖</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg leading-tight">AtaurAgency AI</h3>
                                        <div className="flex items-center text-xs text-blue-100">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                            Active Now
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 space-y-6 scrollbar-hide">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === "user" ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.sender === "user"
                                            ? "bg-blue-600 text-white rounded-tr-none"
                                            : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 flex space-x-1">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        {messages.length < 5 && !isTyping && (
                            <div className="px-6 py-2 bg-gray-50/50 flex space-x-2 overflow-x-auto no-scrollbar pb-4">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => handleSend(s)}
                                        className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all whitespace-nowrap shadow-sm"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend(inputValue);
                                }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="w-full px-5 py-3 pr-12 bg-gray-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all text-sm outline-none text-gray-800"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 p-2 text-blue-600 disabled:text-gray-400 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                            <p className="text-[10px] text-gray-400 mt-3 text-center font-medium">
                                Powered by Ataur Agency AI • Usually responds instantly
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
