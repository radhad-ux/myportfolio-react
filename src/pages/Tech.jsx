import React from "react";
import techdata from "../data/techdata.json";
import TechItem from "../components/TechItem";

const Tech = () => {
  const TechList = techdata.map((data) => (
    <TechItem key={data.id} data={data} />
  ));

  return (
    <div className="container_main" id="tech">
      <h2 className="title">Technologies I Use</h2>
      <div className="container_sub">
        <div className="page_left">
          <p>
            Here is the technologies that I already know and also started to
            learn.
          </p>
        </div>
        <div className="page_right">
          <div className="tech_list">{TechList}</div>
        </div>
      </div>
    </div>
  );
};

export default Tech;