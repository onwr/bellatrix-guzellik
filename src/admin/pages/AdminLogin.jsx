import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-[#d25483] text-center">Admin Giriş</h2>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]"
            required
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">Şifre</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 p-2 outline-none focus:ring-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#d25483] focus:ring-[#d25483]"
            required
          />
        </div>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="w-full py-3 rounded bg-[#d25483] text-white font-semibold hover:bg-[#ff3366] transition"
          disabled={isLoading}
        >
          {isLoading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin; 