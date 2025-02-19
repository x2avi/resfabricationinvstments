import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full flex flex-col">
          <Header />
          <div className="flex flex-col h-full w-full md:grid md:grid-cols-10 gap-4 p-4 md:p-10">
            <div className="md:col-span-4 flex flex-col justify-end md:justify-center">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="md:col-span-6 flex flex-col justify-start md:justify-center space-y-4">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    location: "Harare, Zimbabwe",
    description:
      "Our welding company is renowned for providing top-quality fabrication services, tailored to meet the specific needs of our clients. From intricate design to robust construction, we ensure exceptional results every time.",
    title: "TOP-TIER WELDING SOLUTIONS",
  },
  
  {
    img: "/2.png",
    location: "Bulawayo, Zimbabwe",
    description:
      "Specializing in both residential and commercial projects, our team delivers precision and strength in every weld. We transform your visions into reality with unmatched expertise.",
    title: "EXPERT WELDING SERVICES",
  },
  
  {
    img: "/3.png",
    location: "Gweru, Zimbabwe",
    description:
      "From custom metalwork to large-scale industrial fabrication, our welding services are designed to meet the highest industry standards, ensuring durability and quality.",
    title: "INDUSTRIAL FABRICATION",
  },
  
  {
    img: "/4.png",
    location: "Mutare, Zimbabwe",
    description:
      "Our experienced welders use state-of-the-art equipment to deliver exceptional craftsmanship on every project. Trust us to handle all your welding needs with precision and care.",
    title: "PRECISION WELDING CRAFTSMANSHIP",
  },
  {
    img: "/7.png",
    location: "Masvingo, Zimbabwe",
    description:
      "Committed to excellence, our welding company provides a range of services including structural welding, repair work, and custom metal projects. Your satisfaction is our priority.",
    title: "COMPREHENSIVE WELDING SOLUTIONS",
  },
  
];

const initData = sliderData[0];
