import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminServices from './pages/AdminServices';
import AdminServiceEdit from './pages/AdminServicesEdit';
import AdminCorporate from './pages/AdminCorporate';
import AdminSettings from './pages/AdminSettings';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading) return <div>Yükleniyor...</div>;
  return user ? children : <Navigate to="/admin/login" />;
};

const AdminApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
      <Route path="/admin/services" element={<PrivateRoute><AdminServices /></PrivateRoute>} />
      <Route path="/admin/services/:id" element={<PrivateRoute><AdminServiceEdit /></PrivateRoute>} />
      <Route path="/admin/corporate" element={<PrivateRoute><AdminCorporate /></PrivateRoute>} />
      <Route path="/admin/settings" element={<PrivateRoute><AdminSettings /></PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);

export default AdminApp;
