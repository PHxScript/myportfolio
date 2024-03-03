import React from "react";
import "./dashboard.css";
import { Status, Analytics, Report } from "../../container/importContainer";
import { IoIosSettings } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <div className="dashboard_content">
        <div className="dashboard_heading-title-content">
          <div>
            <h3>Dashboard</h3>
            <p>Welcome to PHxScript Dashboard</p>
          </div>
          <button>
            <IoIosSettings className="icon" /> Settings
          </button>
        </div>
        <Status />
        <Analytics />
        <Report />
      </div>
    </div>
  );
};

export default Dashboard;
