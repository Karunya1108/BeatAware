"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Activity, MessageCircle, Shield, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const slides = [
  {
    id: 1,
    icon: <Heart className="w-12 h-12 text-white" />,
    title: "Welcome to BeatAware",
    subtitle: "Your personal health companion",
    description:
      "Track your heart health, monitor vital signs, and get personalized insights to live a healthier life.",
    button: "Continue",
  },
  {
    id: 2,
    icon: <Activity className="w-12 h-12 text-white" />,
    title: "Comprehensive Health Tracking",
    subtitle: "Everything you need in one place",
    description:
      "Monitor heart rate, blood pressure, activity levels, and get AI-powered health recommendations.",
    button: "Continue",
  },
  {
    id: 3,
    icon: <MessageCircle className="w-12 h-12 text-white" />,
    title: "AI Health Assistant",
    subtitle: "Get instant health guidance",
    description:
      "Chat with our AI assistant for personalized health tips, medication reminders, and emergency support.",
    button: "Continue",
  },
  {
    id: 4,
    icon: <Shield className="w-12 h-12 text-white" />,
    title: "Your Privacy Matters",
    subtitle: "Secure and confidential",
    description:
      "All your health data is encrypted and stored securely. We never share your personal information.",
    button: "Get Started",
  },
];

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      router.push("/login");
    }
  };

  const skipToEnd = () => setIndex(slides.length - 1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-700 p-6">
      <div className="w-full max-w-sm relative">
        {/* Fixed-height container */}
        <div className="relative min-h-[520px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              className="absolute w-full rounded-3xl bg-white/90 backdrop-blur-md p-8 shadow-2xl text-center border border-white/20"
            >
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  {slides[index].icon}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900">{slides[index].title}</h2>
              <p className="mt-2 text-md font-semibold text-purple-600">{slides[index].subtitle}</p>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {slides[index].description}
              </p>

              <button
                onClick={nextSlide}
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-white font-semibold shadow-md hover:from-blue-600 hover:to-purple-700 transition"
              >
                {slides[index].button} <ArrowRight className="w-4 h-4" />
              </button>

              {index < slides.length - 1 && (
                <button
                  onClick={skipToEnd}
                  className="mt-3 text-gray-500 text-sm hover:text-blue-600 transition"
                >
                  Skip
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, i) => (
            <motion.span
              key={i}
              animate={{
                scale: i === index ? 1.3 : 1,
                backgroundColor: i === index ? "#4F46E5" : "#E5E7EB",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="h-3 w-3 rounded-full block"
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center mt-6 text-gray-200">
          <Heart className="w-5 h-5 text-purple-200 mr-1" />
          <span className="font-medium">BeatAware</span>
        </div>
      </div>
    </main>
  );
}
