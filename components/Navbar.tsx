"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Results", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth < 768;

      /* ===============================
         Desktop: subtle scroll detection
      ================================ */
      if (!isMobile) {
        setScrolled(currentScrollY > 20);
      }

      /* ===============================
         Mobile: close menu + hide navbar
      ================================ */
      if (isMobile) {
        // 🔒 Close mobile menu immediately when scrolling
        if (mobileOpen && Math.abs(currentScrollY - lastScrollY) > 5) {
          setMobileOpen(false);
        }

        // ⬇️ Hide navbar when scrolling down
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileOpen]);

  return (
    <header className="text-slate-900">
      {/* Glass Navbar */}
      <motion.nav
        animate={{ y: showNavbar ? 0 : "-100%" }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="
          fixed top-0 inset-x-0 z-50
          bg-white/20 backdrop-blur-xl saturate-150
          border-b border-white/10
          transition-all
        "
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <span className="font-bold text-xl md:text-2xl text-indigo-600">
            Harry Owanaba
          </span>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative px-2 py-1 text-slate-700
                  hover:text-indigo-500 transition-colors
                "
              >
                {link.name}
                <span
                  className="
                    absolute left-0 bottom-0 w-full h-0.5
                    bg-indigo-500 rounded
                    scale-x-0 hover:scale-x-100
                    transition-transform origin-left
                  "
                />
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="p-2 rounded-md hover:bg-white/40 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="
              md:hidden fixed top-16 inset-x-0 z-40
              bg-white/90 backdrop-blur-lg
              border-b border-slate-200 shadow-lg
            "
          >
            <div className="flex flex-col items-center py-6 gap-4 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-indigo-500 transition"
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
