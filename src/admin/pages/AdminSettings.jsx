import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-hot-toast';

const SETTINGS_DOC_ID = 'iTtajZ3oqFmT8PpdYQKI';
const CATALOGS_DOC_ID = 'catalogs';

const AdminSettings = () => {
  const [contact, setContact] = useState({
    address: '',
    phones: [],
    email: '',
    workingHours: [],
    social: {
      instagram: '',
      whatsapp: '',
      phone: '',
      googleMaps: '',
      yandex: '',
      apple: '',
    },
  });
  const [catalogs, setCatalogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const contactSnap = await getDoc(doc(db, 'settings', SETTINGS_DOC_ID));
        const catalogsSnap = await getDoc(doc(db, 'settings', CATALOGS_DOC_ID));
        if (contactSnap.exists()) setContact(contactSnap.data());
        if (catalogsSnap.exists()) setCatalogs(catalogsSnap.data().catalogs ?? []);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social.')) {
      const key = name.split('.')[1];
      setContact(prev => ({
        ...prev,
        social: { ...prev.social, [key]: value },
      }));
    } else if (name === 'phones' || name === 'workingHours') {
      setContact(prev => ({
        ...prev,
        [name]: value.split('\n').filter(Boolean),
      }));
    } else {
      setContact(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCatalogChange = (idx, field, value) => {
    setCatalogs(prev =>
      prev.map((cat, i) => (i === idx ? { ...cat, [field]: value } : cat))
    );
  };

  const handleAddCatalog = () => {
    setCatalogs(prev => [...prev, { label: '', href: '' }]);
  };

  const handleRemoveCatalog = (idx) => {
    setCatalogs(prev => prev.filter((_, i) => i !== idx));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateDoc(doc(db, 'settings', SETTINGS_DOC_ID), contact);
      await updateDoc(doc(db, 'settings', CATALOGS_DOC_ID), { catalogs });
      toast.success('Ayarlar kaydedildi');
    } catch {
      toast.error('Bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-center py-12">Yükleniyor...</div>;
  }

  return (
    <form onSubmit={handleSave} className="space-y-8">
      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-xl font-bold text-[#d25483] mb-4">İletişim Bilgileri</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="address" className="block font-medium mb-1">Adres</label>
            <input id="address" name="address" value={contact.address} onChange={handleContactChange} placeholder="Adres" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">E-posta</label>
            <input id="email" name="email" value={contact.email} onChange={handleContactChange} placeholder="E-posta" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="phones" className="block font-medium mb-1">Telefonlar (her satıra bir numara)</label>
            <textarea id="phones" name="phones" value={contact.phones.join('\n')} onChange={handleContactChange} placeholder="Telefonlar (her satıra bir numara)" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="workingHours" className="block font-medium mb-1">Çalışma Saatleri (her satıra bir satır)</label>
            <textarea id="workingHours" name="workingHours" value={contact.workingHours.join('\n')} onChange={handleContactChange} placeholder="Çalışma Saatleri (her satıra bir satır)" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="social.instagram" className="block font-medium mb-1">Instagram</label>
            <input id="social.instagram" name="social.instagram" value={contact.social.instagram} onChange={handleContactChange} placeholder="Instagram" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="social.whatsapp" className="block font-medium mb-1">WhatsApp</label>
            <input id="social.whatsapp" name="social.whatsapp" value={contact.social.whatsapp} onChange={handleContactChange} placeholder="WhatsApp" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="social.phone" className="block font-medium mb-1">Telefon (Randevu Al)</label>
            <input id="social.phone" name="social.phone" value={contact.social.phone} onChange={handleContactChange} placeholder="Telefon (Randevu Al)" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="social.googleMaps" className="block font-medium mb-1">Google Maps</label>
            <input id="social.googleMaps" name="social.googleMaps" value={contact.social.googleMaps} onChange={handleContactChange} placeholder="Google Maps" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="social.yandex" className="block font-medium mb-1">Yandex Navi</label>
            <input id="social.yandex" name="social.yandex" value={contact.social.yandex} onChange={handleContactChange} placeholder="Yandex Navi" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
          <div>
            <label htmlFor="social.apple" className="block font-medium mb-1">Apple Maps</label>
            <input id="social.apple" name="social.apple" value={contact.social.apple} onChange={handleContactChange} placeholder="Apple Maps" className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        <h2 className="text-xl font-bold text-[#d25483] mb-4">Kataloglar</h2>
        {catalogs.map((cat, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input value={cat.label} onChange={e => handleCatalogChange(idx, 'label', e.target.value)} placeholder="Başlık" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483] flex-1" />
            <input value={cat.href} onChange={e => handleCatalogChange(idx, 'href', e.target.value)} placeholder="Bağlantı" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483] flex-1" />
            <button type="button" onClick={() => handleRemoveCatalog(idx)} className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">Sil</button>
          </div>
        ))}
        <button type="button" onClick={handleAddCatalog} className="px-4 py-2 bg-[#d25483] text-white rounded hover:bg-[#ff3366]">Katalog Ekle</button>
      </div>
      <div className="flex justify-end">
        <button type="submit" className="px-6 py-2 bg-[#d25483] text-white rounded hover:bg-[#ff3366]">Kaydet</button>
      </div>
    </form>
  );
};

export default AdminSettings; 