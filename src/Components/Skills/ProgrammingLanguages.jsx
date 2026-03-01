import python from "../../assets/python.png";
import java from "../../assets/java.png";
import js from "../../assets/js.png";
import "./Skills.css";
import { motion } from "motion/react";

function ProgrammingLanguages() {

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

  const languages = [
    { img: python, name: "Python" },
    { img: java, name: "Java" },
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
      {languages.map((lang) => (
        <motion.div
          key={lang.name}
          variants={item}
          className="card1-tool"
        >
          <div className="card1-tool-img">
            <img src={lang.img} alt={lang.name} />
          </div>
          <div className="card1-tool-txt">
            <p>{lang.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProgrammingLanguages;