import React from 'react'
import Menu from "./navigation/Menu";
import Welcome from './components/Welcome'
import "./App.css"
import Bio from "./components/Bio"
import Skills from './components/Skills'
// import PlaySound from './components/PlaySound'


const App = () => {
  return (
    <>
    <div className='menustyle'>
      <Menu />
    </div> 
    {/* <div className=''></div> */}
    {/* <PlaySound /> */}

    <div className='flex-container'>
      <Welcome />
    </div>
    <Bio />
    <Skills />

    </>
  )
} 
export default App
