import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const AdminServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const querySnapshot = await getDocs(collection(db, 'services'));
      setServices(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'services', id));
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Hizmetler</h2>
        <Link to="/admin/services/new" className="mb-6 inline-block bg-[#d25483] text-white px-4 py-2 rounded">Yeni Hizmet Ekle</Link>
        <ul className="space-y-4">
          {services.map(service => (
            <li key={service.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <div className="font-semibold">{service.title}</div>
                <div className="text-gray-500">{service.description}</div>
              </div>
              <div className="flex gap-2">
                <Link to={`/admin/services/${service.id}`} className="px-3 py-1 bg-blue-500 text-white rounded">Düzenle</Link>
                <button onClick={() => handleDelete(service.id)} className="px-3 py-1 bg-red-500 text-white rounded">Sil</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminServices;
