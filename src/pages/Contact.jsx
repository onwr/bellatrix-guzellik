import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkedAlt, FaApple } from 'react-icons/fa';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-[#fafafa]">
    <Header />
    <main className="flex-1 mt-20">
      {/* Hero */}
      <div className="relative h-56 md:h-96 flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10" />
        <div className="relative z-10 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Bize Ulaşın</h1>
          <p className="text-white/90 text-base md:text-lg">Detaylı Bilgi & Ücretsiz Ön Görüşme İçin Bizimle İletişime Geçin</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-8">İletişim Bilgileri</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
              <FaMapMarkerAlt className="text-2xl text-black mt-1" />
              <div>
                <div className="font-semibold">Adres</div>
                <div className="text-gray-700 text-sm">Güneşli Mah. Üsküp Cad, 1253. Sk No:2 Kat:6 İçKapı:61, 34212 Bağcılar/İstanbul</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
              <FaPhoneAlt className="text-2xl text-black mt-1" />
              <div>
                <div className="font-semibold">Telefon</div>
                <div className="text-gray-700 text-sm">0212 474 00 04<br />0532 244 51 69</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
              <FaEnvelope className="text-2xl text-black mt-1" />
              <div>
                <div className="font-semibold">E-posta</div>
                <div className="text-gray-700 text-sm">hmbeautygunesli@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
              <FaClock className="text-2xl text-black mt-1" />
              <div>
                <div className="font-semibold">Çalışma Saatleri</div>
                <div className="text-gray-700 text-sm">Pazartesi - Cumartesi: 10:00 - 21:00<br />Pazar: Kapalı</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="font-semibold mb-2">Sosyal Medya</div>
            <a href="https://instagram.com/hm.beauty.gunesli" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-[#d25483] transition-colors">
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div>
          <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Ücretsiz Ön Görüşme</h2>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-500 text-white font-semibold py-3 text-lg transition hover:bg-green-600"
            >
              <FaWhatsapp /> Whatsapptan Ulaş
            </a>
            <a
              href="tel:+905555555555"
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white font-semibold py-3 text-lg transition hover:bg-blue-700"
            >
              <FaPhone /> Hemen Ara
            </a>
            <a
              href="https://www.google.com/maps/place/Bella+Trix+Güzellik+Merkezi/@37.8592831,27.2605257,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white font-semibold py-3 text-lg transition hover:bg-red-600"
            >
              <FaMapMarkedAlt /> Google Maps
            </a>
            <a
              href="yandexnavi://map_search?text=Bella%20Trix%20Güzellik%20Merkezi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white font-semibold py-3 text-lg transition hover:bg-red-600"
            >
              <FaMapMarkerAlt /> Yandex Nav
            </a>
            <a
              href="http://maps.apple.com/?q=Bella+Trix+Güzellik+Merkezi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white font-semibold py-3 text-lg transition hover:bg-gray-800"
            >
              <FaApple /> Apple Maps
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Contact;