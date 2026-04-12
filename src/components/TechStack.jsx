import { Blocks, GitGraph, LayoutDashboard, Server } from "lucide-react";
import { technologies } from "../../constants";
import Technology from "./Technology";
import { useTheme } from "../ThemeContext";

function TechStack(){
    const darkTheme = useTheme();

    return (
        <section 
            data-aos="fade-left"
            data-aos-delay={500}
            className={`${darkTheme ? 'bg-[#161618]' : ''} w-full border border-gray-300 rounded-xl py-2 px-4 max-sm:w-full`}>
            <h1 className="text-2xl font-bold text-left pl-2 flex items-center p-1 max-sm:text-xl"><Blocks className="mr-5" />Tech Stack</h1>
            {Object.entries(technologies).map(([category, values]) => (
                <div key={category}>
                    <h3 className="font-bold text-left my-2 max-sm:text-lg"> {category}</h3>
                    <div className="flex gap-4 max-sm:flex-wrap max-sm:gap-3 ml-10">
                        {Object.entries(values).map(([key, value]) =>(
                            <Technology key={key} id={key} tech={value.icon} size="4xl" />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default TechStack;