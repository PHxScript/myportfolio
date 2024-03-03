import React from "react";
import "./header.css";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";
// import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaHandSparkles } from "react-icons/fa";
import { CiDesktopMouse2 } from "react-icons/ci";
import { GoArrowDown } from "react-icons/go";
import profile from "../../assets/header/profile1.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_content">
        <div className="header">
          <div className="header_icon-content">
            <FaFacebookF className="icon fb" />
            <FaTwitter className="icon twitter" />
            <TbBrandGithubFilled className="icon github" />
            <SiGmail className="icon gmail" />
          </div>
          <div className="header_title-text-description-content">
            <h1>SHERWIN MANTE</h1>
            <h3>
              Software <span>Developer</span>
            </h3>
            <p>
              With a passion for crafting clean and efficient code. Currently
              building foundational skills in programming, web development, and
              software design.
            </p>
            <button className="header_button">
              Say Hi <FaHandSparkles className="icon_hand" />
            </button>
            <div className="header_scroll-btn-content">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="header_link"
              >
                <CiDesktopMouse2 className="icon_mouse" /> Explore{" "}
                <GoArrowDown className="icon_arrowDown" />
              </Link>
              {/* <a href='#about' className='header_link'><CiDesktopMouse2 className='icon_mouse'/> Explore <GoArrowDown className='icon_arrowDown'/></a> */}
            </div>
          </div>
          <img src={profile} alt="profile" className="header_profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
