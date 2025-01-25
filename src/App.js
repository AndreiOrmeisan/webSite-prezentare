import "./App.css";

import React, { Component } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import BeckEtAl from "./components/BeckEtAl/BeckEtAl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JuniorMind from "./components/JuniorMind/JuniorMind";
import Cognizant from "./components/Cognizant/Cognizant";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <Header />
          <div className="content-container">
            <Routes>
              <Route exact path="/" element={<AboutMe />} />
              <Route exact path="/becketal" element={<BeckEtAl />} />
              <Route exact path="/juniorMind" element={<JuniorMind />} />
              <Route exact path="/cognizant" element={<Cognizant />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
