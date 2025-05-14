import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { toast } from 'react-hot-toast';

const IMGBB_API_KEY = '48e17415bdf865ecc15389b796c9ec79';

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: '',
    image: '',
    description: '',
    benefits: '',
    process: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const fetchServices = async () => {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, 'services'));
    setServices(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (service) => {
    setEditing(service.id);
    setForm({
      title: service.title,
      image: service.image,
      description: service.description,
      benefits: (service.benefits || []).join('\n'),
      process: (service.process || []).join('\n'),
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'services', id));
    toast.success('Silindi');
    fetchServices();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setForm(prev => ({ ...prev, image: data.data.url }));
        toast.success('Görsel yüklendi');
      } else {
        toast.error('Görsel yüklenemedi');
      }
    } catch {
      toast.error('Görsel yüklenemedi');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: form.title,
      image: form.image,
      description: form.description,
      benefits: form.benefits.split('\n').filter(Boolean),
      process: form.process.split('\n').filter(Boolean),
    };
    if (editing) {
      await updateDoc(doc(db, 'services', editing), data);
      toast.success('Güncellendi');
    } else {
      await addDoc(collection(db, 'services'), data);
      toast.success('Eklendi');
    }
    setEditing(null);
    setForm({ title: '', image: '', description: '', benefits: '', process: '' });
    fetchServices();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 space-y-4 mb-8">
        <h2 className="text-xl font-bold text-[#d25483] mb-2">{editing ? 'Servisi Düzenle' : 'Yeni Servis Ekle'}</h2>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Başlık" className="mt-1 block outline-none w-full rounded-md border-gray-300 p-2 focus:ring-1 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" required />
        <div>
          <label className="block font-medium mb-1">Görsel Yükle</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-[#d25483]/10 file:text-[#d25483] hover:file:bg-[#d25483]/20" />
          {isUploading && <div className="text-sm text-gray-500 mt-2">Yükleniyor...</div>}
          {form.image && !isUploading && (
            <img src={form.image} alt="Hizmet görseli" className="mt-2 h-24 rounded shadow" />
          )}
        </div>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Açıklama" className="mt-1 block outline-none w-full rounded-md border-gray-300 p-2 focus:ring-1 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" required />
        <textarea name="benefits" value={form.benefits} onChange={handleChange} placeholder="Faydalar (her satıra bir madde)" className="mt-1 block outline-none w-full rounded-md border-gray-300 p-2 focus:ring-1 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
        <textarea name="process" value={form.process} onChange={handleChange} placeholder="Uygulama Süreci (her satıra bir adım)" className="mt-1 block outline-none w-full rounded-md border-gray-300 p-2 focus:ring-1 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]" />
        <div className="flex gap-2 justify-end">
          {editing && (
            <button type="button" onClick={() => { setEditing(null); setForm({ title: '', image: '', description: '', benefits: '', process: '' }); }} className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Vazgeç</button>
          )}
          <button type="submit" className="px-6 py-2 bg-[#d25483] text-white rounded hover:bg-[#ff3366]" disabled={isUploading}>{editing ? 'Güncelle' : 'Ekle'}</button>
        </div>
      </form>
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-8">Yükleniyor...</div>
        ) : (
          services.map(service => (
            <div key={service.id} className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="font-bold text-lg">{service.title}</div>
                <div className="text-gray-500">{service.description}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(service)} className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Düzenle</button>
                <button onClick={() => handleDelete(service.id)} className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200">Sil</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminServices; 