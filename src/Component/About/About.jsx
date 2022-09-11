import React from "react";
import "./about.css";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function About({ theme }) {
  const navigate = useNavigate();
  const downloadCV = () => {
    // using Java Script method to get PDF file
    fetch("mobolaji-resume.docx").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "mobolaji-resume.docx";
        alink.click();
      });
    });
  };
  return (
    <div className="about">
      <header
        className={`header ${
          theme === "red"
            ? "red"
            : theme === "blue"
            ? "blue"
            : theme === "green"
            ? "green"
            : theme === "pink"
            ? "pink"
            : ""
        }`}
      >
        <h1>About Me</h1>
      </header>
      <main className="about-main">
        <section className="about-text">
          <div>
            <h2>
              I'm{" "}
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
                Oginni Mobolaji Richard{" "}
              </span>
              and a{" "}
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
            </h2>
            <p>
              I'm a graduate of Physics from Obafemi Awolowo University,
              Ile-Ife, Osun State, Nigeria. I'm from Ilesa, Osun State, Nigeria.
              I'm currently based in Lagos. I love learning new things and
              always curious to know how things works. I'm a problem solver with
              passion, dedication and commitment to make things work. I'm a
              solution advocate whose goal is to use my skills in providing
              sustainable solutions across the world. Whenever i'm not coding, I
              like playing or watching football and making new friend.
            </p>
          </div>
          <Grid container spacing={2} sx={{ marginTop: "2em" }}>
            <Grid item xs={12} sm={6}>
              <span style={{ fontWeight: 600 }}>Birthday</span> : 23 Oct. 1999
            </Grid>
            <Grid item xs={12} sm={6}>
              <span style={{ fontWeight: 600 }}>Degree</span> : BSc Physics
            </Grid>
            <Grid item xs={12} sm={6}>
              <span style={{ fontWeight: 600 }}>City</span> : Lagos
            </Grid>
            <Grid item xs={12} sm={6}>
              <span style={{ fontWeight: 600 }}>Availabilty</span> : Available
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </section>
        <section
          className={`about-image  ${
            theme === "red"
              ? "red"
              : theme === "blue"
              ? "blue"
              : theme === "green"
              ? "green"
              : theme === "pink"
              ? "pink"
              : ""
          }`}
        >
          <img src="/images/mobolaji.jpg" className="image" alt="" />
        </section>
      </main>
      <div className="about-button">
        <button
        onClick={downloadCV}
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
          Download CV
        </button>
        <button
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
          onClick={() => navigate("/contact")}
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default About;
