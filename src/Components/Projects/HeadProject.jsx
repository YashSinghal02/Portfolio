import "./HeadProject.css";
import Lottie from "lottie-react";
import Projectsanimated from "../../Animations/Projectsanimated.json";
import GitBtn from "../Buttons/GitBtn";
import { motion } from "motion/react";

function HeadProject() {
 const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

  return (
    <section className="HeadProject-container">
      <motion.div
        className="about-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="project-label">
          <span className="project-label-dot"></span>
          PROJECTS
        </span>
      </motion.div>
      <div className="HeadProject-flex">
        {/* Content */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="HeadProject-txt"
        >
          {/* <span className="project-label">
            <span className="project-label-dot"></span>
            PROJECTS
          </span> */}

          <h2>
            Explore My <span>Projects</span>
          </h2>

          <p>
            Explore my projects on GitHub, where you'll find my work,
            contributions, and code across completed and ongoing projects. Feel
            free to explore the repositories, star the ones you like, and
            connect with me for ideas or collaborations.
          </p>

          <div className="project-btn">
            <GitBtn />
          </div>
        </motion.div>

        {/* Animation */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="HeadProject-img"
        >
          <div className="project-animation-glow"></div>

          <Lottie animationData={Projectsanimated} loop={true} />
        </motion.div>
      </div>
    </section>
  );
}

export default HeadProject;
