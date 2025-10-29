import git from "../../assets/git.png";
import github from "../../assets/github.png";
import "./Skills.css";
import { motion } from "motion/react";
function VersionControl() {
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
            <img src={git} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>Git</p>
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
            <img src={github} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>GitHub </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default VersionControl;
