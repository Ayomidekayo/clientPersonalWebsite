"use client";

import { Button } from '@headlessui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: <FaFacebook />, label: "Facebook", href: "https://facebook.com/harryowanaba" },
    { icon: <FaFacebook />, label: "Facebook Page", href: "https://facebook.com/harrysinstitute" },
    { icon: <FaFacebook />, label: "Facebook Group", href: "https://facebook.com/groups/learnerscorner" },
    { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com/speedreadncoach" },
    { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com/speedreadncoach" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/harry-owanaba" },
  ];

  return (
    <section id="contact" className="px-6 py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-bold">Work With Harry</h2>
      <p className="mt-4 text-slate-600">
        Book coaching, invite me to speak, or enroll in training.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <Button className="rounded-2xl bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700 transition">
          Book Coaching
        </Button>
        <Button className="rounded-2xl border border-gray-300 px-6 py-3 hover:bg-gray-100 transition">
          Invite to Speak
        </Button>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 transition"
            title={link.label}
          >
            {link.icon}
            <span className="text-sm font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
