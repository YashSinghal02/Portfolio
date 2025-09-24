import "./Education.css";
import GRD from "../../assets/grd.png";
import isc from "../../assets/isc.png";

function Education() {
  return (
    <div className="education-section">
      <h2 className="edu-heading">Education</h2>

      <div className="educ-flex">
        <div className="college-edu">
          <div className="college-edu-img">
            <img src={GRD} alt="GRD Institute" />
          </div>
          <div className="college-edu-txt">
            <h4>Bachelor of Computer Applications</h4>
            <h5>GRD Institute of Management & Technology</h5>
            <p>2024 - 2027</p>
          </div>
        </div>

        <div className="college-edu">
          <div className="college-edu-img">
            <img src={isc} alt="Constancia School" />
          </div>
          <div className="college-edu-txt">
            <h4>High School (Science Stream)</h4>
            <h5>Constancia School - ISC Board</h5>
            <h5>Score: 90%</h5>
            <p>2020 - 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
