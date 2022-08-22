import { useState, useEffect } from 'react';
import Homepage from './Component/HomePage/Homepage';
import Sidebar from './Component/Sidebar/Sidebar';
import Skills from './Component/Skills/Skills';
import Experience from './Component/Experience/Experience';
import Project from './Component/Project/Projects';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import { MenuOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true)

  useEffect(()=>{
    if (window.screen.width > 600){
        setToggleSidebar(true) 
    }
  }, [window.screen.width ])

  function detectWindowSize() {
    if (window.innerWidth > 600){
      setToggleSidebar(true) 
    console.log(window.innerWidth)
  }     
}

 window.onresize = detectWindowSize;


  const toggleSide = (value) =>{
    setToggleSidebar(value)
  }
  return (
    <div className="app">
      {toggleSidebar && <Sidebar toggleSide= {toggleSide}/>}
      <div className='app-main'>
        <div className='menu'>
        <MenuOutlined onClick={()=> setToggleSidebar(prev => !prev)} />
        </div>
      <Routes>
        <Route path='/' element={<Homepage  />}/>
        <Route path='about' element={<About />}/>
        <Route path='skills' element={<Skills />}/>
        <Route path='experience' element={<Experience />}/>
        <Route path='project' element={<Project />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>             
      </div>
    </div>
  );
}

export default App;
