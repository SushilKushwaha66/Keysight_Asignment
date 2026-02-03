import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(ShopContext);
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your Cart is Empty</h2>
                <button onClick={() => navigate('/')}>Start Shopping</button>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            <div className="cart-items">
                {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>Price: ₹{item.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                        </div>
                        <div className="item-actions">
                            <p className="subtotal">₹{item.price * item.quantity}</p>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ₹{getCartTotal().toLocaleString()}</h3>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
