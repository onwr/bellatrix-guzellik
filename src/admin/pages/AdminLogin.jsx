import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch {
      setError('Giriş başarısız!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Girişi</h2>
        <input type="email" placeholder="E-posta" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded" required />
        <input type="password" placeholder="Şifre" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 px-4 py-2 border rounded" required />
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type="submit" className="w-full bg-[#d25483] text-white py-2 rounded font-semibold">Giriş Yap</button>
      </form>
    </div>
  );
};

export default AdminLogin;
