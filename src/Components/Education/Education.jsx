import "./Education.css";
import GRD from "../../assets/grd.png";
import isc from "../../assets/isc.png";
import { motion } from 'motion/react';

function Education() {
  return (
    
    <div className="education-section">
        <div className="about-heading">
        <h2>Education</h2>
      </div>
      {/* <h2 className="edu-heading">Education</h2> */}

      <div className="educ-flex">
        <motion.div 
         initial={{scale:0.8,
            opacity:0.5,
           
          }}
       whileInView={{
            scale:1,
            opacity:1,
           
            transition:{duration:0.3}
          }}
        className="college-edu">
          <div className="college-edu-img">
            <img src={GRD} alt="GRD Institute" />
          </div>
          <div className="college-edu-txt">
            <h4>Bachelor of Computer Applications</h4>
            <h5>GRD Institute of Management & Technology</h5>
            <p>2024 - 2027</p>
          </div>
        </motion.div>

        <motion.div
         initial={{scale:0.8,
            opacity:0.5,
             
          }}
       whileInView={{
            scale:1,
            opacity:1,
            
            transition:{duration:0.3}
          }}
        className="college-edu">
          <div className="college-edu-img">
            <img src={isc} alt="Constancia School" />
          </div>
          <div className="college-edu-txt">
            <h4>High School (Science Stream)</h4>
            <h5>Constancia School - ISC Board</h5>
            <h5>Score: 90%</h5>
            <p>2020 - 2022</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
