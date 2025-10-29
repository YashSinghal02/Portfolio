import './Home.css'
// import './Extra.css'
import { motion } from 'motion/react';
import HomeImg from '../../assets/homeimg.png'
import ButtonDark from '../Buttons/ButtonDark'
import SocialMedIcons from '../../SocialMediaIcons/SocialMedIcons'
// import AutoText from './AutoText'
// import About from '../About/About'
import { ReactTyped } from "react-typed";
import AutoText from './AutoText';
function Home() {
  return (
    <motion.div
     initial={{scale:0.8,
            opacity:0.5,
          }}
       whileInView={{
            scale:1,
            opacity:1,
            transition:{duration:0.2}
          }}
    id="home" className="home-offset">
      <div className="contaner">
        <div className="bg-circle-center">
          {/* <div className="bg-circle-back"> */}
           <div className="bg-circle-2"></div>
  <div className="bg-circle-3"></div>
            <div className="bg-circle"></div>
          {/* </div> */}
        </div>

        <div className="Intro-cnter">
          <div className="auto-text">
          <h3>Hi,Myself</h3>
          <h1>Yash Singhal</h1>
         <AutoText/>
        </div>

       <div className="home-img">
        <img src={HomeImg} alt="" />
       </div>

       <div className="tag-line">
        <p>Frontend web developer passionate about turning ideas into clean, dynamic, and engaging web experiences, delivering modern, interactive, and scalable websites.</p>
       </div>
       

      
      {/* Socila Media */}
       <div>
       <SocialMedIcons/>
       </div>
     

        </div>




      </div>
      {/* <About/> */}
    </motion.div>
  )
}

export default Home
