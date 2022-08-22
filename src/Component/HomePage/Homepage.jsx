import React from "react";
import "./homepage.css";
import {useNavigate} from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate()
  return (
    <div className="homepage">
      <div className="container">
        <div className="welcome-text">
          <div>
            <h3>
              Hello, my name is{" "}
              <span className="name">Oginni Mobolaji Richard</span>
            </h3>
            <h3>
              I am a <span className="title">Web Developer</span>
            </h3>
            <p>
              I'm a proficient, self-taught, web developer with years of
              experience to back it up. I'm a solution advocate whose goal is to
              use my skills in providing sustainable solutions across the world.
            </p>
            <a href="https://www.google.com">google</a>
          </div>
          <button onClick={() => navigate('/about')} className="button">
            <p>Learn More</p>
          </button>
        </div>
        <div className="animation">ddddc</div>
      </div>
    </div>
  );
}

export default Homepage;
