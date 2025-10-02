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

  const skillTabs = [
    { id: "All", label: "All", icon: "🌟" },
    { id: "Frontend", label: "Front-End", icon: "🎨" },
    { id: "Frameworks", label: "Frameworks", icon: "⚡" },
    { id: "Libraries", label: "Libraries", icon: "📚" },
    { id: "Tools", label: "Tools", icon: "🛠️" },
    { id: "VersionControl", label: "Version Control", icon: "📝" },
    { id: "ProgrammingLanguages", label: "Programming", icon: "💻" }
  ];

  const renderSkillComponent = () => {
    switch (activeTab) {
      case "All":
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
      
      {/* Tab Navigation */}
      <div className="grp-btns">
        {skillTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`Skill-btns ${activeTab === tab.id ? 'active' : ''}`}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {renderSkillComponent()}
      </div>
    </div>
  );
}

export default Skills
