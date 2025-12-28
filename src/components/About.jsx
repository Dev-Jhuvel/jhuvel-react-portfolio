import { Lightbulb } from "lucide-react";
import { useState } from "react";

function About() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="w-[75%] border border-gray-300 rounded-xl py-3 px-8 max-sm:w-full" onMouseOver={() => setIsHover(true)}  onMouseOut={() => setIsHover(false)}>
      <h1 className="text-2xl font-bold text-left pl-2 flex items-center max-sm:text-xl"><Lightbulb className={`mr-5 rounded-full ${isHover ? 'bg-amber-400' : ''}`} /> About</h1>
      <p className="text-base text-justify my-3 max-sm:text-sm">I am a <strong>Full Stack Software Engineer</strong> with a strong focus on Web Development, blending expertise in <strong>JavaScript and PHP</strong> to build dynamic, scalable, and user‑centric applications. My professional toolkit includes modern frameworks such as <strong>Laravel, and Vue,</strong> which I use to craft seamless experiences across both frontend and backend systems.</p>
      <p className="text-base text-justify mb-3 max-sm:text-sm">Lately I am expanding my knowledge and skills on by trying and using other modern technologies from what I have like React, thats why I am recreating <a className="underline hover:text-red-blue" href="https://dev-jhuvel.github.io/" target="_blank">old my portfolio</a> from basic html, css and javascript to an React project.</p>
    </div>
  );
}

export default About;
