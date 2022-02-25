import React from "react";

const ContactItem = ({ data }) => {
  const { title, link, image } = data;
  return (
    <div className="contact_item">
      <li>
        <a href={link} target="_blank" rel="noreffer">
          <img src={image} className="contact_image" />
        </a>
        <span>{title}</span>
      </li>
    </div>
  );
};

export default ContactItem;
