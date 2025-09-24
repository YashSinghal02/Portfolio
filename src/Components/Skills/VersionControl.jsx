import git from '../../assets/git.png'
import github from '../../assets/github.png'
import './Skills.css';

function VersionControl() {
  return (
    <div>
        <div className="tools">
           <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={git} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>Git</p>
            </div>
           </div>
           {/* 2 */}
            <div className="card1-tool">
            <div className="card1-tool-img">
              <img src={github} alt="" />
            </div>
            <div className="card1-tool-txt">
              <p>GitHub </p>
            </div>
           </div>
      
          
      
            </div>
    </div>
  )
}

export default VersionControl
