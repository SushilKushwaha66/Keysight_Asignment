import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from './context/ShopContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="not-found">Product not found!</div>;
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-details-page">
      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details-info">
          <h1>{product.title}</h1>
          <div className="rating">Rating: {product.rating} ⭐</div>
          <h2 className="price">₹{product.price.toLocaleString()}</h2>
          <p className="description">{product.description}</p>
          <p className="category-tag">Category: {product.category}</p>

          <div className="actions">
            <button className="add-cart-btn large" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="products-grid">
            {relatedProducts.map(rp => (
              <div className="product-card" key={rp.id} onClick={() => navigate(`/product/${rp.id}`)}>
                <img src={rp.image} alt={rp.title} />
                <p>{rp.title}</p>
                <h4>₹{rp.price.toLocaleString()}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;