import './About.css';
import Lottie from "lottie-react";
import animationData from "../../Animations/AboutAnimation.json";
import { motion } from 'motion/react';


function About() {
  return (
    <div className="about-container">
      <div className="about-heading-1">
        <h2>About Me</h2>
      </div>

      <div
      className="about-flex">
        <motion.div 
       initial={{scale:0.8,
        
          }}
       whileInView={{
            scale:1,
           
            transition:{duration:0.3}
          }}
           className="about-animation" style={{ width: 350, height: 300,  transform: "scaleX(-1)"}}>
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        <motion.div 
       initial={{scale:0.8,
            // translateX:-400,
        
          }}
       whileInView={{
            scale:1,
           
            // translateX:0,
            transition:{duration:0.5}
          }}
           className="about-text">
          <p className='aboutpara1'>
            Hi! I’m Yash Singhal, a passionate and dedicated Front-End Developer. I love turning ideas into interactive, user-friendly, and engaging digital experiences
          </p>
          <p className='aboutpara2'>With a strong foundation in HTML, CSS, JavaScript, React, Redux, Bootstrap, and Tailwind CSS, I focus on writing clean, efficient, and maintainable code while creating designs that are both functional, modern, and visually appealing. I enjoy solving complex problems, collaborating on impactful projects, and building innovative web solutions that inspire. I’m constantly learning, adapting, and improving my skills to deliver high-quality, interactive, and future-ready web applications.</p>
        </motion.div>

      </div>
    </div>
  );
}

export default About;
