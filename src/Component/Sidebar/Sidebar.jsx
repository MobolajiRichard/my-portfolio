import React from "react";
import "./sidebar.css";
import { NavLink, Link, useNavigate, useHref } from "react-router-dom";
import {
  BusinessCenter,
  ContactMailOutlined,
  Home,
  HomeOutlined,
  HomeRepairService,
  Lightbulb,
  Mail,
  List,
  Person,
  GitHub,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Sidebar({ toggleSide }) {
  return (
    <div className="sidebar">
      <header>
        <p>
          <span>M</span>obolaji
        </p>
      </header>
      <main>
        <NavLink to="/">
          <Home />
          <p>Home</p>
        </NavLink>
        <NavLink to="/skills">
          <Lightbulb />
          <p>Skills</p>
        </NavLink>
        <NavLink to="/experience">
          <List />
          <p>Experience</p>
        </NavLink>
        <NavLink to="/project">
          <BusinessCenter />
          <p>Project</p>
        </NavLink>
        <NavLink to="/about">
          <Person />
          <p>About</p>
        </NavLink>
        <NavLink to="/contact">
          <Mail />
          <p>Contact</p>
        </NavLink>
      </main>
      <footer>
      <a href='https://github.com/MobolajiRichard'>
        <IconButton sx={{ color: "#fc511e" }}>
            <GitHub />
          </IconButton>
        </a>
  
        <a href="https://www.twitter.com/RichardMBJ23">
          <IconButton sx={{ color: "#fc511e" }}>
            <Twitter />
          </IconButton>
        </a>
  
        <a href='https://www.linkedin.com/in/mobolaji-richard-oginni-7314b2230/'>
        <IconButton sx={{ color: "#fc511e" }}>
          <LinkedIn />
        </IconButton>
        </a>
      </footer>
    </div>
  );
}

export default Sidebar;
