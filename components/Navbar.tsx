"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white text-slate-900 shadow-sm">
      {/* Desktop Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-slate-200 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-xl md:text-2xl text-indigo-600">Harry Owanaba</span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group px-2 py-1 hover:text-indigo-500 transition-colors"
              >
                {link.name}
                <motion.span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 rounded"
                  layoutId="underline"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-indigo-50 transition"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 inset-x-0 z-40 bg-white shadow-lg border-b border-slate-200"
          >
            <div className="flex flex-col items-center py-6 gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-indigo-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
