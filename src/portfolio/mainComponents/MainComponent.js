import React from "react";
import {
  Chatbot,
  Footer,
  Header,
  Navbar,
} from "../components/importComponents";

const MainComponent = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Header />
      <div>{children}</div>
      <Chatbot />
      <Footer />
    </div>
  );
};

export default MainComponent;
