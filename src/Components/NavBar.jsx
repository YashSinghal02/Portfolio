import React from 'react'



const NavBar = (props) => {
  let nav = document.querySelector('.nav-background');
  
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
      nav.classList.add('on-scroll');
    }
    else{
      nav.classList.remove('on-scroll');
  
    }
  }
  return (
    <div>
    <nav className={`navbar  nav-background navbar-expand-xl w-100 fixed-top bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand fw-bold mx-5  " style={{  fontfamily: "Roboto Mono, monospace"}} href="#"><i className="fa-solid fa-less-than"></i>Yash<span style={{color:props.mode=== 'dark'? '#00ff99':'#00b271',fontfamily: "Roboto Mono, monospace"}}>Singhal&#x2f;<i className="fa-solid fa-greater-than"></i></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" style={{backgroundColor: props.mode=== 'dark'? 'rgb(33 37 41)':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <i class="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    

      <div className={`form-check form-switch text-${props.mode=== 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{backgroundColor: props.mode=== 'dark'? 'Enable Dark Mode':'Enable light Mode',color:props.mode=== 'dark'? 'white':'black'}} >Enable Dark Mode</label>
</div>





    </div>
  </div>
</nav>

      
    </div>
  )
}

export default NavBar