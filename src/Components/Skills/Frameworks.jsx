import Bootsrap from '../../assets/bootstrap.png'
import Tailwind from '../../assets/Tailwind.png'
import './Skills.css';

function Frameworks() {
  return (
    <div>
  <div className="tools">
     <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={Bootsrap} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>Bootstrap</p>
      </div>
     </div>
     {/* 2 */}
      <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={Tailwind} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>Tailwind </p>
      </div>
     </div>

    

      </div>



    </div>
  )
}

export default Frameworks
