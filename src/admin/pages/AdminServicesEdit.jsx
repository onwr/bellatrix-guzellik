import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, setDoc, getDoc, addDoc, collection } from 'firebase/firestore';
import { uploadImageToImgbb } from '../../utils/imgbb';

const emptyService = {
  title: '',
  description: '',
  benefits: [],
  process: [],
  image: '',
};

const AdminServiceEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(emptyService);
  const [isNew, setIsNew] = useState(id === 'new');
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (!isNew) {
      getDoc(doc(db, 'services', id)).then(docSnap => {
        if (docSnap.exists()) setService(docSnap.data());
      });
    }
  }, [id, isNew]);

  const handleChange = (e) => setService({ ...service, [e.target.name]: e.target.value });

  const handleArrayChange = (field, idx, value) => {
    const arr = [...service[field]];
    arr[idx] = value;
    setService({ ...service, [field]: arr });
  };

  const handleAddArrayItem = (field) => setService({ ...service, [field]: [...service[field], ''] });

  const handleRemoveArrayItem = (field, idx) => {
    const arr = [...service[field]];
    arr.splice(idx, 1);
    setService({ ...service, [field]: arr });
  };

  const handleImageChange = (e) => setImageFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = service.image;
    if (imageFile) {
      imageUrl = await uploadImageToImgbb(imageFile);
    }
    const data = { ...service, image: imageUrl };
    if (isNew) {
      await addDoc(collection(db, 'services'), data);
    } else {
      await setDoc(doc(db, 'services', id), data);
    }
    navigate('/admin/services');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">{isNew ? 'Yeni Hizmet' : 'Hizmeti Düzenle'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="title" value={service.title} onChange={handleChange} placeholder="Başlık" className="w-full border px-4 py-2 rounded" required />
          <textarea name="description" value={service.description} onChange={handleChange} placeholder="Açıklama" className="w-full border px-4 py-2 rounded" required />
          <div>
            <div className="font-semibold mb-2">Faydalar</div>
            {service.benefits.map((b, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input value={b} onChange={e => handleArrayChange('benefits', i, e.target.value)} className="flex-1 border px-2 py-1 rounded" />
                <button type="button" onClick={() => handleRemoveArrayItem('benefits', i)} className="bg-red-500 text-white px-2 rounded">Sil</button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddArrayItem('benefits')} className="bg-blue-500 text-white px-2 rounded">Ekle</button>
          </div>
          <div>
            <div className="font-semibold mb-2">Süreç</div>
            {service.process.map((p, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input value={p} onChange={e => handleArrayChange('process', i, e.target.value)} className="flex-1 border px-2 py-1 rounded" />
                <button type="button" onClick={() => handleRemoveArrayItem('process', i)} className="bg-red-500 text-white px-2 rounded">Sil</button>
              </div>
            ))}
            <button type="button" onClick={() => handleAddArrayItem('process')} className="bg-blue-500 text-white px-2 rounded">Ekle</button>
          </div>
          <div>
            <div className="font-semibold mb-2">Görsel</div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {service.image && <img src={service.image} alt="" className="mt-2 h-24 rounded" />}
          </div>
          <button type="submit" className="w-full bg-[#d25483] text-white py-2 rounded font-semibold">{isNew ? 'Ekle' : 'Kaydet'}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminServiceEdit;
