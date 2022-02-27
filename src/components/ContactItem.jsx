import React from "react";

const ContactItem = ({ data }) => {
  const { title, link, image } = data;
  const imageURL = require(`../assets/images/contacticons/${image}`);

  return (
    <div className="contact_item">
      <a href={link} target="_blank" rel="noreffer">
        <img src={imageURL} className="contact_image" />
      </a>
      <span>{title}</span>
    </div>
  );
};

export default ContactItem;
