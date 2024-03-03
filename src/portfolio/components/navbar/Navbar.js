import React, { useState } from "react";
import "./navbar.css";
import { CiMenuBurger } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsToggle(!isToggle);
    if (!isToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div className="navbar">
          <h4>PHxScript</h4>
          <nav className={`${isToggle ? "open" : "close"}`}>
            <ul>
              <li>
                <Link
                  to="root"
                  smooth={true}
                  duration={500}
                  onClick={isToggle ? toggle : null}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={isToggle ? toggle : null}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  onClick={isToggle ? toggle : null}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={isToggle ? toggle : null}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={isToggle ? toggle : null}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {isToggle ? (
            <GrClose className="navbar_close" onClick={toggle} />
          ) : (
            <CiMenuBurger className="navbar_menu" onClick={toggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
