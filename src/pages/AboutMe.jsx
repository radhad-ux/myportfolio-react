import React from "react";
import Title from "../components/TitleFeature";
import picture from "../assets/picture.png";

const AboutMe = () => {
  return (
    <div className="container_main" id="about">
      <Title title="About Me" />
      <div className="container_sub">
        <div className="about_description">
          <p>
            My name is Radha Doreswamy. I am a passionate FrontEnd Developer
            based in Stockholm, Sweden.
          </p>
          <p>
            I have a passion for developing user-friendly, accessible and
            responsive websites with JavaScript / ReactJS / HTML / CSS. I never
            stop learning and for me, each new project is another adventure.
          </p>
          <p>Scroll down to see some of my work!</p>
        </div>
        <div className="about_img">
          <img src={picture} alt="lady with laptop" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
