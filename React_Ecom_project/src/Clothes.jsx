import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Clothing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const clothingData = [
      { id: "101", name: "Daikin AC", price: "36,990", img: "https://madpcb.com/wp-content/uploads/2020/11/Single-in-Line-Package-SIP.jpg" },
      { id: "102", name: "Modern Jeans", price: "1,200", img: "https://madpcb.com/wp-content/uploads/2020/11/Single-in-Line-Package-SIP.jpg" },
      { id: "103", name: "Casual T-Shirt", price: "800", img: "https://madpcb.com/wp-content/uploads/2020/11/Single-in-Line-Package-SIP.jpg" }
    ];
    setItems(clothingData);
  }, []);

  return (
    <div className="category-page">
      <h2 className="red-text">Welcome to Clothing Page</h2>
      
      <div className="product-grid">
        {items.map((item) => (
         
        <Link to={`/product/${item.id}`}>
            <div className="product-card">
              <div className="img-box">
                <img src={item.img} alt={item.name} className="resized-img" />
              </div>
              <p>{item.name}</p>
            </div>
         View Product</Link>
        ))}
      </div>
    </div>
  );
};

export default Clothing;