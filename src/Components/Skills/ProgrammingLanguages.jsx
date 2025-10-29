import phython from "../../assets/python.png";
import java from "../../assets/java.png";
import "./Skills.css";
import js from "../../assets/js.png";
import { motion } from "motion/react";

function ProgrammingLanguages() {
  return (
    <div>
      <div className="tools">
        <motion.div
          initial={{ scale: 0.8,  }}
          whileInView={{
            scale: 1,
            

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
        {/* 2 */}
        <motion.div
          initial={{ scale: 0.8,  }}
          whileInView={{
            scale: 1,
            

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
        <motion.div
          initial={{ scale: 0.8,  }}
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

export default ProgrammingLanguages;
