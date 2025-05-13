import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaClock } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-b border-t border-black/50 from-white to-[#d25483]/5">
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-12 md:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">İletişim Bilgileri</h3>
          <div className="space-y-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start space-x-3 text-gray-600 transition-colors hover:text-[#d25483]"
            >
              <FaMapMarkerAlt className="mt-1 text-[#d25483]" />
              <span className="group-hover:underline">
                Güneşli Mah. Üsküp Cad, 1253. Sk No:2 Kat:6 İçKapi:61, 34212 Bağcılar/İstanbul
              </span>
            </a>
            <div className="flex items-center space-x-3 text-gray-600">
              <FaPhoneAlt className="text-[#d25483]" />
              <div className="space-x-2">
                <a href="tel:02124740004" className="transition-colors hover:text-[#d25483] hover:underline">
                  0212 474 00 04
                </a>
                <span className="text-gray-400">|</span>
                <a href="tel:05322445169" className="transition-colors hover:text-[#d25483] hover:underline">
                  0532 244 51 69
                </a>
              </div>
            </div>
            <a
              href="mailto:doldurulacak@gmail.com"
              className="group flex items-center space-x-3 text-gray-600 transition-colors hover:text-[#d25483]"
            >
              <FaEnvelope className="text-[#d25483]" />
              <span className="group-hover:underline">doldurulacak@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Çalışma Saatleri</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <FaClock className="text-[#d25483]" />
              <div>
                <p>Pazartesi - Cumartesi</p>
                <p className="font-medium">10:00 - 21:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <FaClock className="text-[#d25483]" />
              <div>
                <p>Pazar</p>
                <p className="font-medium">Kapalı</p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <a
              href="https://instagram.com/hm.beauty.gunesli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 text-gray-600 transition-colors hover:text-[#d25483]"
            >
              <FaInstagram className="text-[#d25483]" />
              <span className="group-hover:underline">@doldurulacak</span>
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Konum</h3>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.234234234!2d28.853100315392!3d41.0392831792976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bea9194ba16bad%3A0xf1b1f78a1bda6a3d!2sGüneşli%20Mah.%20%C3%9Csk%C3%BCp%20Cad%2C%201253.%20Sk%20No%3A2%2C%2034212%20Ba%C4%9Fc%C4%B1lar%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1680000000000!5m2!1str!2str"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
        <p>© 2025 Bella Trix. Tüm hakları saklıdır. Digital Plus</p>
      </div>
    </div>
  </footer>
);

export default Footer;