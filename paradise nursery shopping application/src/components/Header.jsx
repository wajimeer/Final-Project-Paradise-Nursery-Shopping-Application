import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import cartIcon from '../assets/cart-icon.png';
import logo from '../assets/logo.jpg';
import './Header.css';

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Paradise Nursery Logo" className="logo-img" />
        </Link>
      </div>
      <div className="nav">
        <Link to="/products">Product Listing</Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className="cart-icon" />
          {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
