import "./app.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./about/about";
import Background from "./background/background";
import Contact from "./contact/contact";
import Nav from "./nav";
import PlayerStats from "./playerStats";
import Projects from "./projects/projects";
import Skills from "./skills/skills";

const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;
