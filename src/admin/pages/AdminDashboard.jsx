import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h1 className="text-3xl font-bold mb-8">Admin Paneli</h1>
    <div className="flex flex-col gap-4">
      <Link to="/admin/services" className="px-6 py-3 bg-[#d25483] text-white rounded text-lg font-semibold text-center">Hizmetler</Link>
      <Link to="/admin/corporate" className="px-6 py-3 bg-[#d25483] text-white rounded text-lg font-semibold text-center">Kurumsal</Link>
      <Link to="/admin/settings" className="px-6 py-3 bg-[#d25483] text-white rounded text-lg font-semibold text-center">Ayarlar</Link>
    </div>
  </div>
);

export default AdminDashboard;
