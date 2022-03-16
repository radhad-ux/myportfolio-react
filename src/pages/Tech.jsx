import React from "react";
import techsdata from "../data/techdata.json";
import TechItem from "../components/TechItem";

export default function Tech() {
  const TechsList = techsdata.map((data) => (
    <TechItem key={data.id} data={data} />
  ));

  return (
    <div className="container_main" id="tech">
      <div className="container_sub">
        <div className="page_left">
          <h2 className="title">Technologies I Use</h2>
          <p>
            Here is the technologies that I already know and also started to
            learn.
          </p>
        </div>
        <div className="page_right">
          <div className="tech_list">{TechsList}</div>
        </div>
      </div>
    </div>
  );
}
