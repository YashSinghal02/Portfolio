import Bootsrap from "../../assets/bootstrap.png";
import Tailwind from "../../assets/Tailwind.png";
import "./Skills.css";
import { motion } from "motion/react";

function Frameworks() {

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

  const frameworks = [
    { img: Bootsrap, name: "Bootstrap" },
    { img: Tailwind, name: "Tailwind" },
  ];

  return (
    <motion.div
      className="tools"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {frameworks.map((framework) => (
        <motion.div
          key={framework.name}
          variants={item}
          className="card1-tool"
        >
          <div className="card1-tool-img">
            <img src={framework.img} alt={framework.name} />
          </div>
          <div className="card1-tool-txt">
            <p>{framework.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Frameworks;