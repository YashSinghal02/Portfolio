import { useState } from "react";
import AllSkills from "./AllSkills";
import Frontend from "./Frontend";
import Frameworks from "./Frameworks";
import Libraries from "./Libraries";
import Tools from "./Tools";
import VersionControl from "./VersionControl";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { motion } from "motion/react";
import Backend from "./Backend";

function Skills() {
  const [activeTab, setActiveTab] = useState("AllSkills");
  const renderComponent = () => {
    switch (activeTab) {
      case "AllSkills":
        return <AllSkills />;
      case "Frontend":
        return <Frontend />;
        case "Backend":
        return <Backend/>;
      case "Frameworks":
        return <Frameworks />;
      case "Libraries":
        return <Libraries />;
      case "Tools":
        return <Tools />;
      case "VersionControl":
        return <VersionControl />;
      case "ProgrammingLanguages":
        return <ProgrammingLanguages />;
        
      default:
        return <AllSkills />;
    }
  };

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

  const buttonAnimation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

  return (
    <div className="skills-section">
      <motion.div
        className="about-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="contact-label">
          <span className="project-label-dot"></span>
          SKILLS
        </span>
      </motion.div>

      {/* Simple Tab Buttons */}
      <motion.div className="grp-btns"
      initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{
    staggerChildren: 0.05,
  }}
      >
        <motion.button
          variants={buttonAnimation}
          onClick={() => setActiveTab("AllSkills")}
          className={`Skill-btns ${activeTab === "AllSkills" ? "active" : ""}`}
        >
          All
        </motion.button>

        <motion.button
           variants={buttonAnimation}
          onClick={() => setActiveTab("Frontend")}
          className={`Skill-btns ${activeTab === "Frontend" ? "active" : ""}`}
        >
          Front-End
        </motion.button>

        <motion.button
          variants={buttonAnimation}
          onClick={() => setActiveTab("Backend")}
          className={`Skill-btns ${activeTab === "Backend" ? "active" : ""}`}
        >
          Backend
        </motion.button>

        <motion.button
           variants={buttonAnimation}
          onClick={() => setActiveTab("Frameworks")}
          className={`Skill-btns ${activeTab === "Frameworks" ? "active" : ""}`}
        >
          Frameworks
        </motion.button>

        <motion.button
           variants={buttonAnimation}
          onClick={() => setActiveTab("Libraries")}
          className={`Skill-btns ${activeTab === "Libraries" ? "active" : ""}`}
        >
          Libraries
        </motion.button>

        <motion.button
           variants={buttonAnimation}
          onClick={() => setActiveTab("Tools")}
          className={`Skill-btns ${activeTab === "Tools" ? "active" : ""}`}
        >
          Tools
        </motion.button>

        <motion.button
           variants={buttonAnimation}
          onClick={() => setActiveTab("VersionControl")}
          className={`Skill-btns ${activeTab === "VersionControl" ? "active" : ""}`}
        >
          Version Control
        </motion.button>

        

        <motion.button
         variants={buttonAnimation}
          onClick={() => setActiveTab("ProgrammingLanguages")}
          className={`Skill-btns ${activeTab === "ProgrammingLanguages" ? "active" : ""}`}
        >
          Programming
        </motion.button>
      </motion.div>

      {/* Show Content Based on Active Tab */}
      {/* <div className="tab-content">
        {activeTab === "All" && <AllSkills />}
        {activeTab === "Frontend" && <Frontend />}
        {activeTab === "Frameworks" && <Frameworks />}
        {activeTab === "Libraries" && <Libraries />}
        {activeTab === "Tools" && <Tools />}
        {activeTab === "VersionControl" && <VersionControl />}
        {activeTab === "ProgrammingLanguages" && <ProgrammingLanguages />}
      </div> */}
      {renderComponent()}
    </div>
  );
}

export default Skills;
