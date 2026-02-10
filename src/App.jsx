import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Introduction from "./components/Introduction.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
// import Experience from './components/Experience.jsx'
// import TechStack from './components/TechStack.jsx'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const Experience = React.lazy(() => import("./components/Experience.jsx"));
  const TechStack = React.lazy(() => import("./components/TechStack.jsx"));

  return (
    <div className="w-full">
      <Introduction />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/projects" element={<ProjectPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
