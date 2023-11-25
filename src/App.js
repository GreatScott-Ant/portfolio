import React from 'react'
import Menu from "./navigation/Menu";
import Welcome from './components/Welcome'
import "./App.css"
import About from "./components/About"
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
    <div className='menustyle'>
      <Menu />
    </div> 
  
    <div className='flex-container'>
      <Welcome />
      <About />
      <Skills />
      <Projects />
    </div>

    <Contact />
    
    

    </>
  )
} 
export default App
