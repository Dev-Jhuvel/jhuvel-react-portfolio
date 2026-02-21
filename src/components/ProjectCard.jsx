import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const ProjectCard = ({project}) =>{
    const [index, setIndex] = useState(0);
    const totalImages = project.images.length;
    const image = project.images[index];
    console.log(image);
    return (
        <div className="text-left border border-gray-300 rounded-md px-3 py-4 w-full md:w-[45%]">
            <div style={{backgroundImage: `url(${project.folder}${image}.png)`}} className="border border-gray-300 rounded-md h-65 bg-cover flex items-center">
                {totalImages > 1 && (
                    <>
                        <ChevronLeft className="bg-white rounded-full p-0 size-8 ml-5" onClick={()=> setIndex((prev) => (prev - 1 + totalImages) % totalImages)} />
                        <ChevronRight className="bg-white rounded-full p-0 size-8 ml-auto mr-5" onClick={()=> setIndex((prev) => (prev + 1) % totalImages)} />
                    </>
                )}
            </div>
            <div>
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="italic">{project.description}</p>
                <a className="underline text-blue-500" href={project.site}>{project.site}</a>
            </div>
        </div>
    )
}

export default ProjectCard;