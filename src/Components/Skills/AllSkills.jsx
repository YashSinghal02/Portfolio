import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import React from "../../assets/React.png";
import VScode from "../../assets/vscode.png";
import Jupyter from "../../assets/Jupyter.png";
import Eclipse from "../../assets/Eclipse.png";
import IntelliJIDEA from "../../assets/IntelliJIDEA.png";
import phython from "../../assets/python.png";
import java from "../../assets/java.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import "./Skills.css";

function AllSkills() {
  return (
    <div>
      <div className="skill-set">
        <div className="tools">
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={html} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>HTML</p>
            </div>
          </div>
          {/* 2 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={css} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>CSS </p>
            </div>
          </div>
          {/* 3 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={js} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>JavaScript</p>
            </div>
          </div>
          {/* 4 */}

          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={React} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>React</p>
            </div>
          </div>
          {/* 5 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={redux} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Redux </p>
            </div>
          </div>
          {/* 6 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={mui} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>MUI </p>
            </div>
          </div>
          {/* 5 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={VScode} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>VsCode</p>
            </div>
          </div>
          {/* 6*/}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={IntelliJIDEA} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>IntelliJ </p>
            </div>
          </div>
          {/* 7 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={Jupyter} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Jupyter</p>
            </div>
          </div>

          {/* 8 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={Eclipse} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Eclipse</p>
            </div>
          </div>
          {/* 9 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={git} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Git</p>
            </div>
          </div>
          {/* 10 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={github} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>GitHub </p>
            </div>
          </div>
          {/* 11 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={phython} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Phython</p>
            </div>
          </div>
          {/* 12 */}
          <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={java} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Java </p>
            </div>
          </div>

          {/* ********** */}
        </div>
      </div>
    </div>
  );
}

export default AllSkills;
