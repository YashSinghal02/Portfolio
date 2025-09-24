import { Link,Outlet } from "react-router"
import './Skills.css'

function NestedSkill() {
  return (
    <div>
        <div className="grp-btns">
          <Link to= "/skills"><button className="Skill-btns">All</button></Link>
          <Link to="Frontend"><button className="Skill-btns">Front-End</button></Link>
          <Link to="Frameworks"><button className="Skill-btns">Frameworks </button></Link>
          <Link to="Libraries"><button className="Skill-btns">Libraries</button></Link>
          <Link to="tools"><button className="Skill-btns">Tools</button></Link>
          <Link to="VersionControl"> <button className="Skill-btns">Version Control</button></Link>
          <Link to="ProgrammingLanguages"><button className="Skill-btns">Programming Languages</button></Link>
        
      </div>

    <div>
      <Outlet/>
    </div>
    </div>
  )
}

export default NestedSkill
