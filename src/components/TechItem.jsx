// NPM files
import React from "react";

export default function TechItem({ data }) {
  const { title, image } = data;
  const imageURL = require(`../assets/images/techicons/${image}`);

  return (
    <div className="tech_item">
      <img className="tech_image" src={imageURL} alt="Tech icons" />
      <h3 className="tech_title">{title}</h3>
    </div>
  );
}
