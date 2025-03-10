import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper for slider
import "swiper/css"; // Import Swiper styles

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "Ahsan's frontend skills are amazing! He transformed our website into a high-performance and visually stunning platform.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    feedback:
      "Working with Ahsan was a game-changer. His animations and interactive UI made our project truly stand out.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Smith",
    role: "Project Manager",
    feedback:
      "Ahsan is a fantastic developer! He is detail-oriented and always delivers beyond expectations. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Freelance Client",
    feedback:
      "Ahsan brought my ideas to life with his exceptional frontend development skills. The result was simply outstanding!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <section className="relative w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue to-dark-blue text-white px-6 md:px-16 py-12 md:py-20 font-mono overflow-hidden">
      {/* Background Text for Depth */}
      {["REVIEWS", "TESTIMONIALS", "FEEDBACK"].map((word, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: [0, 0.1, 0], y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute font-extrabold opacity-10 text-[12vw] md:text-[9vw] text-purple"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        >
          {word}
        </motion.div>
      ))}

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple to-white bg-clip-text text-transparent"
      >
        What <span className="text-purple">Clients Say</span>
      </motion.h2>

      <p className="text-lg text-gray-300 mt-4 text-center max-w-2xl">
        Here’s what my clients and colleagues say about my **frontend
        development** expertise.
      </p>

      {/* Testimonial Cards Carousel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        className="mt-12 w-full max-w-5xl"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-lg cursor-pointer hover:shadow-purple-500 transition-all relative flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-purple text-3xl absolute top-4 left-4 opacity-50" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-purple shadow-md mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
              <p className="text-gray-300 mt-4">{testimonial.feedback}</p>
              <FaQuoteRight className="text-purple text-3xl absolute bottom-4 right-4 opacity-50" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
