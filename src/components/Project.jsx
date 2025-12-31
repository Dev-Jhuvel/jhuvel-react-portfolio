import { Blocks, PanelsTopBottom } from "lucide-react";
import { useState } from "react";

function Project(){
    const projects = [
        {title: "Simple Hangman Game", description: "Learn React Hooks by Creating a game", site: "https://react-typescript-hangman-1.onrender.com", icon: "react-original" },
        {title: "Realtime Chat App", description: "MERN Stack Real Time Chat App", site: "https://chat-app-dan3.onrender.com",  icon: "react-original" },
    ];
    const [hoveredProj, setHoveredProj] = useState(false);
    
    return (
        <div className="w-full border border-gray-300 rounded-xl p-2 max-sm:w-full animate-fade-left animate-delay-2000 animate-duration-500 max-sm:animate-delay-2500">
            <h1 className="text-2xl font-bold text-left pl-2 flex items-center p-1 max-sm:text-xl"><PanelsTopBottom className="mr-5" />Recent Projects</h1>
            <div className="flex flex-col gap-2">
                {projects.map((value, key) =>(
                    <a className="text-left border border-gray-300 rounded-md w-full px-3 py-4 flex"
                    href={value.site} 
                    target="_blank" 
                    key={key}
                    onMouseOver={()=> setHoveredProj(key)} 
                    onMouseOut={()=> setHoveredProj(false)} 
                    onClick={()=> setHoveredProj(key)}
                    >
                       <div className="w-[70%] max-sm:w-full">
                            <h1 className="font-bold text-xl max-sm:text-lg">{value.title}</h1>
                            <p className="italic text-base max-sm:text-sm">{value.description}</p>
                            <p className="text-base max-sm:text-sm">{value.site.replace("https://", "")}</p>
                       </div>
                       <div className="w-[30%] text-center vertical align-middle max-sm:hidden">
                            <i className={`devicon-${value.icon} ${hoveredProj === key ? 'colored' : ''} text-7xl`}></i>
                       </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Project;