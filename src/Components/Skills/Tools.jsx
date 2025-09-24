import VScode from '../../assets/vscode.png'
import Jupyter from '../../assets/Jupyter.png'
import Eclipse from '../../assets/Eclipse.png'
import IntelliJIDEA from '../../assets/IntelliJIDEA.png'
import './Skills.css';


function Tools() {
  return (
    <div>
      <div className="tools">
     <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={VScode} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>VsCode</p>
      </div>
     </div>
     {/* 2 */}
      <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={IntelliJIDEA} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>IntelliJ </p>
      </div>
     </div>
       {/* 3 */}
      <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={Jupyter} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>Jupyter</p>
      </div>
     </div>
     
       {/* 4 */}
      <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={Eclipse} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>Eclipse</p>
      </div>
     </div>
    

      </div>

    </div>
  )
}

export default Tools
