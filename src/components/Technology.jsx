import { useState } from "react";
import AOS from 'aos';
import useAOSRefresh from "../useAOSRefresh";

const Technology = ({tech, size, id = 0}) =>{
    const [hoveredTech, setHoveredTech] = useState(false);
    useAOSRefresh(hoveredTech);
    return (
        <i 
            data-aos="flip-up"
            data-aos-delay={200 * id}
            className={`text-${size} transition-transform duration-500 ease-in-out hover:scale-130 max-sm:text-2xl devicon-${tech} ${hoveredTech ? 'colored': ''}`}
            onMouseOver={()=> setHoveredTech(true)} 
            onMouseOut={()=> setHoveredTech(false)}
            ></i>
    )
}

export default Technology;