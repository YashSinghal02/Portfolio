import VScode from "../../assets/vscode.png";
import IntelliJIDEA from "../../assets/IntelliJIDEA.png";
import thunderclient from "../../assets/thunderclient.png";
import postman from "../../assets/postman.png";
import adobephotshop from "../../assets/adobephotshop.png";
import "./Skills.css";
import { motion } from "motion/react";

function Tools() {

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

  const tools = [
    { img: VScode, name: "VS Code" },
    { img: IntelliJIDEA, name: "IntelliJ IDEA" },
    // Uncomment if you want to use them
    { img: postman, name: "Postman" },
    { img: thunderclient, name: "Thunder" },
    { img: adobephotshop, name: "Photoshop " },
  ];

  return (
    <motion.div
      className="tools"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {tools.map((tool) => (
        <motion.div
          key={tool.name}
          variants={item}
          className="card1-tool"
        >
          <div className="card1-tool-img">
            <img src={tool.img} alt={tool.name} />
          </div>
          <div className="card1-tool-txt">
            <p>{tool.name}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Tools;