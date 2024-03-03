import React from "react";
import "./services.css";
import { FaLaptopCode, FaMobile } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <div className="services_container" id="services">
      <div className="services_content">
        <div className="services">
          <div className="services_heading-title">
            <h1>
              <span>Services</span>
            </h1>
          </div>

          <div className="services_what-we-do-content">
            <div className="services_what-we-do-text-content">
              <h4>What I do?</h4>
              <h1>
                Elevating Your Online Presence with Dynamic Web Solutions,
                Building Responsive Websites for Modern Digital Experiences.
              </h1>
              <p>
                Whether you're a startup looking to build your first MVP, a
                growing business in need of scalable solutions, or an enterprise
                seeking to optimize your operations, I'am here to help.
              </p>
              <Link to="contact" smooth={true} duration={500}>
                Send Message
                <IoIosSend className="services_what-we-do-text-icon" />
              </Link>
              {/* <a href='#contact'>Send Message <IoIosSend className='services_what-we-do-text-icon'/></a> */}
            </div>

            <div className="services_what-we-do-card-content">
              <div className="services_web-development">
                <FaLaptopCode className="services_card-icon" />
                <h3>Web Development</h3>
                <p>
                  Building Responsive Websites for Modern Digital Experiences
                </p>
              </div>
              <div className="services_web-design">
                <FaMobile className="services_card-icon" />
                <h3>Web Design</h3>
                <p>
                  We believe in pushing the boundaries of design to create
                  websites that stand out from the crowd.
                </p>
              </div>
              <div className="services_mobile-development">
                <IoLogoWebComponent className="services_card-icon" />
                <h3>Mobile Development</h3>
                <p>Bringing Your Ideas to Life with Stunning Mobile Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
