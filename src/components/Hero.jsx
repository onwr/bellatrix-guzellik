import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative min-h-screen">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/salon.png')",
          filter: 'brightness(0.6)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d25483]/30 via-black/50 to-black/70" />

      {/* Content Container */}
      <div className="relative flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight text-white drop-shadow-lg md:text-7xl"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={textVariants}
          >
            Güzelliğinize
            <span className="block text-[#d25483]">Değer Katıyoruz</span>
          </motion.h1>

          <motion.p
            className="mb-12 text-xl text-white/90 drop-shadow-md md:text-2xl"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            Profesyonel ekibimiz ve son teknoloji cihazlarımızla
            <br className="hidden md:block" />
            sizlere en iyi hizmeti sunuyoruz
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={textVariants}
          >
            <a
              href="#hizmetler"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-medium text-[#d25483] transition-all duration-300 hover:bg-[#d25483] hover:text-white hover:shadow-xl"
            >
              Hizmetlerimiz
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="tel:+905555555555"
              className="group flex items-center gap-3 rounded-full bg-[#d25483] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#ff3366] hover:shadow-xl"
            >
              <FaPhoneAlt className="transition-transform duration-300 group-hover:scale-110" />
              <span>Hemen Randevu Al</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
