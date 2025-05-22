import './App.css'
import NavBar from './Components/NavBar'
import React,{useState} from 'react';
import Part1 from './Components/Part1';
import BackEvent from './Components/BackEvent';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ProjectsExample from './Components/ProjectsExample';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import AboutMe from './Components/AboutMe';
import Qualification from './Components/Qualification';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'




function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#000000';

    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
    {/* <BackEvent/> */}
   <NavBar mode={mode} toggleMode={toggleMode} />
   
<section id='home'>
<Part1 mode={mode} toggleMode={toggleMode}/>
</section>

<section id='about'>
<AboutMe  mode={mode} toggleMode={toggleMode}/>
</section>

<section id='skills'>
<Skills  mode={mode} toggleMode={toggleMode}/>

</section>

<section id='education'>
<Qualification mode={mode} toggleMode={toggleMode}/>

</section>

<section id='projects'>
<Projects  mode={mode} toggleMode={toggleMode}/>
<ProjectsExample  mode={mode} toggleMode={toggleMode}/>

</section>


<section id='contact'>
<ContactMe  mode={mode} toggleMode={toggleMode}/>

</section>

<Footer mode={mode} toggleMode={toggleMode}/>

{/* <Router>
<NavBar/>
<Routes>
<Route path='/' element={<Part1 mode={mode} toggleMode={toggleMode}/>} />
<Route path='/about' element={<AboutMe  mode={mode} toggleMode={toggleMode}/>} />
<Route path='/skills' element={<Skills  mode={mode} toggleMode={toggleMode}/> }/>
<Route path='/education' element={<Qualification mode={mode} toggleMode={toggleMode}/>} />
<Route path='/projects' element={<ProjectsExample  mode={mode} toggleMode={toggleMode}/>} />


<Route path='/contact' element={<ContactMe  mode={mode} toggleMode={toggleMode}/>} />



</Routes>

<Footer mode={mode} toggleMode={toggleMode}/> 

</Router> */}

    </>
  )
}

export default App
