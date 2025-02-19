"use client";
import { motion } from "framer-motion";
import { ParallaxScroll } from "@/components/Parallax-scroll";
import Header from "@/components/Header";
import { Righteous } from "next/font/google";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const images = [
  "/IMG-20250102-WA0028.jpg",
  "/IMG-20250102-WA0047.jpg",
  "/IMG-20241229-WA0056.jpg",
  "/IMG-20241230-WA0004.jpg",
  "/IMG-20250102-WA0037.jpg",
  "/IMG-20250102-WA0031.jpg",
  "/IMG-20241229-WA0055.jpg",
  "/IMG-20250102-WA0035.jpg",
  "/1.png",
];

export default function Gallery() {
  return (
    <motion.main
      className={`
        ${inter.className}
        relative min-h-screen select-none overflow-hidden text-black antialiased
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />
      
      <section className="max-w-[1600px] mx-auto">
        <div className="my-10 md:my-20">
          {/* Title Section */}
          <motion.div className="text-center mb-12" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Our Gallery</h1>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 text-lg md:text-xl">
              Explore our collection of stunning gates and fencing solutions. Each piece 
              showcases our commitment to quality craftsmanship and innovative design.
            </p>
          </motion.div>

          {/* Gallery Section */}
          <ParallaxScroll images={images} />
        </div>
      </section>
    </motion.main>
  );
}
