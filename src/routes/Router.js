import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../portfolio/pages/importPages";
import { Dashboard } from "../dashboard/pages/importPages";
import {
  About,
  Contact,
  Services,
  Skills,
} from "../portfolio/container/importContainer";
import MainComponent from "../portfolio/mainComponents/MainComponent";
import DashBoardMainComponents from "../dashboard/mainComponents/mainComponents";
import ScrollToTop from "./ScrollToTop";
import { Projects } from "../dashboard/pages/importPages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <MainComponent>
              <ScrollToTop />
              <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
              </Routes>
            </MainComponent>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <DashBoardMainComponents>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="projects" element={<Projects />} />
              </Routes>
            </DashBoardMainComponents>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
