"use client";
import React from "react";
import { motion } from "framer-motion";
import { Righteous } from "next/font/google";
import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from "next/router";
import Header from "@/components/Header";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const pricingPlans = [
  {
    title: "Sliding Doors",
    price: "$70 - $400",
    features: ["SD(2mx2.1m)", "SD(2.5mx2.1m)", "SD(3mx2.1m)"],
  },

  {
    title: "Window Frames",
    price: "$25 - $100",
    features: [
      "ND11F(2mx1.2m)", "ND4F(1.5mx1.2m)", "ND2F(1mx1.2m)", "ND1(0.5mx1.2m)", 
      "NC11F(2mx0.9m)", "NC4(1.5mx0.6m)", "NE1(0.5mx0.6m)"
    ],
  },
  {
    title: "French Doors",
    price: "$200 - $280",
    features: ["FD(1.5mx2.1m)", "FD(2mx2.1m)", "Security-Screens 800cmx1.8m $70"],
  },
  
];

export default function Pricing() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contacts');
  };

  return (
    <main className={`${inter.className} relative min-h-screen bg-white`}>
      <Header /> {/* Add the Header component here */}
      <div className="max-w-[1600px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the plan that best suits your needs. Get started with us today and explore the best Experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold text-yellow-500 mb-4">{plan.price}</p>
                <ul className="text-gray-600 text-lg mb-4 space-y-2 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <IoMdCheckmark className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col justify-end h-full w-full">
                  <button
                    className="w-full bg-black text-white text-lg font-medium h-12 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    onClick={handleContactClick}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
