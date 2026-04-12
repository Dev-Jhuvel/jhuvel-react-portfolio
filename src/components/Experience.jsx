import {
  BriefcaseBusiness,
  ChevronsLeftRightEllipsis,
  Hamburger,
  Handshake,
  Link,
  FileTypeCorner,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";
import { useState } from "react";
import { experiences } from "../../constants";
import { useTheme } from "../ThemeContext";
import useAOSRefresh from "../useAOSRefresh";

function Experience() {
  const darkTheme = useTheme();
  useAOSRefresh();
  const [Icon, setIcon] = useState(BriefcaseBusiness);
  return (
    <section
      data-aos="fade-up"
      data-aos-delay={500}
      className={`${darkTheme ? "bg-[#161618]" : ""} w-[30%] border border-gray-300 rounded-xl p-2 mb-5 max-sm:w-full`}
    >
      <h1 className="text-2xl font-bold text-left pl-2 flex items-center p-1 max-sm:text-xl">
        <Icon className="mr-5" />
        Experience
      </h1>
      <ul className="list-none w-full">
        {experiences.map((value, index) => (
          <li
            data-aos="fade-left"
            data-aos-delay={1000}
            className={`font-bold text-xs flex justify-between text-left items-center my-2 rounded-md px-3 py-1 cursor-pointer max-sm:text-sm 
            ${darkTheme ? "bg-[#1b1b1f] hover:bg-[#242429] text-white" : "bg-gray-100 hover:bg-gray-200 text-black"}`}
            key={index}
            onMouseOver={() => setIcon(value.icon)}
            onMouseOut={() => setIcon(BriefcaseBusiness)}
            onClick={() => setIcon(value.icon)}
          >
            <span>
              {value.title}
              <p className="font-normal">{value.company}</p>
            </span>
            <span className="text-right">{value.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
