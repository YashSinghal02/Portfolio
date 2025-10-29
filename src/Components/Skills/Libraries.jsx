import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import React from "../../assets/React.png";
import "./Skills.css";
import frmaer from "../../assets/frmaer.png";
import { motion } from "motion/react";
function Libraries() {
  return (
    <div>
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
            <img src={React} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>React</p>
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
            <img src={redux} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>Redux </p>
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
            <img src={mui} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>MUI </p>
          </div>
        </motion.div>
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
      </div>
    </div>
  );
}

export default Libraries;
