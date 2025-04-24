"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WOMAN_SAFETY_FEATURES } from "@/constants/how-it-works";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="space-y-8 px-4 sm:px-6 md:px-0">
      <h1 className="font-bold text-2xl">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {WOMAN_SAFETY_FEATURES.map((step, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1 }}
            className="border p-4 flex flex-col rounded-xl gap-y-4 hover:shadow-md transition-shadow"
          >
            <Image
              src={step.icon}
              alt={step.alt}
              width={64}
              height={64}
              className="size-16 object-cover rounded-full"
            />

            <h2 className="text-lg font-bold">{step.title}</h2>
            <p className="text-sm text-[#788763]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
