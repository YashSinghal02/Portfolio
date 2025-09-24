import FooterMedia from '../../SocialMediaIcons/FooterMedia'
import './Footer.css'
function Footer() {
  return (
    <div>
     <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
           <div className='logo1'> 
        <i className="fa-solid fa-less-than"></i>
        <span >Yash <span className='lastName'>Singhal /</span></span>
        <i className="fa-solid fa-greater-than lastName"></i></div>
          <p>Full Stack Developer</p>
          <p>Turning Vision into Digital Reality.</p>
        </div>

        <div className="footer-center">
          <h4>Contact</h4>
          <p><i className="fa-solid fa-mobile-screen-button"></i> +91-6397341005</p>
          <p><i className="fa-solid fa-envelope"></i> yash92singhal@gmail.com</p>
          <p><i className="fa-solid fa-location-dot"></i> Dehradun, Uttarakhand</p>
        </div>

        <div className="footer-right">
          <h4>Follow Me</h4>
          <div className="social-icons">
            {/* <a href="https://github.com/YashSinghal02" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a> */}
            <FooterMedia/>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Yash Singhal. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
