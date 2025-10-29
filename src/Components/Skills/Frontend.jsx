import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import "./Skills.css";
import { motion } from "motion/react";
function Frontend() {
  return (
    <div>
      <div className="tools">
        <motion.div
          initial={{ scale: 0.8, }}
          whileInView={{
            scale: 1,
           

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
          initial={{ scale: 0.8, }}
          whileInView={{
            scale: 1,
           

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
          initial={{ scale: 0.8, }}
          whileInView={{
            scale: 1,
           

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
      </div>
    </div>
  );
}

export default Frontend;
