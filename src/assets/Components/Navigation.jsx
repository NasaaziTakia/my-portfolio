import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../CSS/Navigation.css";

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`navigation ${isMobileMenuOpen ? 'nav-open' : ''}`}>
      <nav>
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}>About Me</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''} onClick={closeMobileMenu}>Portfolio</Link></li>
          <li><Link to="/mytools" className={location.pathname === '/mytools' ? 'active' : ''} onClick={closeMobileMenu}>Toolkit</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;