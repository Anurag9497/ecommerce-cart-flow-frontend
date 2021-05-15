import React from 'react';
import './index.css';
import cart from '../../images/cart.png';

function Navbar() {
    return (
        <div id="navbar">
            <span id="navbar-span">Shopping</span>
            <div id="navbar-div">
                <a href="#1" className="navbar-link">Home</a>
                <a href="#1" className="navbar-link">My Orders</a>
                <a href="#1" className="navbar-link">
                    <img src={cart} alt="cart-logo" id="cart-logo"/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
