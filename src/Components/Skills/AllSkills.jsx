import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import React from "../../assets/React.png";
import VScode from "../../assets/vscode.png";
import Jupyter from "../../assets/Jupyter.png";
import frmaer from "../../assets/frmaer.png";
import IntelliJIDEA from "../../assets/IntelliJIDEA.png";
import phython from "../../assets/python.png";
import java from "../../assets/java.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import "./Skills.css";
import { motion } from "motion/react";

function AllSkills() {
  return (
    <div>
      <div className="skill-set">
        <div className="tools">
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={html} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>HTML</p>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={css} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>CSS </p>
            </div>
          </motion.div>
          {/* 3 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={js} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>JavaScript</p>
            </div>
          </motion.div>
          {/* 4 */}

          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={React} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>React</p>
            </div>
          </motion.div>
          {/* 5 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={redux} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Redux </p>
            </div>
          </motion.div>
          {/* 6 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={mui} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>MUI </p>
            </div>
          </motion.div>
          {/* 5 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={VScode} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>VsCode</p>
            </div>
          </motion.div>
          {/* 6*/}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={IntelliJIDEA} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>IntelliJ </p>
            </div>
          </motion.div>
          {/* 7 */}
          {/* <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={Jupyter} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Jupyter</p>
            </div>
          </div> */}

          {/* 8 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={frmaer} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Framer M</p>
            </div>
          </motion.div>
          {/* 9 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={git} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Git</p>
            </div>
          </motion.div>
          {/* 10 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={github} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>GitHub </p>
            </div>
          </motion.div>
          {/* 11 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={phython} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Phython</p>
            </div>
          </motion.div>
          {/* 12 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            whileInView={{
              scale: 1,
              opacity: 1,

              transition: { duration: 0.3 },
            }}
            className="card1-tool"
          >
            <div className="card1-tool-img">
              <img src={java} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Java </p>
            </div>
          </motion.div>

          {/* ********** */}
        </div>
      </div>
    </div>
  );
}

export default AllSkills;
