import"../CSS/Navigation.css";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/mytools">Toolkit</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;