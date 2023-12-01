import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "./navigation/Menu";
import Menu2 from "./components/Menu2";
import Welcome from "./components/Welcome";
import "./App.css";
import Bio from "./components/Bio";
import SkillStack from "./components/SkillStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import bird from "./images/bird.svg";

const App = () => {
  return (
    <div>
      <Router>
        <div className="menustyle">
          <Menu2 />
        </div>

        <div className="flex-container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/skill-stack" element={<SkillStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

      <div className="footer">
        <Footer />
      </div>

      {/* <div className="container">
        <div className="bird-container">
          <div
            className="bird"
            style={{ backgroundImage: `url(${bird})` }}
          ></div>
        </div>

        <div className="bird-container2">
          <div className="bird2"></div>
        </div>
      </div> */}
    </div>
  );
};

export default App;
