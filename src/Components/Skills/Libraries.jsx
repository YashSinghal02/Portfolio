import mui from "../../assets/mui.png";
import redux from "../../assets/redux.png";
import React from "../../assets/React.png";
import "./Skills.css";

function Libraries() {
  return (
    <div>
      <div className="tools">
              <div className="card1-tool">
                <div className="card1-tool-img">
                  <img src={React} alt="" />
                </div>
                <div className="card1-tool-txt">
                  <p>React</p>
                </div>
              </div>
              {/* 2 */}
              <div className="card1-tool">
                <div className="card1-tool-img">
                  <img src={redux} alt="" />
                </div>
                <div className="card1-tool-txt">
                  <p>Redux </p>
                </div>
              </div>
               {/* 3 */}
              <div className="card1-tool">
                <div className="card1-tool-img">
                  <img src={mui} alt="" />
                </div>
                <div className="card1-tool-txt">
                  <p>MUI </p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Libraries
