import React from 'react'
import me2 from '../assets/me2.jpg'
import Me3 from '../assets/Me3.jpg'


const AboutMe = (props) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => observer.observe(element));

  return (
    <div>
        <div className="container mt-5 pt-5" style={{backgroundColor: props.mode=== 'dark'? '#000000':'white',color:props.mode=== 'dark'? 'white':'black'}}>
        <div className="row text-center">
    <h2 className='fw-bold fs-2 mb-5'>About Me</h2>
  </div>
<div className="row row-cols-1 row-cols-lg-2 g-4">
<div className="col methree hidden">
  {/*  */}

<div class="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
{/*  */}
<img src={Me3} alt="" className='rounded-circle '  />
{/*  */}

<div class="spinner1">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
{/*  */}
</div>

<div className="col methreetxt hidden">
<p>Hi, I’m Yash Singhal, a front-end developer dedicated to building beautiful and functional web experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life with precision and creativity. I’m passionate about translating design concepts into intuitive and engaging user interfaces. By staying current with the latest web technologies and best practices, I ensure that my projects are both cutting-edge and user-friendly. I thrive on collaboration and am always eager to tackle new challenges and push the boundaries of what’s possible on the web.</p>

<p>When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously improving my skills. Let’s connect and explore how we can create something amazing together!</p>

{/*  */}

<div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>



{/*  */}

</div>



</div>






        </div>
    </div>
  )
}

export default AboutMe