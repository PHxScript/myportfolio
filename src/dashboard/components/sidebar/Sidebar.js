import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { FaHome, FaChartArea } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Sidebar = () => {
  const [mainLink] = useState([
    { icon: <FaHome />, link: "Home" },
    { icon: <FaChartArea />, link: "Dashboard" },
  ]);
  const [activeLink, setActiveLink] = useState("");
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    handleActiveLink("Dashboard");
  }, []);

  const showSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="sidebar_container">
      <CiMenuBurger className="sidebar_menu" onClick={showSidebar} />
      <div className={`sidebar_content ${toggleSidebar ? "showSidebar" : ""}`}>
        <div className="sidebar">
          <div className="sidebar_main-content">
            <div className="sidebar_heading-title-content">
              <h3>PHxScript</h3>
            </div>
            <h5>Main</h5>
            {mainLink.map((link, index) => {
              return (
                <div key={index}>
                  <Link
                    to={link.link === "Home" ? "/" : `/${activeLink}`}
                    className={`sidebar_main-link ${
                      activeLink === link.link ? "active" : ""
                    }`}
                    onClick={() => {
                      handleActiveLink(link.link);
                      if (toggleSidebar) {
                        showSidebar();
                      } else {
                        return null;
                      }
                    }}
                  >
                    {link.icon} {link.link}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
