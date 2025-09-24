import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import "./Skills.css";

function Frontend() {
  return (
    <div>
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
      </div>
    </div>
  );
}

export default Frontend;
