import React from "react";

const TitleFeature = ({ title }) => {
  return (
    <div className="title_main">
      <div className="title_main-empty"></div>
      <h3>{title}</h3>
    </div>
  );
};

export default TitleFeature;
