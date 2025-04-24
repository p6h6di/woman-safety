"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeroBg1 from "@/assets/img/bg-hero-01.jpg";
import HeroBg2 from "@/assets/img/bg-hero-02.jpg";
import HeroBg3 from "@/assets/img/bg-hero-03.jpg";

const heroData = [
  {
    title: "Empowering Women, Ensuring Safety",
    description:
      "We provide innovative solutions to help women feel safe and confident, wherever they are.",
    backgroundImage: HeroBg1,
  },
  {
    title: "Together for a Safer Tomorrow",
    description:
      "Join our community initiatives and technology-driven programs to make every space safer for women.",
    backgroundImage: HeroBg2,
  },
  {
    title: "Your Safety, Our Priority",
    description:
      "From awareness campaigns to emergency support, we are committed to protecting women and building a secure environment.",
    backgroundImage: HeroBg3,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[520px] overflow-hidden rounded-xl">
      {/* Background Image Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroData[currentSlide].backgroundImage}
            alt="Hero Background"
            fill
            className="object-cover object-center rounded-xl"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full text-white p-6 md:p-10 lg:p-16">
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            {heroData[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            {heroData[currentSlide].description}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
