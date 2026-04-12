import AOS from 'aos';
import { projects } from "../../constants";
import { ChevronLeftCircle, ArrowLeft } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeContext.jsx'
import { useEffect } from 'react';


const ProjectPage = () =>{
    const darkTheme = useTheme();
    
    useEffect(() => {
        AOS.refreshHard();
    }, [darkTheme]);
    return (
       <main className="px-5 pb-5">
       <Link to="/" className="flex font-bold items-center border rounded-2xl w-30 py-1 justify-center hover:bg-black hover:text-white transition-transform duration-500"><ArrowLeft className="mr-1" /> Go Back </Link>
       <h1 className="font-bold text-2xl text-center my-3">Recent Projects</h1>
        <div className="w-full flex flex-wrap gap-5">
            {projects.sort((a,b)=> b.year - a.year).map((project, key) =>(
                <ProjectCard key={key} project={project} projectKey={key}  />
            ))}
        </div>
       </main>
    )
}

export default ProjectPage;