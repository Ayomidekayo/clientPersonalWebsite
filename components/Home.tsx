"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import About from "@/components/About";
import BookSection from "@/components/BookSection";
import Service from "@/components/Service";
import Testemony from "@/components/Testemony";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main className={`min-h-screen transition-colors duration-300 ${dark ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"}`}>
      <Navbar/>

      {/* Spacer so content doesn't go under fixed navbar */}
      <div className="pt-20" />

      <Hero />
      <About />

      {/* Book Section */}
      <BookSection />

      <Service />
      <Testemony />

      {/* CTA */}
      <section className="px-6 py-24 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold">Unlock Your Academic Potential</h2>
        <p className="mt-4 text-lg text-indigo-100">
          Your success is trainable. Your excellence is learnable.
        </p>
        <Button className="mt-8 bg-white text-indigo-600 rounded-2xl px-8">
          Start Your Transformation
        </Button>
      </section>

      <Contact />

      {/* WhatsApp */}
      <a
        href="https://wa.me/2348062158592"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        Chat on WhatsApp
      </a>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Kayode Ayomide Damilare. All rights reserved.
      </footer>
    </main>
  );
}
