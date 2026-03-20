import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Technology from "./Technology";
import { useTheme } from "../ThemeContext";

const ProjectCard = ({ project, projectKey }) => {
  const darkTheme = useTheme();
  const [index, setIndex] = useState(0);
  const totalImages = project.images.length;
  const image = project.images[index];
  const newKey = projectKey + 1;
  return (
    <div
      className={`project-card text-left border border-gray-300 rounded-md px-3 py-4 w-full lg:w-[49%] animate-fade-${newKey % 2 === 0 ? "left" : "right"} ${darkTheme ? "bg-[#161618]" : ""}`}
    >
      <div className="relative overflow-hidden border border-gray-300 rounded-md h-65">
        <div
          style={{ backgroundImage: `url(${project.folder}${image}.png)` }}
          className={`border border-gray-300 rounded-md h-65 bg-contain bg-no-repeat bg-center flex items-center sm:bg-cover animate-fade-left`}
        >
          {totalImages > 1 && (
            <>
              <ChevronLeft
                className={`${darkTheme ? "bg-[#1b1b1f] hover:bg-gray-200 hover:text-black  text-white" : "bg-gray-100 hover:bg-[#242429] hover:text-white  text-white "} border rounded-full p-0 size-8 ml-3`}
                onClick={() =>
                  setIndex((prev) => (prev - 1 + totalImages) % totalImages)
                }
              />
              <ChevronRight
                className={`${darkTheme ? "bg-[#1b1b1f] hover:bg-gray-200 hover:text-black  text-white" : "bg-gray-100 hover:bg-[#242429] hover:text-white  text-white "} border rounded-full p-0 size-8 ml-auto mr-3`}
                onClick={() => setIndex((prev) => (prev + 1) % totalImages)}
              />
            </>
          )}
        </div>
      </div>
      <div className="py-2">
        <h3 className="font-bold text-2xl">{project.title}</h3>
        <p className="italic">{project.description}</p>
        {project.site ? (
          <a className="underline" target="_blank" href={project.site}>
            {" "}
            Visit Site{" "}
          </a>
        ) : (
          <p>&nbsp;</p>
        )}
      </div>
      <div className="flex gap-3 mt-auto py-2">
        {project.technologies.map((tech) => (
          <Technology tech={tech} size="2xl" />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
