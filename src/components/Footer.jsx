import { Blocks } from "lucide-react";
import { useTheme } from "../ThemeContext";

function Footer(){
    const darkTheme = useTheme();
    return (
        <section className={`${darkTheme ? 'bg-[#161618]' : ''} w-full border border-gray-300 rounded-xl p-2 max-sm:w-full animate-fade-up animate-delay-2500 animate-duration-500 max-sm:animate-delay-3000 mt-5`}>
            <h5 className="text-lg text-center pl-2 p-1 max-sm:text-sm">
                © 2025 Jhuvel Colina. All rights reserved.
            </h5>
        </section>
    )
}

export default Footer;