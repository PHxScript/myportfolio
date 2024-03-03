import React from "react";
import "./analytics.css";
import { TunnelChart, PieChart } from "../../components/importComponents";

const Analytics = () => {
  return (
    <div className="analytics_container">
      <div className="analytics_content">
        <div className="analytics">
          <div className="analytics_tunnelChart">
            <TunnelChart />
          </div>
          <div className="analytics_pieChart">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
