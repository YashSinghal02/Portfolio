import React from 'react'
import Project1 from '../assets/Project1.png'
import Project2 from '../assets/Project2.png'
import Project3 from '../assets/Project3.png'
import Project4 from '../assets/Project4.png'
import Project5 from '../assets/Project5.png'
import Project6 from '../assets/Project6.png'
import Age from '../assets/Age.png'
import Cal from '../assets/Cal.png'
import Tour from '../assets/Tour.png'
import Gym from '../assets/Gym.png'



const ProjectsExample = (props) => {
  return (
    <div>
<div className="container-fluid mt-5 pt-5" >
<div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 ">

<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Gym} alt="" />
</div>

<div className="protxt">
    <h3>Strength Lab</h3>
    <p>I created a gym website to offer a platform for fitness enthusiasts, providing access to professional equipment, facilities, and resources that promote health, strength, and overall well-being.</p>
  <div className="projectsbtns">
    <a href="https://strengthlabgym.netlify.app/" target='blank'> 
    <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button>
</a>




 <a href="https://strengthlabgym.netlify.app/" target='blank'>    <button class="btn2"><i class="animation"></i>Live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>















  {/*  */}
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Project1} alt="" />
</div>

<div className="protxt">
    <h3>Learning Platform</h3>
    <p>Explore our comprehensive learning platform website offering a diverse range of courses and resources, tailored to enhance your skills and knowledge.</p>
   
  <div className="projectsbtns">
    <a href="https://github.com/YashSinghal02/Learning-Platform" target='blank'>    <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button></a>


 <a href="https://yashsinghal02.github.io/Learning-Platform/" target='blank'>   <button class="btn2"><i class="animation"></i>live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>

{/*  */}
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Tour} alt="" />
</div>

<div className="protxt">
    <h3>Tour & Travels</h3>
    <p> Tour & Travels project was to create an engaging and user-friendly platform that simplifies travel planning and booking. By integrating various features, I sought to enhance the overall travel experience, making it easier..</p>
  <div className="projectsbtns">
    <a href="https://github.com/YashSinghal001/Tour-And-Travels" target='blank'> 
    <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button>
</a>




 <a href="https://tourandtravelbyyash.netlify.app/" target='blank'>    <button class="btn2"><i class="animation"></i>Live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>
{/*  */}






</div>{/* row */}


<div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 ">
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Project2} alt="" />
</div>

<div className="protxt">
    <h3>Uttrakhand Tour</h3>
    <p>Embark on a virtual journey through Uttarakhand's breathtaking landscapes and rich cultural heritage on our tour website. Explore pristine mountains, serene lakes, and vibrant local traditions that define this Himalayan gem.</p>
  <div className="projectsbtns">
    <a href="https://github.com/YashSinghal02/Uttarakhand-Tour" target='blank'> 
    <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button>
</a>




 <a href="https://yashsinghal02.github.io/Uttarakhand-Tour/" target='blank'>    <button class="btn2"><i class="animation"></i>Live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>

{/*  */}
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Project4} alt="" />
</div>

<div className="protxt">
    <h3>Food Recipe Website</h3>
    <p>
    Embark on a culinary adventure with our food website, where recipes from around the world await to inspire your kitchen creativity. Explore flavors, techniques, and tips that elevate every dish from ordinary to extraordinary.</p>
   
  <div className="projectsbtns">
    <a href="https://github.com/YashSinghal001/FoodRecipe" target='blank'>   <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button></a>


 <a href="https://foodrecepieapi.netlify.app/" target='blank'>   <button class="btn2"><i class="animation"></i>live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>
{/*  */}
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Project5} alt="" />
</div>

<div className="protxt">
    <h3>Currency Calculator</h3>
    <p>
    A currency calculator helps you quickly convert one country's currency to another, ensuring you get accurate exchange rates. It's a vital tool for travelers, businesses, and anyone dealing with international transactions.</p>
  <div className="projectsbtns">
    <a href="https://github.com/YashSinghal02/Currency-Converter" target='blank'>   <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button></a>


 <a href="https://yashsinghal02.github.io/Currency-Converter/" target='blank'>    <button class="btn2"><i class="animation"></i>live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>






</div>{/* row */}


<div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3 ">
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Cal} alt="" />
</div>

<div className="protxt">
    <h3>Calculator</h3>
    <p>
    I created a calculator to practice my coding skills and learn about user interface design. It’s a fun way to implement basic arithmetic operations while making a useful tool.</p>
   
  <div className="projectsbtns">
    <a href="https://github.com/YashSinghal02/Currency-Converter" target='blank'>   <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
    </button></a>


 <a href="https://yashsinghal02.github.io/Calculator/" target='blank'>   <button class="btn2"><i class="animation"></i>live view<i class="animation"></i>
 </button></a>
 
  </div>

</div>

</div>

</div>

{/*  */}
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Project6} alt="" />
</div>

<div className="protxt">
    <h3>Meme Generator</h3>
    <p>A meme generator allows users to create humorous and relatable images by adding captions to popular pictures. It's a fun tool for expressing creativity and sharing laughs on social media.</p>
  <div className="projectsbtns">
  <a href="https://github.com/YashSinghal02/Currency-Converter" target='blank'>   <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
  </button></a>


  <a href="https://yashsinghal02.github.io/Meme-Generator/" target='blank'>    <button class="btn2"><i class="animation"></i>live view<i class="animation"></i>
  </button></a>
 
  </div>

</div>

</div>

</div>
{/*  */}
<div className="col ">
<div className="card1" style={{backgroundColor: props.mode=== 'dark'? '#000814':'#f8f9fa',color:props.mode=== 'dark'? 'white':'black'}}>
<div className="pro">
<img src={Age} alt="" />
</div>

<div className="protxt">
    <h3>Age Calculator</h3>
    <p>I built this age calculator because it  offering a straightforward tool to calculate ages accurately, I aim to simplify a common task, making it easier for others to determine ages for various personal or professional purposes.</p>
  <div className="projectsbtns">
  <a href="https://github.com/YashSinghal02/Age-Calculator" target='blank'>   <button class="btn2"><i class="animation"></i>Code<i class="animation"></i>
  </button></a>


  <a href="https://yashsinghal02.github.io/Age-Calculator/" target='blank'>    <button class="btn2"><i class="animation"></i>live view<i class="animation"></i>
  </button></a>
 
  </div>

</div>

</div>

</div>






</div>{/* row */}


<div className="container text-center">
{/* <a href="https://github.com/YashSinghal001" target='blank'><div className="btn  experincebtnd"  style={{backgroundColor: props.mode=== 'dark'? '#27bd81 ':'#00915c ',color:"white"}}> View All <i className="fa-solid fa-arrow-right"></i></div></a> */}


<a class="btn9 btn  experincebtnd" href="https://github.com/YashSinghal02" target='blank' style={{backgroundColor: props.mode=== 'dark'? '#27bd81 ':'#00BB76 ',color:"white"}} ><span>View All</span>
<i className="fa-solid fa-arrow-right"></i>
</a>


</div>

</div>



    </div>
  )
}

export default ProjectsExample