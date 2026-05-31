import { useState } from "react";
import AOS from "aos";
import useAOSRefresh from "../useAOSRefresh";

const Technology = ({ tech, size, id = 0 }) => {
  const [hoveredTech, setHoveredTech] = useState(false);
  useAOSRefresh(hoveredTech);
  const technology = `devicon-${tech} ${hoveredTech ? "colored" : ""}`;
  const delay = 200 * id;
  return (
    <div data-aos="flip-up" data-aos-delay={delay} className="inline-block">
      <i
        className={`text-${size} transition-transform duration-500 ease-in-out hover:scale-130 max-sm:text-2xl ${technology} `}
        onMouseOver={() => setHoveredTech(true)}
        onMouseOut={() => setHoveredTech(false)}
      ></i>
    </div>
  );
};

export default Technology;
