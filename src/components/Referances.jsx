import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    text: 'Hijyen standartları en üst seviyede, cihazları son sistem ve çalışanları çok ilgili işinin ehli uzmanlar. Özellikle yönetici Yağmur hanıma çok teşekkür ederim.',
    name: 'Dilan K.',
    subtitle: 'Genel Değerlendirme',
    rating: 5,
  },
  {
    text: 'İlk defa geldim ve çok memnun kaldım. Güler yüzlü ve profesyonel bir ekip. Herkese tavsiye ederim.',
    name: 'Merve T.',
    subtitle: 'Cilt Bakımı',
    rating: 5,
  },
  {
    text: 'Lazer epilasyon işlemlerinden çok memnun kaldım. Sonuçlar harika, teşekkürler Bella Trix!',
    name: 'Ayşe Y.',
    subtitle: 'Lazer Epilasyon',
    rating: 5,
  },
  {
    text: 'Salonun temizliği ve çalışanların ilgisi mükemmel. Her gelişimde kendimi çok özel hissediyorum.',
    name: 'Elif B.',
    subtitle: 'Genel Değerlendirme',
    rating: 5,
  },
  {
    text: 'Kalıcı makyaj uygulaması tam istediğim gibi oldu. Doğal ve kalıcı, ellerinize sağlık!',
    name: 'Zeynep S.',
    subtitle: 'Kalıcı Makyaj',
    rating: 5,
  },
  {
    text: 'Bölgesel incelme işlemlerinde gözle görülür bir fark yaşadım. Sonuçtan çok memnunum.',
    name: 'Gizem A.',
    subtitle: 'Bölgesel İncelme',
    rating: 5,
  },
  {
    text: 'Danışmanlık hizmetleri çok açıklayıcı ve güven verici. Tüm sorularıma detaylı cevap aldım.',
    name: 'Burcu D.',
    subtitle: 'Danışmanlık',
    rating: 5,
  },
  {
    text: 'Randevu sistemi çok pratik, beklemeden işlem yaptırabiliyorum. Her şey için teşekkürler.',
    name: 'Seda U.',
    subtitle: 'Randevu Deneyimi',
    rating: 5,
  },
  {
    text: 'Çalışanlar çok ilgili ve samimi. Her işlem öncesi detaylı bilgilendirme yapılıyor.',
    name: 'Ece M.',
    subtitle: 'Genel Değerlendirme',
    rating: 5,
  },
  {
    text: 'Salonun atmosferi çok huzurlu ve rahatlatıcı. Kendimi evimde gibi hissediyorum.',
    name: 'Büşra P.',
    subtitle: 'Atmosfer',
    rating: 5,
  },
];

const Referances = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#d25483]/5 via-white to-[#d25483]/5 py-24 border-t border-black/50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Müşterilerimiz Ne Düşünüyor?
          </h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-600">
            Deneyimlerini paylaşan değerli müşterilerimizin yorumları
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-3"
            >
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="absolute -top-4 left-8 rounded-full bg-[#d25483]/10 p-3">
                    <FaQuoteLeft className="text-2xl text-[#d25483]" />
                  </div>
                  <div className="mt-4">
                    <p className="mb-6 text-lg text-gray-700">{testimonial.text}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.subtitle}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={handlePrev}
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700 shadow-md transition-all duration-300 hover:bg-[#d25483] hover:text-white hover:shadow-lg"
            >
              <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
              Önceki
            </button>
            <button
              onClick={handleNext}
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-gray-700 shadow-md transition-all duration-300 hover:bg-[#d25483] hover:text-white hover:shadow-lg"
            >
              Sonraki
              <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referances;
