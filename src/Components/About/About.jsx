import './About.css';
import Lottie from "lottie-react";
import animationData from "../../Animations/AboutAnimation.json";
import { motion } from 'motion/react';

function About() {

    const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  }
};;

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="about-container" id="about">

      {/* Heading */}
      <motion.div
        className="about-heading-1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
      </motion.div>

      <div className="about-flex">

        {/* Lottie Animation */}
        <motion.div
          className="about-animation"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ width: 350, height: 300, transform: "scaleX(-1)" }}
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="about-text"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className='aboutpara1'>
            Hi! I’m <strong>Yash Singhal</strong>, a passionate and dedicated 
            Front-End Developer. I love turning ideas into interactive, 
            user-friendly, and engaging digital experiences.
          </p>

          <p className='aboutpara2'>
            With a strong foundation in HTML, CSS, JavaScript, React, Redux, 
            Bootstrap, and Tailwind CSS, I focus on writing clean, efficient, 
            and maintainable code while creating modern and visually appealing 
            designs. I enjoy solving complex problems, collaborating on impactful 
            projects, and building innovative web solutions that inspire.
          </p>
        </motion.div>

      </div>

    </section>
  );
}

export default About;