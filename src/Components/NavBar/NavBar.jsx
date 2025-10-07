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
    <div>
    <nav className="navbar">
      {/* Logo */}
      <div className='logo'> 
        <i className="fa-solid fa-less-than"></i>
        <span >Yash <span className='lastName'>Singhal /</span></span>
        <i className="fa-solid fa-greater-than lastName"></i></div>

        {/* Hamburger Open */}
         <div className="bar " onClick={toggleHamburgerMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      
      {/* Lists Visible On Desktop */}
      <ul className="nav-ul">
        <li className="nav-li"><a href="#home">Home</a></li>
        <li className="nav-li"><a href="#about">About</a></li>
        <li className="nav-li"><a href="#education">Education</a></li>
        <li className="nav-li"><a href="#skills">Skills</a></li>
        <li className="nav-li"><a href="#projects">Projects</a></li>
        <li className="nav-li"><a href="#contact">Contact</a></li>
      </ul>


     
    </nav>


{/* Hamburger Close */}
            <div className={`hambuger-hide ${showHamburgerMenu && "hambuger-show"}`}>
              <div  className="close-menu" onClick={toggleHamburgerMenu}><i className="fa-solid fa-xmark "></i></div>
    <ul className="ham-hide-nav-ul">
    
    <li className="nav-li-cut"><a href="#home">Home</a></li>
        <li className="nav-li-cut"><a href="#about">About</a></li>
        <li className="nav-li-cut"><a href="#education">Education</a></li>
        <li className="nav-li-cut"><a href="#skills">Skills</a></li>
        <li className="nav-li-cut"><a href="#projects">Projects</a></li>
        <li className="nav-li-cut"><a href="#contact">Contact</a></li>

    </ul>
</div>


 <div >
    <div className={`backdrop ${showHamburgerMenu && "backdrop-show"}`}  onClick={toggleHamburgerMenu}></div>


 </div>


    </div>
  );
}

export default NavBar;
