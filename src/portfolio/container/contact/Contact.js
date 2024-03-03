import React, { useState } from "react";
import "./contact.css";
import { IoMdMail } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import profile from "../../assets/contact/contact-profile.jpg";
import { BiSolidDownArrow } from "react-icons/bi";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contact_container" id="contact">
      <div className="contact_content">
        <div className="contact">
          <div className="contact_heading-title">
            <h1>
              <span>Contact</span>
            </h1>
          </div>
          <div className="contact_form-content">
            <div className="contact_chat-card-form">
              <div className="contact_chat-card-profile">
                <img src={profile} alt="chat-card-profile" />
                <p className="chat_card-profile-name">Sherwin Mante</p>
                <p className="chat_card-profile-number">(+639)9562368407</p>
              </div>
              <div className="contact_chat-card-location-email-content">
                <div className="contact_chat-card-location-content">
                  <IoLocationSharp className="icon" />
                  <p>Davao City, Philippines</p>
                </div>
                <div className="contact_chat-card-email-content">
                  <IoMdMail className="icon" />
                  <p>mantesherwin25@gmail.com</p>
                </div>
                <div className="contact_chat-card-button-content">
                  <button onClick={handleToggle}>Contact</button>
                </div>
              </div>
              <div
                className={`contact_chat-card-form-content ${
                  showForm ? "openForm" : "closeForm"
                }`}
              >
                <div className="contact_chat-card">
                  <h1>Send Message</h1>
                  <input
                    type="text"
                    placeholder="Name"
                    autoComplete="OFF"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    autoComplete="OFF"
                    required
                  />
                  <textarea
                    rows={6}
                    placeholder="Message*"
                    autoComplete="OFF"
                    required
                  />
                  <button>Send</button>
                  <button onClick={handleToggle}>Close</button>
                  <div className="contact_chat-card-form-icon-content">
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                  </div>
                </div>
              </div>
              <div className="contact_chat-card-arrow-down-content">
                <BiSolidDownArrow className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
