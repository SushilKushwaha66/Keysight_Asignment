import React from 'react';

const Category = ({ type }) => {
  return (
    <div>
      <h2 className="red-text">Welcome to {type} Page</h2>
      
      <div className="product-grid">
        {/* Example of 3 boxes */}
        <div className="product-card">
          <div className="placeholder-img"></div>
          <p>Product Name</p>
        </div>

        <div className="product-card">
          <div className="placeholder-img"></div>
          <p>Product Name</p>
        </div>

        <div className="product-card">
          <div className="placeholder-img"></div>
          <p>Product Name</p>
        </div>
      </div>

      <p className="file-label">Category.js</p>
    </div>
  );
};

export default Category;