import "./homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage({ theme }) {
  const navigate = useNavigate();

  let eye = document.getElementsByClassName("eye");

  const eyeMove = (e) => {
    let x = (e.clientX * 100) / window.innerWidth + "%";
    let y = (e.clientY * 100) / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
      eye[i].style.left = x;
      eye[i].style.top = y;
      eye[i].style.transform = `translate(-${x}, -${y})`;
    }
  };

  return (
    <div className="homepage" onMouseMove={eyeMove}>
      <div className="container">
        <div className="welcome-text">
          <div>
            <h3>
              Hello, my name is{" "}
              <span
                className="name"
                style={{
                  color:
                    theme === "red"
                      ? "#ec1839"
                      : theme === "blue"
                      ? "#1854b4"
                      : theme === "green"
                      ? "#37b182"
                      : theme === "pink"
                      ? "#f021b2"
                      : "#fc511e",
                }}
              >
                Oginni Mobolaji Richard
              </span>
            </h3>
            <h3>
              I am a{" "}
              <span
                className="title"
                style={{
                  color:
                    theme === "red"
                      ? "#ec1839"
                      : theme === "blue"
                      ? "#1854b4"
                      : theme === "green"
                      ? "#37b182"
                      : theme === "pink"
                      ? "#f021b2"
                      : "#fc511e",
                }}
              >
                Web Developer
              </span>
            </h3>
            <p>
              I'm a proficient, self-taught, web developer with years of
              experience to back it up. I'm a solution advocate whose goal is to
              use my skills in providing sustainable solutions across the world.
            </p>
          </div>
          <button
            onClick={() => navigate("/about")}
            className="button"
            style={{
              backgroundColor:
                theme === "red"
                  ? "#ec1839"
                  : theme === "blue"
                  ? "#1854b4"
                  : theme === "green"
                  ? "#37b182"
                  : theme === "pink"
                  ? "#f021b2"
                  : "#fc511e",
            }}
          >
            <p>Learn More</p>
          </button>
        </div>
        <div className="animation">
          <div
            className={`face ${theme === "red"? 'reds'                  
                  : theme === "blue"
                  ? "blues"
                  : theme === "green"
                  ? "greens"
                  : theme === "pink"
                  ? "pinks"
                  : ""} `}
          ></div>
          <div className="eyes">
            <div className="pupil">
              <div className="eye"></div>
            </div>
            <div className="pupil">
              <div className="eye"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
