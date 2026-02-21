import { useEffect, useState } from "react";
import { projects } from "../../constants";
import { ChevronLeftCircle, ArrowLeft } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const ProjectPage = () =>{
    const [hoveredProj, setHoveredProj] = useState(false);
    
    return (
       <>
       <Link to="/" className="flex font-bold items-center border rounded-2xl w-30 py-1 justify-center"><ArrowLeft className="mr-1" /> Go Back </Link>
       <h1 className="font-bold text-2xl text-left my-3">Recent Projects</h1>
        <div className="w-full flex flex-wrap gap-5">
            {projects.sort((a,b)=> b.year - a.year).map((project, key) =>{
                return (
                <ProjectCard key={key} project={project} projectKey={key}  />
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