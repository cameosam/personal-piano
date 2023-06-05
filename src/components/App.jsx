import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Game from "./Game";
import Freeplay from "./Freeplay";
import Learn from "./Learn";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/freeplay" element={<Freeplay />} />
        <Route path="/" element={<Freeplay />} />
      </Routes>
      <p>
        <span className="keyboard-color">keyboard keys</span> |{" "}
        <span className="note-color">piano notes</span>
      </p>
      <Footer />
    </Router>
  );
}
