import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

const FreeConsultation = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section className="relative  overflow-hidden bg-gradient-to-br from-[#d25483]/5 via-white to-[#d25483]/5 py-24 border-t border-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 -z-10 opacity-5">
            <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat" />
          </div>

          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Ücretsiz Ön Görüşme
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
              Size en uygun hizmeti belirlemek için uzman ekibimizle ücretsiz görüşme fırsatı
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="rounded-full bg-[#25D366]/10 p-4">
                <FaWhatsapp className="text-3xl text-[#25D366]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
              <p className="text-gray-600">Hızlı mesaj gönderin</p>
            </motion.a>

            {/* Phone Button */}
            <motion.a
              href="tel:+905555555555"
              variants={buttonVariants}
              whileHover="hover"
              className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="rounded-full bg-[#d25483]/10 p-4">
                <FaPhoneAlt className="text-3xl text-[#d25483]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Telefon</h3>
              <p className="text-gray-600">Hemen arayın</p>
            </motion.a>

            {/* Location Button */}
            <motion.a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              className="group flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="rounded-full bg-[#d25483]/10 p-4">
                <FaMapMarkerAlt className="text-3xl text-[#d25483]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Konum</h3>
              <p className="text-gray-600">Bize ulaşın</p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeConsultation;

const services = [
  {
    title: 'Cilt Bakım Protokolleri',
    description: 'Cildinizin ihtiyaçlarına özel tasarlanmış profesyonel bakım protokolleri',
    image: '/images/service1.jpg',
    link: '#',
  },
  {
    title: 'Lazer Epilasyon İşlemleri',
    description: 'En son teknoloji lazer epilasyon cihazları ile kalıcı çözümler',
    image: '/images/service2.jpg',
    link: '#',
  },
  {
    title: 'Kalıcı Makyaj İşlemleri',
    description: 'Uzman kadromuz ile doğal görünümlü kalıcı makyaj uygulamaları',
    image: '/images/service3.jpg',
    link: '#',
  },
  {
    title: 'Bölgesel İncelme İşlemleri',
    description: 'Etkili bölgesel incelme tedavileri ile formunuzu koruyun',
    image: '/images/service4.jpg',
    link: '#',
  },
];

export const Services = () => (
  <section className="bg-gray-50 py-16" id="hizmetler">
    <div className="container mx-auto px-4">
      <h2 className="mb-2 text-center text-4xl font-bold text-gray-900">Hizmetlerimiz</h2>
      <p className="mb-10 text-center text-lg text-gray-500">Profesyonel hizmetlerimizin detayları</p>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="flex rounded-2xl bg-white shadow-md transition-shadow hover:shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-44 w-44 rounded-l-2xl object-cover md:h-48 md:w-48"
            />
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
              </div>
              <a
                href={service.link}
                className="mt-auto inline-block text-sm font-medium text-[#d25483] transition-colors hover:text-[#ff3366]"
              >
                Detaylı Bilgi &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);