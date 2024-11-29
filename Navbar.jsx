import React from 'react';
import ivflogo from './imgs/ivf-pulse-logo.png';
import icon from './imgs/icon.png';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img className="navbar-img" src={ivflogo} />
        <ul className="navbar-list">
            <li>Donor Programme</li>
            <li>Fertility Preservation</li>
            <li>Advanced Treatments</li>
            <li>Infertility Treatments</li>
            <li>IVF Testing</li>
            <li>About Us</li>
        </ul>
        <button className="btn navbar-btn">Talk to Us &#8594;</button>
        <img className="navbar-m-icon" src={icon} />
    </nav>
  );             
}
