import { useState } from "react";
import AllSkills from "./AllSkills";
import Frontend from "./Frontend";
import Frameworks from "./Frameworks";
import Libraries from "./Libraries";
import Tools from "./Tools";
import VersionControl from "./VersionControl";
import ProgrammingLanguages from "./ProgrammingLanguages";

function Skills() {
  const [activeTab, setActiveTab] = useState("All");
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

  return (
    <div className="skills-section">
      <div className="about-heading">
        <h2>My Skills</h2>
      </div>
      
      {/* Simple Tab Buttons */}
      <div className="grp-btns">
        <button 
          onClick={() => setActiveTab("All")}
          className={`Skill-btns ${activeTab === "All" ? 'active' : ''}`}
        >
          🌟 All
        </button>
        
        <button 
          onClick={() => setActiveTab("Frontend")}
          className={`Skill-btns ${activeTab === "Frontend" ? 'active' : ''}`}
        >
          🎨 Front-End
        </button>
        
        <button 
          onClick={() => setActiveTab("Frameworks")}
          className={`Skill-btns ${activeTab === "Frameworks" ? 'active' : ''}`}
        >
          ⚡ Frameworks
        </button>
        
        <button 
          onClick={() => setActiveTab("Libraries")}
          className={`Skill-btns ${activeTab === "Libraries" ? 'active' : ''}`}
        >
          📚 Libraries
        </button>
        
        <button 
          onClick={() => setActiveTab("Tools")}
          className={`Skill-btns ${activeTab === "Tools" ? 'active' : ''}`}
        >
          🛠️ Tools
        </button>
        
        <button 
          onClick={() => setActiveTab("VersionControl")}
          className={`Skill-btns ${activeTab === "VersionControl" ? 'active' : ''}`}
        >
          📝 Version Control
        </button>
        
        <button 
          onClick={() => setActiveTab("ProgrammingLanguages")}
          className={`Skill-btns ${activeTab === "ProgrammingLanguages" ? 'active' : ''}`}
        >
          💻 Programming
        </button>
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

export default Skills