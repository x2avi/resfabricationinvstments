"use client";
import React from "react";
import { motion } from "framer-motion";
import { Righteous } from "next/font/google";
import Header from "@/components/Header";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const contactInfo = [
  { icon: <FaWhatsapp className="text-3xl" />, 
    title: "WhatsApp",
    details: "+1 234 567 890", 
    subDetails: "Mon-Fri from 8am to 5pm", 
    link: "https://wa.me/1234567890" },
  {
    icon: <FiMail className="text-3xl" />,
    title: "Email",
    details: "info@trustme.com",
    subDetails: "Online support"
  },
  {
    icon: <FiMapPin className="text-3xl" />,
    title: "Address",
    details: "123 Gate Street",
    subDetails: "New York, NY 10001"
  },
  {
    icon: <FiClock className="text-3xl" />,
    title: "Working Hours",
    details: "Mon - Fri: 8am - 5pm",
    subDetails: "Sat - Sun: Closed"
  }
];

export default function Contact() {
  return (
    <main className={`${inter.className} relative min-h-screen bg-white`}>
      <Header />
      
      <div className="max-w-[1600px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have a question about our gates? We're here to help. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-14 rounded-lg border border-gray-300 px-4 text-lg text-gray-900 shadow-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-14 rounded-lg border border-gray-300 px-4 text-lg text-gray-900 shadow-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg text-gray-900 shadow-sm focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white text-lg font-medium h-14 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-gray-50 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-lg mb-1">{info.details}</p>
                    <p className="text-gray-500">{info.subDetails}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13753.796555070265!2d28.57052333003865!3d-20.135696537681288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19313b1adf5d2d67%3A0x98aa65b33e10a79d!2sBulawayo!5e0!3m2!1sen!2s!4v1647043087472!5m2!1sen!2s&markers=color:red%7Clabel:C%7C-20.135696537681288,28.57052333003865"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
} 