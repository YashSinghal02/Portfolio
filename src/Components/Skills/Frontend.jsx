import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import "./Skills.css";
import { motion } from "motion/react";

function Frontend() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const frontendSkills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
  ];

  return (
    <motion.div
      className="tools"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {frontendSkills.map((skill) => (
        <motion.div
          key={skill.name}
          variants={item}
          className="card1-tool"
        >
          <div className="card1-tool-img">
            <img src={skill.img} alt={skill.name} />
          </div>
          <div className="card1-tool-txt">
            <p>{skill.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Frontend;