import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Technology from "./Technology";


const ProjectCard = ({project, projectKey}) =>{
    const [index, setIndex] = useState(0);
    const totalImages = project.images.length;
    const image = project.images[index];
    const newKey = projectKey + 1;
    return (
        <div className={`text-left border border-gray-300 rounded-md px-3 py-4 w-full md:w-[45%] animate-fade-${newKey % 2 === 0 ? 'left': 'right'}`}>
            <div className="relative overflow-hidden border border-gray-300 rounded-md h-65">
                <div style={{backgroundImage: `url(${project.folder}${image}.png)`}} 
                className={`border border-gray-300 rounded-md h-65 bg-contain bg-no-repeat bg-center flex items-center sm:bg-cover animate-fade-left`}>
                    {totalImages > 1 && (
                        <>
                            <ChevronLeft className="hover:bg-black hover:text-white bg-white border rounded-full p-0 size-8 ml-3" onClick={()=> setIndex((prev) => (prev - 1 + totalImages) % totalImages)} />
                            <ChevronRight className="hover:bg-black hover:text-white bg-white border rounded-full p-0 size-8 ml-auto mr-3" onClick={()=> setIndex((prev) => (prev + 1) % totalImages)} />
                        </>
                    )}
                </div>
            </div>
            <div className="py-2">
                <h3 className="font-bold text-2xl">{project.title}</h3>
                <p className="italic">{project.description}</p>
                {project.site ? (<a className="underline" href={project.site}> Visit Site </a>) : (<p>&nbsp;</p>)}
            </div>
            <div className="flex gap-3 mt-auto py-2">
                {project.technologies.map((tech) =>(<Technology tech={tech} size="2xl" />))}
            </div>
        </div>
    )
}

export default ProjectCard;