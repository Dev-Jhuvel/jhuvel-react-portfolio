import { useEffect, useState } from "react";
import { projects } from "../../constants";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () =>{
    const [hoveredProj, setHoveredProj] = useState(false);
    
    return (
       <>
       <h1 className="font-bold text-2xl text-left my-3">Recent Projects</h1>
        <div className="w-full flex flex-wrap gap-5 md:">
            {projects.map((project, key) =>{
                return (
                <ProjectCard key={key} project={project}  />
                )
                // <a className="text-left border border-gray-300 rounded-md px-3 py-4 flex w-full md:w-[45%] "
                //     href={project.site} 
                //     target="_blank" 
                //     key={key}
                //     onMouseOver={()=> setHoveredProj(key)} 
                //     onMouseOut={()=> setHoveredProj(false)} 
                //     onClick={()=> setHoveredProj(key)}
                //     >
                //        <div className="w-[70%] max-sm:w-full">
                //             <h1 className="font-bold text-xl max-sm:text-lg">{project.title}</h1>
                //             <p className="italic text-base max-sm:text-sm">{project.description}</p>
                //             <p className="text-base max-sm:text-sm">{project.site.replace("https://", "")}</p>
                //        </div>
                //        <div className="w-[30%] text-center vertical align-middle max-sm:hidden">
                //             <i className={`devicon-${project.icon} ${hoveredProj === key ? 'colored' : ''} text-7xl`}></i>
                //        </div>
                // </a>
            })}
        </div>
       </>
    )
}

export default ProjectPage;