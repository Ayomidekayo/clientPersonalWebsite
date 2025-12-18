"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ShoppingCart, MessageCircle } from "lucide-react";

const books = [
  {
    title: "Speed Reading & Academic Excellence",
    author: "Harry Owanaba",
    image: "/assets/speed-reader.jpg",
    price: "₦5,000",
    description:
      "This book teaches you how to use your brain more effectively — read faster, retain more, study smarter, and perform at peak academic levels. It is practical, simple, and transformational.",
    features: [
      "Proven speed reading techniques",
      "Study habits that actually work",
      "Brain-based learning systems",
      "Suitable for students & professionals",
    ],
  },
  {
    title: "YOUR CHILD CAN BECOME AN ACTIVE READER",
    author: "Harry Owanaba",
    image: "/assets/active-reader.jpg",
    price: "₦4,500",
    description:
      "Learn powerful memory techniques to retain information quickly and recall it with ease. Perfect for exams, presentations, and everyday life.",
    features: [
      "Mind mapping strategies",
      "Mnemonic devices",
      "Rapid recall exercises",
      "Practical real-life examples",
    ],
  },
  {
    title: "ROAD MAP TO ACADEMIC EXELLENCE newest",
    author: "Harry Owanaba",
    image: "/assets/excellent.jpg",
    price: "₦6,000",
    description:
      "Master the art of focus and productivity to achieve your academic and professional goals efficiently.",
    features: [
      "Time management hacks",
      "Concentration exercises",
      "Goal setting frameworks",
      "Overcoming procrastination",
    ],
  },
];

const BookSection = () => {
  return (
    <section id="book" className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Books by Harry Owanaba</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-indigo-50 rounded-3xl p-6 shadow-lg flex flex-col items-center text-center cursor-pointer transition-transform"
            >
              {/* Book Image */}
              <div className="w-full h-auto rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="rounded-2xl"
                  style={{ objectFit: "contain" }} // Ensures the entire book fits
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">{book.title}</h3>
              <p className="mt-2 text-indigo-600 font-medium">{book.author}</p>
              <p className="mt-4 text-sm text-slate-600">{book.description}</p>

              <ul className="mt-4 text-sm text-slate-600 space-y-1">
                {book.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <p className="mt-4 text-2xl font-bold">{book.price}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/checkout"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Buy with PayPal
                </a>
                <a
                  href={`https://wa.me/2348062158592?text=Hello%20Sir%2C%20I%20would%20like%20to%20order%20${encodeURIComponent(
                    book.title
                  )}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl border border-green-600 text-green-600 hover:bg-green-50 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order via WhatsApp
                </a>
              </div>

              <p className="mt-3 text-xs text-slate-500 flex items-center gap-1">
                <Download className="h-3 w-3" />
                Instant download & email delivery after payment
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
