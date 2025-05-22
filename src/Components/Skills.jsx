import React from 'react'
import Redux from '../assets/Redux.png'
import Netlify from '../assets/Netlify.png'
import HTML from '../assets/HTML.png'
import css from '../assets/css.png'
import Bootsrap from '../assets/Bootsrap.png'
import js from '../assets/js.png'
import PS from '../assets/PS.png'
import Git from '../assets/Git.png'
import Java from '../assets/Java.png'
import ReactImg from '../assets/ReactImg.png'


const Skills = (props) => {
  return (
    <div>
<div className="container mt-5 pt-5" style={{backgroundColor: props.mode=== 'dark'? '#000000':'white',color:props.mode=== 'dark'? 'white':'black'}}>
  <div className="row text-center">
    <h2 className='fw-bold fs-2 mb-5'>Skills</h2>
  </div>
<div className="row row-cols-1 row-cols-lg-2">
<div className="col">
  <h4>HTML <img src={HTML} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "93%"}}></div>
</div>
<br />

<h4>CSS <img src={css} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "92%"}}></div>
</div>
<br />

<h4>Bootstrap <img src={Bootsrap} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "95%"}}></div>
</div>
<br />

<h4>JavaScript <img src={js} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "87%"}}></div>
</div>
<br />
<h4>React JS <img src={ReactImg} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "86%"}}></div>
</div>


{/* <h4>GitHub</h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}></div>
</div> */}

</div>
{/*  */}
<div className="col">


{/* <h4>React JS <img src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256" width={"30px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "90%"}}></div>
</div>
<br /> */}

<h4>Redux <img src={Redux} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "76%"}}></div>
</div>
<br />

  <h4>Java <img src={Java} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}></div>
</div>
<br />

<h4>GitHub <img src={Git} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"}}></div>
</div>
<br />

<h4>Netlify <img src={Netlify} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "80%"}}></div>
</div>
<br />

<h4>Adobe Photoshop <img src={PS} width={"40px"} alt="" /></h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}></div>
</div>



{/* <h4>JavaScript</h4>
<div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}></div>
</div> */}



</div>



</div>




</div>


    </div>
  )
}

export default Skills