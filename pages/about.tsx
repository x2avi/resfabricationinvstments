import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { Righteous } from "next/font/google";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

// About page content
const ABOUT_CONTENT = [
  {
    title: "Our Story",
    description: "Founded with a vision to transform living spaces into extraordinary environments, our journey began with a simple belief: every home deserves to be beautiful, functional, and uniquely personal.",
    image: "/about-story.jpg",
    features: [
      "4+ Years Experience",
      "Award-Winning Designs",
      "Expert Craftmanship",
      "Customer Satisfaction"
    ]
  },
  {
    title: "Our Approach",
    description: "We combine innovative design with meticulous attention to detail. Every project is handled with care, precision, and a commitment to exceeding expectations.",
    image: "/about-approach.jpg",
    features: [
      "Personalized Service",
      "Sustainable Practices",
      "Quality Materials",
      "Timely Delivery"
    ]
  },
  {
    title: "Our Team",
    description: "Our team consists of passionate professionals, each bringing unique expertise and creativity to every project. We work collaboratively to bring your vision to life.",
    image: "/about-team.jpg",
    features: [
      "Licensed Contractors",
      "Skilled Designers",
      "Project Managers",
      "Support Staff"
    ]
  }
];

export default function About() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contacts');
  };

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-black antialiased`}
    >
      <Header />
      
      <section className="max-w-7xl mx-auto">
        <div className="my-10 md:my-20 px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming homes and creating beautiful spaces that inspire and delight.
            </p>
          </motion.div>
        
          {ABOUT_CONTENT.map((section, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              key={index} 
              className="mb-16 last:mb-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 group">
                {/* Image Container */}
                <div
                  className={`lg:w-1/2 mb-6 lg:mb-0 ${
                    index % 2 === 0 ? "" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex flex-col lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"
                  } space-y-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-center lg:text-left">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left text-gray-700">
                    {section.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="pt-4">
                    <ul className="space-y-2">
                      {section.features?.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-600"
                        >
                          <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a free consultation and let's bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
              onClick={handleContactClick}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
