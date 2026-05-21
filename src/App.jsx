import "./App.css";
import { ThemeProvider } from "./ThemeContext.jsx";
import AppContent from "./AppContext.jsx";
import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect } from "react";
import { useBreakpoints } from "./useBreakpoints"

function App() {
  const { isMobile } = useBreakpoints();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: !isMobile,
    });
  }, [isMobile]);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
