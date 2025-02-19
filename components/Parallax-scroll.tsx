"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageModal } from "./ImageModal";


export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const ImageWrapper = ({ src, index }: { src: string; index: number }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={() => handleImageClick(index)}
    >
      <Image
        src={src}
        className="h-[500px] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0 transition-transform duration-300 group-hover:scale-105"
        height={800}
        width={600}
        alt="thumbnail"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  return (
    <>
      <div
        className={cn(
          "h-[40rem] items-start overflow-y-auto w-full scrollbar-hide",
          "scrollbar-none", // Hide scrollbar for Firefox
          "[&::-webkit-scrollbar]:hidden", // Hide scrollbar for Chrome/Safari/Edge
          "-ms-overflow-style: none;", // Hide scrollbar for IE
          "scrollbar-width: none;", // Hide scrollbar for Firefox
          className
        )}
        ref={gridRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-10">
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                <ImageWrapper src={el} index={idx} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <ImageWrapper src={el} index={idx + third} />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <ImageWrapper src={el} index={idx + 2 * third} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal
        images={images}
        currentIndex={selectedImageIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
