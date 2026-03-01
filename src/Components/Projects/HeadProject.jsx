import './HeadProject.css';
import Lottie from "lottie-react";
import Projectsanimated from "../../Animations/Projectsanimated.json";
import GitBtn from '../Buttons/GitBtn';
import { motion } from 'motion/react';
function HeadProject() {
 const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  }
};
  return (
    <div className="HeadProject-container">
      <div className="HeadProject-flex">
        
        <motion.div 
         variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} 
          className="HeadProject-txt">
          <h2>Explore My Projects</h2>
          <p>
            You can explore all my projects on my GitHub profile. There, you’ll find my activities, contributions, and code across completed and ongoing projects. Feel free to ⭐ star the repos you like, leave comments, or start a discussion. I’m always open to new ideas and collaborations. You can also connect with me through the social media links below.
          </p>
          <GitBtn/>
        </motion.div>

        <motion.div 
         variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
           className="HeadProject-img">
          <Lottie animationData={Projectsanimated} loop={true} />
        </motion.div>
      </div>
    </div>
  );
}

export default HeadProject;
