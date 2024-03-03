import React from "react";
import "./footer.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer">
          <div className="footer_get-in-touch-content">
            <div>
              <h2>GET IN TOUCH</h2>
              <p>
                I'd love to discuss how my software development expertise can
                benefit your project. Let's connect and explore the
                possibilities!
              </p>
              <FaFacebookF className="icon fb" />
              <FaTwitter className="icon twitter" />
              <TbBrandGithubFilled className="icon github" />
              <SiGmail className="icon gmail" />
            </div>
          </div>

          <div className="footer_contact-location-content">
            <div>
              <h2>LOCATION</h2>
              <div className="footer_location-content">
                <IoLocationSharp className="icon pin_location" />
                <p>Davao City, Philippines</p>
              </div>
              <div className="footer_contact-content">
                <FaPhoneAlt className="icon phone_number" />
                <p>(+639)9562368407</p>
              </div>
            </div>
          </div>

          <div className="footer_quick-links-news-letter-content">
            <div>
              <div className="footer_quick-links-content">
                <h2>QUICK LINKS</h2>
                <p>
                  <Link to="/dashboard">Dashboard</Link>
                </p>
              </div>

              <h2>NEWS LETTER</h2>
              <p>Never Miss an Update, Subscribe Now</p>
              <div className="footer_news-letter-input-button-content">
                <input
                  type="text"
                  placeholder="Email . . ."
                  autoComplete="OFF"
                />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_programming-language-content">
          <FaHtml5 className="icon" />
          <FaCss3Alt className="icon" />
          <IoLogoJavascript className="icon" />
          <FaReact className="icon" />
          <SiPhp className="icon" />
          <IoLogoFirebase className="icon" />
          <SiMysql className="icon" />
        </div>

        <div className="footer_all-right-reserve-content">
          &copy; Sherwin Mante
        </div>
      </div>
    </div>
  );
};

export default Footer;
