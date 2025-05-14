import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const ServicesDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const docRef = doc(db, 'services', serviceId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setService(docSnap.data());
        } else {
          setService(null);
        }
      } catch (error) {
        setService(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchService();
  }, [serviceId]);

  if (isLoading) {
    return <div className="py-24 text-center">Yükleniyor...</div>;
  }

  if (!service) {
    return <div className="py-24 text-center">Hizmet bulunamadı.</div>;
  }

  return (
    <div>
      <Header />
      <div
        className='relative flex h-[40vh] items-end bg-cover bg-center'
        style={{ backgroundImage: `url('${service.image}')` }}
      >
        <div className='absolute inset-0 bg-black/40' />
        <div className='relative z-10 container mx-auto w-full px-6 pb-16'>
          <div className='mb-2 text-sm text-white/80'>&lt; Hizmetler</div>
          <h1 className='mb-2 text-4xl font-bold text-white'>{service.title}</h1>
          <p className='text-lg text-white/90'>
            Cildinizin ihtiyaçlarına özel tasarlanmış profesyonel bakım hizmetleri ile cildinizi yenileyin.
          </p>
        </div>
      </div>

      <div className='container mx-auto grid gap-10 rounded-2xl bg-white px-6 py-16 md:grid-cols-3'>
        <div className='md:col-span-2'>
          <h2 className='mb-4 text-2xl font-bold'>Hizmet Detayları</h2>
          <p className='leading-relaxed whitespace-pre-line text-gray-700'>{service.description}</p>
        </div>
        <div>
          <div className='rounded-xl border border-black/10 bg-[#d25483]/5 p-6'>
            <h3 className='mb-4 text-lg font-semibold'>Faydaları</h3>
            <ul className='list-inside list-disc space-y-2 text-gray-700'>
              {service.benefits?.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='border-t border-black/40 py-16'>
        <div className='mx-auto container px-6'>
          <h2 className='mb-8 text-center text-2xl font-bold'>Uygulama Süreci</h2>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-5'>
            {service.process?.map((step, i) => (
              <div
                key={step}
                className='flex flex-col items-center rounded-xl bg-[#d25483]/30 p-6 shadow'
              >
                <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-800'>
                  {i + 1}
                </div>
                <div className='text-center text-gray-700'>{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServicesDetail;