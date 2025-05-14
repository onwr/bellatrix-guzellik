import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkedAlt, FaApple } from 'react-icons/fa';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const docRef = doc(db, 'settings', 'iTtajZ3oqFmT8PpdYQKI');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContact(docSnap.data());
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchContact();
  }, []);

  if (isLoading) {
    return <div className="py-24 text-center">Yükleniyor...</div>;
  }

  if (!contact) {
    return <div className="py-24 text-center">İletişim bilgileri bulunamadı.</div>;
  }

  return (
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
                  <div className="text-gray-700 text-sm">{contact.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
                <FaPhoneAlt className="text-2xl text-black mt-1" />
                <div>
                  <div className="font-semibold">Telefon</div>
                  <div className="text-gray-700 text-sm">
                    {contact.phones}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
                <FaEnvelope className="text-2xl text-black mt-1" />
                <div>
                  <div className="font-semibold">E-posta</div>
                  <div className="text-gray-700 text-sm">{contact.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-xl shadow p-5">
                <FaClock className="text-2xl text-black mt-1" />
                <div>
                  <div className="font-semibold">Çalışma Saatleri</div>
                  <div className="text-gray-700 text-sm">
                    {contact.workingHours?.map((wh, i) => (
                      <div key={i}>{wh}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="font-semibold mb-2">Sosyal Medya</div>
              <a href={contact.social?.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-[#d25483] transition-colors">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Right: Quick Actions */}
          <div>
            <div className="bg-white rounded-xl shadow p-8 flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-4 text-center">Ücretsiz Ön Görüşme</h2>
              <a
                href={contact.social?.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-green-500 text-white font-semibold py-3 text-lg transition hover:bg-green-600"
              >
                <FaWhatsapp /> Whatsapptan Ulaş
              </a>
              <a
                href={`tel:${contact.social?.phone}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white font-semibold py-3 text-lg transition hover:bg-blue-700"
              >
                <FaPhone /> Hemen Ara
              </a>
              <a
                href={contact.social?.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white font-semibold py-3 text-lg transition hover:bg-red-600"
              >
                <FaMapMarkedAlt /> Google Maps
              </a>
              <a
                href={contact.social?.yandex}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-red-500 text-white font-semibold py-3 text-lg transition hover:bg-red-600"
              >
                <FaMapMarkerAlt /> Yandex Nav
              </a>
              <a
                href={contact.social?.apple}
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
};

export default Contact;