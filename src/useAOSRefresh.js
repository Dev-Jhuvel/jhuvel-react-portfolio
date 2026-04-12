import { useEffect } from "react";
import AOS from "aos";
import { useTheme } from "./ThemeContext";

export default function useAOSRefresh(dependency = null) {
  const darkTheme = useTheme();
  if (!dependency) {
    dependency = darkTheme;
  }

  useEffect(() => {
    AOS.refreshHard();
  }, [dependency]);
}
