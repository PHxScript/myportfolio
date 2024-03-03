import React, { useState, useEffect, useRef } from "react";
import "./report.css";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";

const Report = () => {
  // const [displayedLogs, setDisplayedLogs] = useState(3);
  // const [isAllDisplayed, setIsAllDisplayed] = useState(false);
  const [displayedLogs] = useState(3);
  const [isAllDisplayed] = useState(false);

  const activityContentRef = useRef();

  useEffect(() => {
    // If all logs are displayed, scroll to the top of the activity-content div
    if (isAllDisplayed) {
      activityContentRef.current.scrollTop = 0;
    }
  }, [isAllDisplayed]);

  const activityLogs = [
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "E-commerce projects completed",
    },
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "Responsive Website Development for JKL Mart",
    },
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "Product Recommendation Engine for PQR E-market",
    },
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "Payment Gateway Integration for DEF Enterprises",
    },
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "Online Store Redesign for XYZ Company",
    },
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "Payment Gateway Integration for DEF Enterprises",
    },
    {
      date: new Date().toLocaleDateString("en-US"),
      logs: "Online Store Redesign for XYZ Company",
    },
  ];

  // const handleShowMore = () => {
  //   setDisplayedLogs(activityLogs.length);
  //   setIsAllDisplayed(true);
  //   activityContentRef.current.scrollTop = 0;
  // };

  // const handleShowLess = () => {
  //   setDisplayedLogs(3);
  //   setIsAllDisplayed(false);
  // };

  return (
    <div className="report_container">
      <div className="report_content">
        <div className="report">
          <div
            ref={activityContentRef}
            className={`report_activity-content ${
              isAllDisplayed ? "loadMore" : null
            }`}
          >
            <h5>Activity</h5>

            <div className="report_activity-logs-content">
              {activityLogs.slice(0, displayedLogs).map((logs, index) => {
                return (
                  <div
                    key={index}
                    className="report_activity-logs-item-content"
                  >
                    <p>{logs.date}</p>
                    <p>{logs.logs}</p>
                  </div>
                );
              })}
            </div>
            {/* <div className="report_activity-button-content">
              {isAllDisplayed ? (
                <button onClick={handleShowLess}>Show Less</button>
              ) : (
                <button onClick={handleShowMore}>Show More</button>
              )}
            </div> */}
            <div className="report_activity-button-content">
              <button>Show More</button>
            </div>
          </div>
          <div className="report_reviews-content">
            <div className="report_success-completed-content">
              <div className="report_success-content">
                <IoCheckmarkCircleOutline className="icon" />
                <h2>Project Successful</h2>
                <p>Good Job!</p>
                <button>Check Status</button>
              </div>
              <div className="report_completed-content">
                <h4> projects completed!</h4>
                <h1>50</h1>
                <p>You've made great progress</p>
                <button>View More</button>
              </div>
            </div>
            <div className="report_client-reviews-content">
              <h5>Client Reviews</h5>
              <p>
                <BiSolidQuoteAltLeft />
                I can confidently say that your professionalism, attention to
                detail, and dedication have made our experience exceptional.
                <BiSolidQuoteAltRight />
              </p>
              <div className="report_client-content">
                <div className="report_client">
                  <FaCircleUser className="icon-user" />
                  <h4>Sherwin Mante</h4>
                </div>
                <FaArrowRight className="icon-arrow-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
