import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import ReactImg from "../../assets/React.png";
import VScode from "../../assets/vscode.png";
import framer from "../../assets/frmaer.png";
import IntelliJIDEA from "../../assets/IntelliJIDEA.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";

import "./Skills.css";
import { motion } from "motion/react";

function AllSkills() {

  // ✅ Animation Variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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

  // ✅ Skills Data Array
  const skills = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "JavaScript" },
    { img: ReactImg, name: "React" },
    { img: redux, name: "Redux" },
    { img: mui, name: "MUI" },
    { img: VScode, name: "VS Code" },
    { img: IntelliJIDEA, name: "IntelliJ" },
    { img: framer, name: "Framer M" },
    { img: git, name: "Git" },
    { img: github, name: "GitHub" },
    { img: python, name: "Python" },
    { img: java, name: "Java" },
  ];

  return (
    <div className="skill-set">
      <motion.div
        className="tools"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
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
    </div>
  );
}

export default AllSkills;