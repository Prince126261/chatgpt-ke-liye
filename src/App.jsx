import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Header />s 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;