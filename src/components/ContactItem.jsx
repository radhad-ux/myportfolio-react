import React from "react";

export default function ContactItem({ data }) {
  const { title, link, image } = data;
  const imageURL = require(`../assets/images/contacticons/${image}`);

  return (
    <div className="contact_item">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={imageURL} className="contact_image" alt="contact icons" />
      </a>
      <span>{title}</span>
    </div>
  );
}
