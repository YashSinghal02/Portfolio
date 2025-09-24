import { Link } from 'react-router';
import './NavBar.css';
import Logo from '../../assets/logo.png';


function NavBar() {
  return (
    <nav className="navbar">
      <div className='logo'> 
        <i className="fa-solid fa-less-than"></i>
        <span >Yash <span className='lastName'>Singhal /</span></span>
        <i className="fa-solid fa-greater-than lastName"></i></div>
      <ul className="nav-ul">
        <li className="nav-li"><Link to="/">Home</Link></li>
        <li className="nav-li"><Link to="/about">About</Link></li>
        <li className="nav-li"><Link to="/education">Education</Link></li>
        <li className="nav-li"><Link to="/skills">Skills</Link></li>
        <li className="nav-li"><Link to="/projects">Projects</Link></li>
        <li className="nav-li"><Link to="/contact">Contact</Link></li>
        {/* <li className='nav-li bar'><i class="fa-solid fa-bars"></i></li> */}
      </ul>
      {/* <div className="bar">
        <i class="fa-solid fa-bars"></i>
      </div> */}
    </nav>
  );
}

export default NavBar;
