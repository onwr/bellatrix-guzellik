import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import AdminSettings from './pages/AdminSettings';
import AdminServices from './pages/AdminServices';

const TABS = [
  { label: 'Ayarlar', value: 'settings' },
  { label: 'Servisler', value: 'services' },
];

const AdminApp = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setIsAuthLoading(false);
      if (!user) navigate('/admin/login');
    });
    return () => unsubscribe();
  }, [navigate]);

  if (isAuthLoading) {
    return <div className="min-h-screen flex items-center justify-center text-lg">Yükleniyor...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#d25483]">Admin Paneli</h1>
        <nav className="flex gap-4">
          {TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded font-medium transition ${
                activeTab === tab.value
                  ? 'bg-[#d25483] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="p-8 max-w-4xl mx-auto">
        {activeTab === 'settings' && <AdminSettings />}
        {activeTab === 'services' && <AdminServices />}
      </main>
    </div>
  );
};

export default AdminApp; 