import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import reactLogo from "../../assets/React.png";
import framer from "../../assets/frmaer.png";
import "./Skills.css";
import { motion } from "motion/react";

function Libraries() {

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

  const libraries = [
    { img: reactLogo, name: "React" },
    { img: redux, name: "Redux" },
    { img: mui, name: "MUI" },
    { img: framer, name: "Motion" },
  ];

  return (
    <motion.div
      className="tools"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {libraries.map((lib) => (
        <motion.div
          key={lib.name}
          variants={item}
          className="card1-tool"
        >
          <div className="card1-tool-img">
            <img src={lib.img} alt={lib.name} />
          </div>
          <div className="card1-tool-txt">
            <p>{lib.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Libraries;