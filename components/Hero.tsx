"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden px-6 py-32 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Harry Owanaba
          </h1>

          <p className="mt-4 text-xl font-medium text-indigo-600">
            Africa’s No.1 Speed Reading Expert & Academic Coach
          </p>

          <p className="mt-6 text-lg text-slate-600">
            Helping students and professionals use their brain more effectively
            — read faster, remember more, focus better, and perform at peak
            academic levels.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/2348062158592"
              target="_blank"
              className="rounded-2xl px-6 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
            >
              Book a Coaching Session
            </a>

            <a
              href="#speaking"
              className="rounded-2xl px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Watch Me Speak
            </a>
          </div>
        </motion.div>

        {/* Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center md:justify-end gap-4"
        >
          {/* Brain Illustration */}
          <div className="absolute -z-10 -top-6 -right-6 w-full h-full bg-indigo-100 rounded-3xl" />

          {/* Main Image */}
          <motion.div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/assets/brain.jpg"
              alt="Brain performance and speed reading"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          {/* Optional Profile Image */}
          <motion.div className="rounded-full overflow-hidden shadow-lg w-36 h-36 md:w-48 md:h-48 hover:scale-105 transition-transform duration-500">
            <Image
              src="/assets/harry-owanaba.jpg"
              alt="Harry Owanaba"
              width={200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
