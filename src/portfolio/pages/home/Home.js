import React from "react";
import "./home.css";
import {
  About,
  Skills,
  Contact,
  Services,
} from "../../container/importContainer";

const Home = () => {
  return (
    <div className="home_container" id="root">
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
