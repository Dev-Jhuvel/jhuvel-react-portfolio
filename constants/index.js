import { BriefcaseBusiness, ChevronsLeftRightEllipsis, Hamburger, Handshake, Link, FileTypeCorner, GraduationCap, BookOpenCheck } from "lucide-react";

const experiences = [
    {title : "Junior Software Engineer", company : "OrangeApps", year : 2025, icon: ChevronsLeftRightEllipsis},
    {title : "BS Information Technology", company : "CvSU Cavite City Campus", year : 2025, icon: GraduationCap},
    {title : "Service Crew Trainer", company : "Mcdonald's Kawit Centennial", year : 2024, icon: Hamburger},
    {title : "Technical Support (College OJT) ", company : "Municipality of Rosario Cavite", year : 2023, icon: Handshake},
    {title : "Backlink Acquisition Strategist ", company : "Trafficbet", year : 2023, icon: Link},
    {title : "CSS NCII ", company : "CNHS SHS", year : 2019, icon: BookOpenCheck},
    {title : "Student Assistant (SHS OJT) ", company : "Datacom, Rosario Cavite", year : 2019, icon: FileTypeCorner},
];

const projects = [
    {title: "Velvet Pour", description: "Landing Page Created with React and GSAP ", site: "https://gsap-react.onrender.com/", icon: "react-original" },
    {title: "Realtime Chat App", description: "MERN Stack Real Time Chat App", site: "https://chat-app-dan3.onrender.com",  icon: "react-original" },
    {title: "Simple Hangman Game", description: "Learn React Hooks by Creating a game", site: "https://react-typescript-hangman-1.onrender.com", icon: "react-original" },
    {title: "Content Management System", description: "CMS with HTML, CSS, PHP, Vanila PHP and Bootsrap.", site: "https://homebrew.free.nf/",  icon: "php-plain" },
    {title: "Ideas", description: "The Idea Project is a clone of the website Twitter/X. ", site: "http://ideasdotcomdotph.infinityfreeapp.com/", icon: "laravel-original" },
];

const technologies = {
    "Frontend" : [
        {title: "Javascript", icon: "javascript-plain"},
        {title: "JQuery", icon: "jquery-plain"},
        {title: "Vue.js", icon: "vuejs-plain"},
        {title: "React.js", icon: "react-original"},
        {title: "Tailwind CSS", icon: "tailwindcss-original"},
        {title: "Bootsrap", icon: "bootstrap-plain"},
    ],
    "Backend" : [
        {title: "PHP", icon: "php-plain"},
        {title: "Laravel", icon: "laravel-original"},
        {title: "MySQL", icon: "mysql-original"},
        {title: "Node.js", icon: "nodejs-plain"},
    ],
    "DevOps" : [
        {title: "Git Version Control", icon: "git-plain"},
        {title: "GitHub", icon: "github-original"},
    ],
}


export {
    experiences,
    projects,
    technologies
}