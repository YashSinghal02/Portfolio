import { BrowserRouter,Route,Routes } from 'react-router'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import NavBar from './Components/NavBar/NavBar'
import Tools from './Components/Skills/Tools'
import VersionControl from './Components/Skills/VersionControl'
import Frameworks from './Components/Skills/Frameworks'
import Frontend from './Components/Skills/Frontend'
import ProgrammingLanguages from './Components/Skills/ProgrammingLanguages'
import AllSkills from './Components/Skills/AllSkills'
import Libraries from './Components/Skills/Libraries'
import Footer from './Components/Footer/Footer'
import Education from './Components/Education/Education'



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path="/" element={<Home/> } ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/education' element={<Education/>}></Route>

        <Route path='/skills' element={<Skills/>}>
        <Route index element={<AllSkills/>}></Route>
        <Route path="ProgrammingLanguages" element={<ProgrammingLanguages/>}></Route>
        <Route path="Libraries" element={<Libraries/>}></Route>
        <Route path="Tools" element={<Tools/>}></Route>
        <Route path="VersionControl" element={<VersionControl/>}></Route>
        <Route path="Frontend" element={<Frontend/>}></Route>
        <Route path="Frameworks" element={<Frameworks/>}></Route>
        </Route>

        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}

export default App
