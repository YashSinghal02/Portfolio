import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/expressjs.jpg";
import mongodb from "../../assets/mongodb.png";
import "./Skills.css";
import { motion } from "motion/react";

function Backend() {

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

  const Backend = [
    { img: mongodb, name: "MongoDb" },
    { img: expressjs, name: "ExpressJs" },
    { img: nodejs, name: "NodeJs" },
  ];

  return (
    <motion.div
      className="tools"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {Backend.map((framework) => (
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

export default Backend;