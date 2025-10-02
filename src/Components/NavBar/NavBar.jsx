import './NavBar.css';
import Logo from '../../assets/logo.png';
import { useState } from "react";

function NavBar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  
  const toggleHamburgerMenu = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  

  console.log(showHamburgerMenu)

  return (
    <nav className="navbar">
      <div className='logo'> 
        <i className="fa-solid fa-less-than"></i>
        <span >Yash <span className='lastName'>Singhal /</span></span>
        <i className="fa-solid fa-greater-than lastName"></i></div>
         <div className="bar " onClick={toggleHamburgerMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className="nav-ul">
        <li className="nav-li"><a href="#home">Home</a></li>
        <li className="nav-li"><a href="#about">About</a></li>
        <li className="nav-li"><a href="#education">Education</a></li>
        <li className="nav-li"><a href="#skills">Skills</a></li>
        <li className="nav-li"><a href="#projects">Projects</a></li>
        <li className="nav-li"><a href="#contact">Contact</a></li>
        {/* <li className='nav-li bar'><i class="fa-solid fa-bars"></i></li> */}
      </ul>

            <div className={showHamburgerMenu  ? "hambuger-hide"  : "hambuger-show"}>
              <span  className="ham-cut-sign" onClick={toggleHamburgerMenu}><i className="fa-solid fa-xmark close-menu"></i></span>
    <ul className="ham-hide-nav-ul">
    
    <li className="nav-li-cut"><a href="#home">Home</a></li>
        <li className="nav-li-cut"><a href="#about">About</a></li>
        <li className="nav-li-cut"><a href="#education">Education</a></li>
        <li className="nav-li-cut"><a href="#skills">Skills</a></li>
        <li className="nav-li-cut"><a href="#projects">Projects</a></li>
        <li className="nav-li-cut"><a href="#contact">Contact</a></li>

    </ul>
</div>
     
    </nav>
  );
}

export default NavBar;
