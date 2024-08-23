import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Navbar from './components/navbar';
import Footer2 from './components/footer';
import ProductDetail from './pages/ProductDetail'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Products /><Footer2 /></>} />
        <Route path="/product/:id" element={<><Navbar/><ProductDetail /><Footer2/></>} />
      </Routes>
    </Router>
  );
};

export default App;
