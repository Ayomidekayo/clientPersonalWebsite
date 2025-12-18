"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
            <Image
              src="/assets/harry-owanaba.jpg"
              alt="Harry Owanaba"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            About Harry
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 text-center md:text-left">
            Harry Owanaba is an academic coach, brain performance trainer, author,
            consultant, and public speaker. Through Harry&apos;s Institute, he has
            helped learners across Africa unlock their cognitive potential and
            achieve measurable academic excellence.
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 text-center md:text-left">
            His approach combines evidence-based learning strategies, cognitive science, and personalized coaching to empower students and professionals to reach peak academic and cognitive performance.
          </p>
        </motion.div>

       

      </div>
    </section>
  );
};

export default About;
