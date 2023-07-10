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
      <Router>
        <Header />
        <Footer />
        <Routes>
          <Route exact path="/" element={<AboutMe />}></Route>
          <Route exact path="/becketal" element={<BeckEtAl />}></Route>
          <Route exact path="/juniorMind" element={<JuniorMind />}></Route>
          <Route exact path="/cognizant" element={<Cognizant />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
