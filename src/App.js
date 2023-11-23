import React from 'react'
import Menu from "./navigation/Menu";
import Welcome from './components/Welcome'
import "./App.css"
import About from "./components/About"
import Skills from './components/Skills'


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
    </div>
    
    

    </>
  )
} 
export default App
