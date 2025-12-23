import { Lightbulb } from "lucide-react";

function About() {
  return (
    <div className="w-[75%] border border-gray-300 rounded-xl py-3 px-8">
      <h1 className="text-2xl font-bold text-left pl-2 flex items-center"><Lightbulb className="mr-5" /> About</h1>
      <p className="text-justify my-3">I am a <strong>Full Stack Software Engineer</strong> with a strong focus on Web Development, blending expertise in <strong>JavaScript and PHP</strong> to build dynamic, scalable, and user‑centric applications. My professional toolkit includes modern frameworks such as <strong>Laravel, and Vue,</strong> which I use to craft seamless experiences across both frontend and backend systems.</p>
      <p className="text-justify mb-3">Lately I am expanding my knowledge and skills on by trying and using other modern technologies from what I have like React, thats why I am recreating <a className="underline hover:text-red-blue" href="https://dev-jhuvel.github.io/" target="_blank">old my portfolio</a> from basic html, css and javascript to an React project.</p>
    </div>
  );
}

export default About;
