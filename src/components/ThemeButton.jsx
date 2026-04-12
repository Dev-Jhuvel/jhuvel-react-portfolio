import { useTheme, useThemeUpdate } from "../ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

function ThemeButton(){
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    return (
        <button
          onClick={toggleTheme}
          className={`absolute right-3 top-5 px-1.5 md:px-2 py-1 border-2 rounded-full 
              transition-colors duration-500 ease-in-out
              ${darkTheme ? "bg-[#161618] text-white" : "bg-gray-100 text-black"}`}
        >
          <span className="flex justify-center items-center gap-2 px-1 font-bold relative w-5 md:w-24 h-6 overflow-hidden">
            <span
              className={`absolute flex gap-x-3 transition-all duration-500 ease-in-out transform
        ${darkTheme ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
            >
              <MoonIcon /> <span className="hidden md:block">Dark</span>
            </span>
            <span
              className={`absolute flex gap-x-3 transition-all duration-500 ease-in-out transform
        ${darkTheme ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"}`}
            >
              <SunIcon /> <span className="hidden md:block">Light</span>
            </span>
          </span>
        </button>
    )
}

export default ThemeButton;