import VScode from '../../assets/vscode.png'
import Jupyter from '../../assets/Jupyter.png'
import Eclipse from '../../assets/Eclipse.png'
import IntelliJIDEA from '../../assets/IntelliJIDEA.png'
import './Skills.css';
import { motion } from 'motion/react';

function Tools() {
  return (
    <div>
      <div className="tools">
     <motion.div 
         initial={{scale:0.8,
            opacity:0.5,
           
          }}
       whileInView={{
            scale:1,
            opacity:1,
           
            transition:{duration:0.3}
          }} className="card1-tool">
      <div className="card1-tool-img">
        <img src={VScode} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>VsCode</p>
      </div>
     </motion.div>
     {/* 2 */}
      <motion.div 
         initial={{scale:0.8,
            opacity:0.5,
           
          }}
       whileInView={{
            scale:1,
            opacity:1,
           
            transition:{duration:0.3}
          }} className="card1-tool">
      <div className="card1-tool-img">
        <img src={IntelliJIDEA} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>IntelliJ </p>
      </div>
     </motion.div>
       {/* 3 */}
      {/* <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={Jupyter} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>Jupyter</p>
      </div>
     </div> */}
     
       {/* 4 */}
      {/* <div className="card1-tool">
      <div className="card1-tool-img">
        <img src={Eclipse} alt="" />
      </div>
      <div className="card1-tool-txt">
        <p>Eclipse</p>
      </div>
     </div> */}
    

      </div>

    </div>
  )
}

export default Tools
