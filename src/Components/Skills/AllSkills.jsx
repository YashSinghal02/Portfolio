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
import socketio from "../../assets/socketio.png";
import zustnad from "../../assets/zustnad.jpg";
import stream from "../../assets/stream.png";
import clerk from "../../assets/clerk.png";
import tanstack from "../../assets/tanstack.png";
import inngest from "../../assets/inngest.png";

import "./Skills.css";
import { motion } from "motion/react";

function AllSkills() {
  // ✅ Animation Variants
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

  // ✅ Skills Data Array
 const skills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: js, name: "JavaScript" },
  { img: ReactImg, name: "React" },
  { img: Tailwind, name: "Tailwind" },
  { img: redux, name: "Redux" },
  { img: nodejs, name: "Node.js" },
  { img: expressjs, name: "Express.js" },
  { img: mongodb, name: "MongoDB" },
  { img: java, name: "Java" },

  { img: zustnad, name: "zustnad" },
  { img: tanstack, name: "TanStack Query" },
  { img: socketio, name: "Socket.IO" },
  { img: clerk, name: "Clerk" },
  { img: stream, name: "Stream" },
  { img: inngest, name: "Inngest" },

  { img: Bootsrap, name: "Bootstrap" },
  { img: framer, name: "Framer Motion" },
  { img: cloudinary, name: "Cloudinary" },

  { img: postman, name: "Postman" },
  { img: thunderclient, name: "Thunder Client" },
  { img: VScode, name: "VS Code" },
  { img: IntelliJIDEA, name: "IntelliJ IDEA" },
  { img: adobephotshop, name: "Photoshop" },

  { img: git, name: "Git" },
  { img: github, name: "GitHub" },
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
