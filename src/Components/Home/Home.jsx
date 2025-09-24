import './Home.css'
import HomeImg from '../../assets/homeimg.png'
import ButtonDark from '../Buttons/ButtonDark'
import SocialMedIcons from '../../SocialMediaIcons/SocialMedIcons'
// import About from '../About/About'

function Home() {
  return (
    <div>
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
          <h2> And I'm a Devloper</h2>
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
    </div>
  )
}

export default Home
