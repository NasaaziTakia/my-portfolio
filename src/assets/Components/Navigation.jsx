import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../CSS/Navigation.css";

function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link></li>
          <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
          <li><Link to="/mytools" className={location.pathname === '/mytools' ? 'active' : ''}>Toolkit</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;