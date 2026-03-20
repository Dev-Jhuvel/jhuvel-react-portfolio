import "./App.css";
import { ThemeProvider} from "./ThemeContext.jsx";
import AppContent from "./AppContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App
