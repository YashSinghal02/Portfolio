import Bootsrap from "../../assets/bootstrap.png";
import Tailwind from "../../assets/Tailwind.png";
import "./Skills.css";
import { motion } from "motion/react";

function Frameworks() {
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
            <img src={Bootsrap} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>Bootstrap</p>
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
            <img src={Tailwind} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>Tailwind </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Frameworks;
