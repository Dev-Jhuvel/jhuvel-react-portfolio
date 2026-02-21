import { useState } from "react";

const Technology = ({tech, size}) =>{
    const [hoveredTech, setHoveredTech] = useState(false);
    
    return (
        <i 
            className={`text-${size} transition-transform duration-500 ease-in-out hover:scale-130 max-sm:text-2xl devicon-${tech} ${hoveredTech ? 'colored': ''}`}
            onMouseOver={()=> setHoveredTech(true)} 
            onMouseOut={()=> setHoveredTech(false)}
            ></i>
    )
}

export default Technology;