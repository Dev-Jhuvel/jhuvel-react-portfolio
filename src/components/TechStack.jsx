import { Blocks, GitGraph, LayoutDashboard, Server } from "lucide-react";
import { useState } from "react";

function TechStack(){
    const technologies = {
        "Frontend" : [
            {title: "Javascript", icon: "javascript-plain"},
            {title: "JQuery", icon: "jquery-plain"},
            {title: "Vue.js", icon: "vuejs-plain"},
            {title: "React.js", icon: "react-original"},
            {title: "Tailwind CSS", icon: "tailwindcss-original"},
            {title: "Bootsrap", icon: "bootstrap-plain"},
        ],
        "Backend" : [
            {title: "PHP", icon: "php-plain"},
            {title: "Laravel", icon: "laravel-original"},
            {title: "MySQL", icon: "mysql-original"},
            {title: "Node.js", icon: "nodejs-plain"},
        ],
        "DevOps" : [
            {title: "Git Version Control", icon: "git-plain"},
            {title: "GitHub", icon: "github-original"},
        ],
    }
    // const categories = {
    //         'Frontend' : LayoutDashboard,
    //         'Backend' : Server,
    //         'DevOps' : GitGraph,
    //     }
    const [hoveredTech, setHoveredTech] = useState(false);
        
    return (
        <div className="w-[70%] border border-gray-300 rounded-xl p-2 max-sm:w-full animate-fade-right animate-delay-2000 animate-duration-500 max-sm:animate-delay-2500">
            <h1 className="text-2xl font-bold text-left pl-2 flex items-center p-1 max-sm:text-xl"><Blocks className="mr-5" />Tech Stack</h1>
            {Object.entries(technologies).map(([category, values]) => (
                <div key={category}>
                    <h3 className="font-bold text-left my-2 max-sm:text-lg"> {category}</h3>
                    <div className="flex gap-4 max-sm:flex-wrap">
                        {Object.entries(values).map(([key, value]) =>(
                            <span className="first:ml-10  rounded-xs px-[3px] transition-transform duration-500 ease-in-out hover:scale-130 max-sm:first:ml-0" onMouseOver={()=> setHoveredTech(`${category}-${key}`)} onMouseOut={()=> setHoveredTech(false)} onClick={()=> setHoveredTech(`${category}-${key}`)} key={key}>
                                {/* {value.title} */}
                                <i className={`text-4xl  max-sm:text-2xl devicon-${value.icon} ${hoveredTech === `${category}-${key}` ? 'colored': ''}`}></i>
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TechStack;