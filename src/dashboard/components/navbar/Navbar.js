import React, { useState } from "react";
import "./Navbar.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser, FaUserPlus } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { GoArrowLeft } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";
const DashboardNavbar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdown(true);
  };
  const handleMouseLeave = () => {
    setIsDropdown(false);
  };

  const handleToggle = () => {
    setToggleSearch(!toggleSearch);
  };

  return (
    <div
      className={`dashboard_navbar-container ${
        toggleSearch ? "dashboard_navbar-search-container" : ""
      }`}
    >
      <div className="dashboard_navbar-content">
        <div className="dashboard_navbar-dropdown-content">
          <div
            className="dashboard_navbar-dropdown-toggle-content"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button>
              List
              <TiArrowSortedDown className="icon" />
            </button>
            {isDropdown ? (
              <div className="dashboard_navbar-dropdown-link-content">
                <div className="dashboard_navbar-dropdown-new-project-content">
                  <p>
                    <Link to="/dashboard/projects" onClick={handleMouseLeave}>
                      <CgWebsite className="icon" /> Projects
                    </Link>
                  </p>
                </div>
                <div className="dashboard_navbar-dropdown-new-users-content">
                  <p>
                    <Link>
                      <FaUserPlus className="icon" /> Users
                    </Link>
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="dashboard_navbar-search-profile-content">
          <div className="dashboard_navbar-search-content">
            <input type="search" placeholder="Search" />
            <CiSearch className="icon" onClick={handleToggle} />
          </div>
          <div
            className={`dashboard_navbar-search-toggle-content ${
              toggleSearch ? "dashboard_navbar-search-toggle-open" : ""
            }`}
          >
            <GoArrowLeft className="icon" onClick={handleToggle} />
            <div className="dashboard_navbar-search-toggle-open-content">
              <input type="search" placeholder="Search" />
              <CiSearch className="icon" />
            </div>
            <MdKeyboardVoice className="icon_voiceSearch" />
          </div>
          <div className="dashboard_navbar-language-content">
            <Tooltip id="language" className="tooltip_language" />
            <button data-tooltip-id="language" data-tooltip-content="Language">
              <IoLanguage /> <TiArrowSortedDown />
            </button>
          </div>
          <div className="dashboard_navbar-notification-content">
            <Tooltip id="notification" className="tooltip_notification" />
            <button
              data-tooltip-id="notification"
              data-tooltip-content="Notification"
            >
              <IoIosNotificationsOutline className="icon" />
            </button>
            <p>8</p>
          </div>
          <div className="dashboard_navbar-profile-content">
            <Tooltip id="nav_profile" className="tooltip_profile" />
            <button
              data-tooltip-id="nav_profile"
              data-tooltip-content="profile"
            >
              {" "}
              <FaCircleUser className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
