import "./About.css";
import Lottie from "lottie-react";
import animationData from "../../Animations/AboutAnimation.json";
import { motion } from "motion/react";

function About() {
  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
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
        <span className="contact-label">
          <span className="project-label-dot"></span>
          ABOUT ME
        </span>
      </motion.div>

      <div className="about-flex">
        {/* Animation */}
        <motion.div
          className="about-animation"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="about-animation-glow"></div>

          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        {/* Text */}
        <motion.div
          className="about-text"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>
            Turning Ideas Into
            <span> Digital Experiences</span>
          </h2>

          <p className="aboutpara1">
            Hi! I'm <strong>Yash Singhal</strong>, an aspiring{" "}
            <strong>Full Stack Developer</strong> who enjoys turning ideas into
            modern, interactive, and user-friendly web experiences.
          </p>

          <p className="aboutpara2">
            I work with HTML, CSS, JavaScript, React, Redux, Tailwind CSS,
            Node.js, Express.js, and MongoDB to build complete web applications.
            I enjoy creating clean and responsive interfaces, developing
            practical backend functionality, and bringing ideas to life through
            code. I'm always learning, experimenting with new technologies, and
            working on projects that help me grow as a developer.
          </p>

          <div className="about-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
            <span>Redux</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
