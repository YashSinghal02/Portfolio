import { useState } from "react";
import AllSkills from "./AllSkills";
import Frontend from "./Frontend";
import Frameworks from "./Frameworks";
import Libraries from "./Libraries";
import Tools from "./Tools";
import VersionControl from "./VersionControl";
import ProgrammingLanguages from "./ProgrammingLanguages";
import { motion } from "motion/react";

function Skills() {
  const [activeTab, setActiveTab] = useState("AllSkills");
  const renderComponent = () => {
    switch (activeTab) {
      case "AllSkills":
        return <AllSkills />;
      case "Frontend":
        return <Frontend />;
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
        <h2>My Skills</h2>
      </motion.div>

      {/* Simple Tab Buttons */}
      <div className="grp-btns">
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("AllSkills")}
          className={`Skill-btns ${activeTab === "AllSkills" ? "active" : ""}`}
        >
          All
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("Frontend")}
          className={`Skill-btns ${activeTab === "Frontend" ? "active" : ""}`}
        >
          Front-End
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("Frameworks")}
          className={`Skill-btns ${activeTab === "Frameworks" ? "active" : ""}`}
        >
          Frameworks
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("Libraries")}
          className={`Skill-btns ${activeTab === "Libraries" ? "active" : ""}`}
        >
          Libraries
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("Tools")}
          className={`Skill-btns ${activeTab === "Tools" ? "active" : ""}`}
        >
          Tools
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("VersionControl")}
          className={`Skill-btns ${activeTab === "VersionControl" ? "active" : ""}`}
        >
          Version Control
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          onClick={() => setActiveTab("ProgrammingLanguages")}
          className={`Skill-btns ${activeTab === "ProgrammingLanguages" ? "active" : ""}`}
        >
          Programming
        </motion.button>
      </div>

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
