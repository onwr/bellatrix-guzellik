import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const EyeIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4.5-7.5 10.5-7.5S22.5 12 22.5 12s-4.5 7.5-10.5 7.5S1.5 12 1.5 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Catalog = () => {
  const [catalogLinks, setCatalogLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        const docRef = doc(db, 'settings', 'catalogs');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCatalogLinks(docSnap.data().catalogs ?? []);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchCatalogs();
  }, []);

  if (isLoading) {
    return <div className="py-24 text-center">Yükleniyor...</div>;
  }

  return (
    <section className='w-full bg-gradient-to-r from-[#df4b7d]/80 via-white/5  to-[#df4b7d]/80 py-12'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 md:flex-row'>
        <div className='flex flex-1 flex-col items-start justify-center'>
          <h2 className='text-3xl leading-tight font-bold text-black/90 md:text-4xl'>
            DİJİTAL KATALOĞUMUZU
            <br />
            İNCELEYİN
          </h2>
        </div>
        <div className='flex flex-1 flex-col items-center justify-center'>
          <img src='/images/loo2.png' alt='' />
        </div>
        <div className='flex w-full flex-1 flex-col items-end justify-center gap-4 md:w-auto'>
          {catalogLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className='flex w-full items-center rounded border border-black/60 px-6 py-3 text-lg font-medium text-black/90 transition hover:bg-white hover:text-[#18514E] md:w-64'
              target='_blank'
              rel='noopener noreferrer'
            >
              <EyeIcon />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Catalog };
export default Catalog;