import React from "react";

const Home = () => {
  return (
    <div className="home_page" id="home">
      <div className="home_page-content">
        <h2>Hello, I'm Radha Doreswamy</h2>
        <p>An aspiring Frontend Developer from Stockholm, Sweden </p>
        <button className="btn-primary" onClick={() => window.open()}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Home;
