import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/21.jpg';

export const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      document.getElementById('click').checked = false; // Close the menu
    }
  };

  return (
    <div>
      <div className='stickynav'>
        <div className='main-container'>
        
          <nav>
          <img src={logo} alt='logo' className='fotterlogo2'/>
            <Link to="/" className="logo">
            <h3>N<span>ue</span>S<span>tyle</span></h3>
            </Link>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
              <i className="material-symbols-outlined">menu</i>
            </label>
            <ul>
            <li><Link to="/" onClick={() => scrollToSection('home')}><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/About" onClick={() => scrollToSection('about')}><i className="fas fa-info-circle"></i> About Us</Link></li>
        <li><Link to="/Gallery" onClick={() => scrollToSection('gallery')}><i className="fas fa-image"></i> Gallery</Link></li>
        <li><Link to="/Contact" onClick={() => scrollToSection('contact')}><i className="fas fa-envelope"></i> Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Your content sections with corresponding ids */}
      <div id="home">
        {/* Content of the home section */}
      </div>
      <div id="about">
        {/* Content of the about section */}
      </div>
      <div id="gallery">
        {/* Content of the gallery section */}
      </div>
      <div id="contact">
        {/* Content of the contact section */}
      </div>
    </div>
  );
};
