import React, {useState, useEffect} from "react";
import "./sidebar.css";
import { NavLink} from "react-router-dom";
import {
  BusinessCenter,
  Home,
  Lightbulb,
  Mail,
  List,
  Person,
  GitHub,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Sidebar({darkmode, theme, handleSidebar}) {
  const [sideState, setSideState] = useState(false)

  useEffect(()=>{
    if (window.screen.width > 600){
        setSideState(true) 
    }
  }, [])


  console.log(theme)
  return (
    <div className={`sidebar  ${darkmode? 'darks' : ''}`}>
      <header className={`header ${theme === 'red' ? 'red': theme === 'blue' ? 'blue': theme === 'green' ? 'green':theme === 'pink' ? 'pink':''}`}>
        <p>
          <span>M</span>obolaji
        </p>
      </header>
      <main className={`main ${theme === 'red' ? 'r': theme === 'blue' ? 'b': theme === 'green' ? 'g':theme === 'pink' ? 'p':''} ${darkmode ? 'dar' : ''}`}>
        <NavLink  onClick={sideState ? '' : handleSidebar} to="/">
          <Home />
          <p >Home</p>
        </NavLink>
        <NavLink  onClick={sideState ? '' : handleSidebar} to="/skills">
          <Lightbulb />
          <p>Skills</p>
        </NavLink>
        <NavLink  onClick={sideState ? '' : handleSidebar} to="/experience">
          <List />
          <p>Experience</p>
        </NavLink>
        <NavLink  onClick={sideState ? '' : handleSidebar} to="/project">
          <BusinessCenter />
          <p>Project</p>
        </NavLink>
        <NavLink  onClick={sideState ? '' : handleSidebar} to="/about">
          <Person />
          <p>About</p>
        </NavLink>
        <NavLink  onClick={sideState ? '' : handleSidebar} to="/contact">
          <Mail />
          <p>Contact</p>
        </NavLink>
      </main>
      <footer>
      <a href='https://github.com/MobolajiRichard'>
        <IconButton sx={{ color: theme === 'red' ? '#ec1839': theme === 'blue' ? '#1854b4': theme === 'green' ? '#37b182':theme === 'pink' ? '#f021b2':'#fc511e' }}>
            <GitHub />
          </IconButton>
        </a>
  
        <a href="https://www.twitter.com/RichardMBJ23">
          <IconButton sx={{ color: theme === 'red' ? '#ec1839': theme === 'blue' ? '#1854b4': theme === 'green' ? '#37b182':theme === 'pink' ? '#f021b2':'#fc511e' }}>
            <Twitter />
          </IconButton>
        </a>
  
        <a href='https://www.linkedin.com/in/mobolaji-richard-oginni-7314b2230/'>
        <IconButton sx={{ color: theme === 'red' ? '#ec1839': theme === 'blue' ? '#1854b4': theme === 'green' ? '#37b182':theme === 'pink' ? '#f021b2':'#fc511e' }}>
          <LinkedIn />
        </IconButton>
        </a>
      </footer>
    </div>
  );
}

export default Sidebar;
