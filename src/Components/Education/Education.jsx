import "./Education.css";
import GRD from "../../assets/grd.png";
import isc from "../../assets/isc.png";
import { motion } from "motion/react";

function Education() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="education-section">
      <motion.div
        className="about-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Education</h2>
      </motion.div>
      {/* <h2 className="edu-heading">Education</h2> */}

      <motion.div
        className="educ-flex"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={fadeLeft}
          className="college-edu"
        >
          <div className="college-edu-img">
            <img src={GRD} alt="GRD Institute" />
          </div>
          <div className="college-edu-txt">
            <h4>Bachelor of Computer Applications</h4>
            <h5>GRD Institute of Management & Technology</h5>
            <p>2024 - 2027</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeRight}
          className="college-edu"
        >
          <div className="college-edu-img">
            <img src={isc} alt="Constancia School" />
          </div>
          <div className="college-edu-txt">
            <h4>High School (Science Stream)</h4>
            <h5>Constancia School - ISC Board</h5>
            <h5>Score: 90%</h5>
            <p>2020 - 2022</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Education;
