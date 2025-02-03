
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skill/Skills'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'


function App() {


  return (
    <>
    
    <BrowserRouter>
    <Navbar />
    <Home />
    <About />
    <Skills/>
    <Project /> 
    <Contact /> 
    </BrowserRouter>
  </>
  )
}

export default App
