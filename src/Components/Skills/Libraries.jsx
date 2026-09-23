import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import reactLogo from "../../assets/React.png";
import cloudinary from "../../assets/cloudinary.webp";
import framer from "../../assets/frmaer.png";

import socketio from "../../assets/socketio.png";
import zustnad from "../../assets/zustnad.jpg";
import stream from "../../assets/stream.png";
import clerk from "../../assets/clerk.png";
import tanstack from "../../assets/tanstack.png";
import "./Skills.css";
import { motion } from "motion/react";

function Libraries() {

  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

  const libraries = [
    { img: reactLogo, name: "React" },
    { img: redux, name: "Redux" },
    // { img: mui, name: "MUI" },
    { img: framer, name: "Motion" },
     { img: cloudinary, name: "Cloudinary" },

   { img: zustnad, name: "zustnad" },
    { img: tanstack, name: "TanStack Query" },
    { img: socketio, name: "Socket.IO" },
    { img: clerk, name: "Clerk" },
    { img: stream, name: "Stream" },
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