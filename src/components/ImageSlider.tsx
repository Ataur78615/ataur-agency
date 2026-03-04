"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const sliderImages = [
    "/img/brand-logo.jpg",
    "/img/AtaAgen.jpg",
    "/img/Ataur Agency slider 1.jpg",
    "/img/Ataur Agency slider 4.jpg",
    "/img/Ataur Agency slider 5.jpg",
    "/img/Ataur Agency temp.png",
    "/img/Ataur Agency.png",
    "/img/Ataur Agnecy slider 2.jpg",
    "/img/Ataur Agnecy slider 3.jpg",
    "/img/ataur agen2.png",
    "/img/ataur agen3.png",
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[45vh] md:h-[80vh] overflow-hidden bg-gray-900 mt-16">
            <AnimatePresence mode="wait">
                <motion.img
                    key={sliderImages[currentIndex]}
                    src={sliderImages[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay for better integration */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Navigation Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {sliderImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
