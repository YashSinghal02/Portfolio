import phython from "../../assets/python.png";
import java from "../../assets/java.png";
import "./Skills.css";

function ProgrammingLanguages() {
  return (
    <div>
      <div className="tools">
        <div className="card1-tool">
          <div className="card1-tool-img">
            <img src={phython} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>Phython</p>
          </div>
        </div>
        {/* 2 */}
        <div className="card1-tool">
          <div className="card1-tool-img">
            <img src={java} alt="" />
          </div>
          <div className="card1-tool-txt">
            <p>Java </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgrammingLanguages;
