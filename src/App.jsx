import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import ServicesDetail from '@pages/ServicesDetail'
import Kurumsal from '@pages/Kurumsal'
import Contact from '@pages/Contact'
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services/:serviceId' element={<ServicesDetail />} />
      <Route path='/kurumsal' element={<Kurumsal />} />
      <Route path='/iletisim' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default App;
