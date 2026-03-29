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
import Bootsrap from "../../assets/bootstrap.png";
import Tailwind from "../../assets/Tailwind.png";
import cloudinary from "../../assets/cloudinary.webp";
import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/expressjs.jpg";
import mongodb from "../../assets/mongodb.png";
import thunderclient from "../../assets/thunderclient.png";
import postman from "../../assets/postman.png";
import adobephotshop from "../../assets/adobephotshop.png";

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
    { img: Bootsrap, name: "Bootstrap" },
    { img: Tailwind, name: "Tailwind" },
    { img: ReactImg, name: "React" },
    { img: redux, name: "Redux" },
    { img: VScode, name: "VS Code" },
    { img: IntelliJIDEA, name: "IntelliJ" },
    { img: postman, name: "Postman" },
    { img: thunderclient, name: "Thunder" },
    { img: adobephotshop, name: "Photoshop " },
    { img: framer, name: "Framer M" },
    { img: cloudinary, name: "Cloudinary" },
    { img: git, name: "Git" },
    { img: github, name: "GitHub" },
    { img: java, name: "Java" },
    { img: mongodb, name: "MongoDb" },
    { img: expressjs, name: "ExpressJs" },
    { img: nodejs, name: "NodeJs" },
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
          <motion.div key={index} variants={item} className="card1-tool">
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
