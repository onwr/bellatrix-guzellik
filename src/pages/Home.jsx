import React from 'react'
import Header from '@components/Header'
import Hero from '@components/Hero'
import FreeConsultation from '@components/FreeConsultation'
import Services from '@components/Services'
import Referances from '@components/Referances'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <FreeConsultation />
        <Referances />
      </main>
      <Footer />
    </div>
  );
};

export default Home