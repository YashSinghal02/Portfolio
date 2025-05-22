import React from 'react'
import online from '../assets/online.png'
import get from '../assets/get.png'
import world from '../assets/world.png'



const Projects = (props) => {
  return (
    <div>
<div className="container mt-5 pt-5"  style={{backgroundColor: props.mode=== 'dark'? '#000000':'white',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="row row-cols-1 row-cols-lg-2 g-4">
<div className="col">
<h2 className='fs-2 fw-bold'>Projects</h2>
<p>You can find all of  my projects on my GitHub Profile.You can view my activites,contributions and code on these projects.
    Some of these projects are completed and some are in progress.You can also leave a comments on the profile and start a discussion.I am
    always loooking for new projects and Ideas.You can also reach out to me on any of the socila media channels mentioned below.
</p>
<a  href="https://github.com/YashSinghal02" target='blank'><div className="btn  experincebtn"  style={{backgroundColor: props.mode=== 'dark'? '#27bd81 ':'#00BB76 ',color:"white"}}><i className="fa-solid fa-star" style={{color:"yellow"}}></i> Star Me on GitHub</div></a>
</div>

<div className="col experince" >
<img src={online}  alt="" />
</div>



</div>




</div>



    </div>
  )
}

export default Projects