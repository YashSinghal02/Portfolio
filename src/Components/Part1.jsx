import React from 'react'
// import hi from '../assets/hi.gif'
// import me from '../assets/me.jpg'
import ResumeYash from '../assets/ResumeYash.pdf'
import { ReactTyped } from "react-typed";
import AutoNpX from './AutoNpX';


const Part1 = (props) => {
  return (
    <div>

<div className="container   cntr" style={{backgroundColor: props.mode=== 'dark'? '#000000':'white',color:props.mode=== 'dark'? 'white':'black',marginTop:"200px"}}>

<div className="row row-cols-1 row-cols-lg-2 g-4">
<div className="col part1">
<h3>Hi, Myself <img src="https://yashsinghal001.github.io/Portfolio-Website/output-onlinegiftools.gif" className='pb-3' width={"50px"} alt="" /></h3>
<h1>Yash Singhal</h1>
<h2> And I'm a <span style={{color:props.mode=== 'dark'? '#00ff99':'#00b271'}} className='part1color'>{" "}
        <ReactTyped
          strings={["Developer","Student", "Designer"]}
          typeSpeed={150}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        /></span>
  </h2>
  <p className='fs-6'>I am a motivated and enthusiastic fresher web developer, ready to leverage my skills in HTML, CSS, Bootstrap, JavaScript,   React, Redux and Core Java to create dynamic and visually appealing websites.</p>
{/* npx */}

<AutoNpX/>

{/* npx */}
{/* contact me */}
<main>
  <ul className="example-1">
    <li className="icon-content">
      <a
        className="link"
        data-social="spotify"
        aria-label="Spotify"
        href="https://github.com/YashSinghal02"
        target='blank'
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-github"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          fill="currentColor"
        ></path>
      </svg>
      </a>
      <div className="tooltip">GitHub</div>
    </li>
    <li className="icon-content">
      <a
        className="link"
        data-social="pinterest"
        aria-label="Pinterest"
        href="https://www.instagram.com/yashsinghal21"
        target='blank'
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram"
        viewBox="0 0 16 16"
        xmlSpace="preserve"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
          fill="currentColor"
        ></path>
      </svg>
      </a>
      <div className="tooltip">Instagram</div>
    </li>

    <li className="icon-content">
      <a
        className="link"
        data-social="telegram"
        aria-label="Telegram"
        href="https://www.linkedin.com/in/yashsinghal-fullstackdeveloper/"
        target='blank'
      >
          <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Icons" stroke="none" strokeWidth="1">
            <g transform="translate(-702.000000, -265.000000)">
                <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
    </path>
            </g>
        </g>
    </svg>
      </a>
      <div className="tooltip">LinkedIn</div>
    </li>

<a href={ResumeYash} target='blank'><button class="button"> Resume
</button></a>


  </ul>
  
</main>

{/* Contact me */}


</div>

<div className="col part1img  " data-tilt >
    {/*  */}

<div class="spinner2">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
{/*  */}
<img src="https://yashsinghal001.github.io/Portfolio-Website/168746717.jpeg" className='rounded-5' alt="" style={{position:"relative",zIndex:"100"}} data-tilt  />
{/*  */}

<div class="spinner3">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
{/*  */}


</div>



</div>




</div>


    </div>
  )
}

export default Part1