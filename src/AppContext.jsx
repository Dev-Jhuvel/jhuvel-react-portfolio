import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./components/Introduction.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { ThemeProvider, useTheme } from "./ThemeContext.jsx";

function AppContent() {
  const darkTheme = useTheme();
  return (
    <div
      className={`w-full relative ${darkTheme ? "bg-[#1b1b1f] text-white" : "bg-white text-black"}`}
    >
      <main className="max-w-screen-xl m-auto">
        <Introduction />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default AppContent;
