import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    title: 'Cilt Bakımı',
    description: 'Profesyonel cilt bakımı ve yenileme uygulamaları ile cildinizi canlandırın',
    image: '/images/agda.jpg',
    link: '/services/cilt-bakimi',
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hizmetler" className="py-24 border-t border-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Hizmetlerimiz
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-600">
            Profesyonel ekibimiz ve son teknoloji cihazlarımızla sizlere en iyi hizmeti sunuyoruz
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-white/90">{service.description}</p>
                  <a
                    href={service.link}
                    className="group/link inline-flex justify-center items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:gap-3"
                  >
                    Detaylı Bilgi
                    <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
