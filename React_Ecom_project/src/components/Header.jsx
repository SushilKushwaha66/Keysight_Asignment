import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Header = () => {
  const { cart } = useContext(ShopContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">Shoppy</div>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        <NavLink to="/electronics" className={({ isActive }) => isActive ? "active-link" : ""}>Electronics</NavLink>
        <NavLink to="/clothing" className={({ isActive }) => isActive ? "active-link" : ""}>Clothing</NavLink>
        <NavLink to="/admin" className={({ isActive }) => isActive ? "active-link" : ""}>Admin</NavLink>
      </nav>
      <div className="header-actions">
        <NavLink to="/cart" className="cart-link">
          Cart ({cartCount})
        </NavLink>
      </div>
    </header>
  );
};

export default Header;