import React from "react";
import { FaClipboardList, FaArrowRight } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { MdCallMissedOutgoing, MdOutlinePending } from "react-icons/md";
import "./card.css";

const Card = () => {
  const CardData = [
    {
      icon: <FaClipboardList />,
      title: "CLIENTS",
      percentage: "99%",
      value: "50",
    },
    {
      icon: <BsStars />,
      title: "SATISFIED",
      percentage: "100%",
      value: "50",
    },
    {
      icon: <MdCallMissedOutgoing />,
      title: "ONGOING",
      percentage: "15%",
      value: "3",
    },
    {
      icon: <MdOutlinePending />,
      title: "PENDING",
      percentage: "24%",
      value: "12",
    },
  ];

  return (
    <>
      {CardData.map((data, index) => {
        return (
          <div key={index} className="dashboard_card-content">
            <div className="dashboard_card-data">
              <p className="icon">{data.icon}</p>
              <div className="dashboard_card-title">
                <p> {data.title}</p>
                <h2> {data.value}</h2>
              </div>
              <p className="percentage"> {data.percentage}</p>
            </div>
            <div className="dashboard_selected-month">
              <a href="#temp">
                Selected Month
                <FaArrowRight className="icon" />
              </a>
              {/* <p>Selected Month</p>
              <FaArrowRight /> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
