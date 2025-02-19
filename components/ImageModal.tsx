"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IoMdClose, IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { useState } from "react";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
}) => {
  const [index, setIndex] = useState(currentIndex);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <button
            className="absolute right-4 top-4 text-white text-3xl hover:opacity-70 transition-opacity"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
          
          <motion.div
            className="relative max-w-7xl w-full h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute left-4 text-white text-4xl hover:opacity-70 transition-opacity z-10"
              onClick={handlePrevious}
            >
              <IoMdArrowBack />
            </button>
            
            <div className="relative w-full h-full">
              <Image
                src={images[index]}
                alt="Modal Image"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <button
              className="absolute right-4 text-white text-4xl hover:opacity-70 transition-opacity z-10"
              onClick={handleNext}
            >
              <IoMdArrowForward />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 