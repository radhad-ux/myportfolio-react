import React from "react";
import contactdata from "../data/contactdata.json";
import ContactItem from "../components/ContactItem";
import Footer from "../components/Footer";

const Contact = () => {
  const ContactsList = contactdata.map((data) => (
    <ContactItem key={data.id} data={data} />
  ));
  return (
    <div className="container_main" id="contact">
      <h2 className="title">Contact</h2>
      <div className="container_sub">
        <div className="page_left">
          <p>
            Here is my contact information if you are interested in starting a
            collaboration
          </p>
        </div>
        <div className="page_right">
          <div className="contact_list">{ContactsList}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
