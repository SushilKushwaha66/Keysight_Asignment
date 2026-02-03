import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Product() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  return (
    <div className="product-details">
      <div className="details-layout">
        <div className="left-box">
          <img src="https://madpcb.com/wp-content/uploads/2020/11/Single-in-Line-Package-SIP.jpg" 
               alt="Product" className="detail-img" />
        </div>
        
        <div className="right-box">
          <h1 className="red-border">Product ID: {id}</h1>
          <div className="blue-border">4.0 Rating | 1,581 ratings</div>
          <h2 className="red-border">Price: ₹36,990</h2>
          
          <button className="cart-btn" onClick={() => navigate('/cart')}>
            Add to Cart
          </button>
          
          <div className="red-border">
            <h3>Description</h3>
            <p>This is a detailed description for product {id}.</p>
          </div>
        </div>
      </div>
    </div>
  );
}