import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetails from './Productdetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import { ShopProvider } from './context/ShopContext';
import './App.css';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/product/:productId" element={<ProductDetails />} />

              <Route path="/electronics" element={<Home category="Electronics" />} /> {/* Reusing Home with filter logic later or just filter in page */}
              <Route path="/clothing" element={<Home category="Clothing" />} />

              <Route path="/about" element={<div className="page"><h2>About Us</h2><p>We are the best e-commerce store.</p></div>} />
              <Route path="/contact" element={<div className="page"><h2>Contact Us</h2><p>Email: support@shoppy.com</p></div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;