import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ category }) => {
  const { products, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products;

  return (
    <div className="home-page">
      {!category && (
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Shoppy</h1>
            <p>Discover the best deals on Electronics, Clothing, and more.</p>
            <button onClick={() => navigate('/electronics')} className="hero-btn">Shop Electronics</button>
          </div>
        </section>
      )}

      <div className="products-container">
        <h2>{category ? `${category}` : "Featured Products"}</h2>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-img" onClick={() => navigate(`/product/${product.id}`)} />
              <div className="product-info">
                <Link to={`/product/${product.id}`} className="product-title">{product.title}</Link>
                <div className="product-rating">⭐ {product.rating}</div>
                <h3 className="product-price">₹{product.price.toLocaleString()}</h3>
                <button className="add-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;