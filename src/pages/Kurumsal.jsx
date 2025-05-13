import React, { useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { FaRegBuilding, FaEye, FaBullseye, FaGem } from 'react-icons/fa';

const TABS = [
  {
    key: 'hakkimizda',
    label: 'Hakkımızda',
    icon: <FaRegBuilding />,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Elegance Concept Hakkında</h2>
        <p className="mb-4 text-gray-700">
          2024 yılından bu yana kuşadası hazır kapı, kuşadası iç kapı, kuşadası iç hazır kapı, kuşadası yangına dayanıklı kapı, kuşadası hazır kapak, mutfak banyo hazır kapak sektöründe faaliyet gösteren firmamız, müşteri memnuniyetini esas alarak çalışmalarını sürdürmektedir.
        </p>
        <p className="mb-4 text-gray-700">
          Modern üretim tesislerimizde, en son teknoloji ile üretim yaparak kaliteli ve güvenilir ürünler sunmaktayız.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Modern makine parkuru</li>
          <li>Deneyimli üretim kadrosu</li>
          <li>Kalite kontrol sistemleri</li>
          <li>Ar-Ge çalışmaları</li>
        </ul>
      </div>
    ),
  },
  {
    key: 'vizyon',
    label: 'Vizyonumuz',
    icon: <FaEye />,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Vizyonumuz</h2>
        <p className="text-gray-700">
          Sektörümüzde yenilikçi, güvenilir ve lider bir marka olmak; müşteri memnuniyetini en üst seviyede tutmak ve sürdürülebilir başarıya ulaşmak.
        </p>
      </div>
    ),
  },
  {
    key: 'misyon',
    label: 'Misyonumuz',
    icon: <FaBullseye />,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Misyonumuz</h2>
        <p className="text-gray-700">
          Müşterilerimize kaliteli, yenilikçi ve güvenilir ürünler sunmak; çalışanlarımızın gelişimine katkı sağlamak ve topluma değer katmak.
        </p>
      </div>
    ),
  },
  {
    key: 'degerler',
    label: 'Değerlerimiz',
    icon: <FaGem />,
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Değerlerimiz</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Dürüstlük ve güven</li>
          <li>Yenilikçilik</li>
          <li>Müşteri odaklılık</li>
          <li>Sürekli gelişim</li>
          <li>Sosyal sorumluluk</li>
        </ul>
      </div>
    ),
  },
];

const Kurumsal = () => {
  const [activeTab, setActiveTab] = useState('hakkimizda');

  const currentTab = TABS.find((tab) => tab.key === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-20">
        <div className="container mx-auto px-4 pt-8">
          <div className="overflow-hidden rounded-3xl mb-8">
            <div
              className="relative h-56 md:h-96 flex items-center justify-center"
              style={{ backgroundImage: "url('/images/kurumsal.png')" }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">Kurumsal</h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex container mx-auto w-full flex-wrap gap-3 mb-10">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d25483] focus:ring-offset-2
                  ${activeTab === tab.key ? 'bg-black text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="container mx-auto border border-pink-200 bg-white rounded-2xl p-8 mb-16">
            {currentTab?.content}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kurumsal;