import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import AOS from 'aos';

function About() {
  const [isHover, setIsHover] = useState(false);
  const darkTheme = useTheme();
  
  return (
    <section
      data-aos="fade-right"
      data-aos-once={true}
      className={`${darkTheme ? "bg-[#161618]" : ""} w-[75%] border border-gray-300 rounded-xl py-3 px-8 mb-5 max-sm:w-full`}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <h1 className="text-2xl font-bold text-left pl-2 flex items-center max-sm:text-xl">
        <Lightbulb
          className={`mr-5 rounded-full ${isHover ? "bg-amber-400" : ""}`}
        />
        About
      </h1>
      <p className="text-base text-justify my-3 max-sm:text-sm">
        <span data-aos="fade-up">
          I am a <strong>Full Stack Software Engineer</strong> with a strong
          focus on <strong>Web Development</strong>, blending expertise in <strong>
          JavaScript</strong> and <strong>PHP</strong> to build dynamic,
          scalable, and user‑centric applications. My toolkit includes modern
          frameworks such as <strong>Laravel, Vue, and React</strong>, which I
          use to craft seamless experiences across both frontend and backend
          systems.
        </span>
        <br />
        <br />
        <span data-aos="fade-up">
          Beyond technical proficiency, I bring a
          <strong>problem‑solving mindset</strong> and a passion for continuous
          improvement. I thrive on architecting solutions that balance
          <strong>performance, maintainability, and intuitive design</strong>,
          ensuring every project delivers long‑term value.
        </span>
        <br />
        <br />
        <span data-aos="fade-up">
          As a <strong>Junior Software Engineer</strong>, I collaborate closely
          with managers, QA specialists, senior developers, and clients to
          deliver reliable solutions. These experiences have sharpened my
          adaptability, communication, and teamwork skills, while reinforcing
          the importance of resilience and customer‑centric thinking in every
          project I build.
        </span>
      </p>
    </section>
  );
}

export default About;
