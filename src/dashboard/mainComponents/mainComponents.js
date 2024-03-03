import React from "react";
import { Sidebar, Navbar } from "../components/importComponents";

const MainComponents = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default MainComponents;
