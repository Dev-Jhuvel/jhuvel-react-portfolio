import { BriefcaseBusiness, ChevronsLeftRightEllipsis, Hamburger, Handshake, Link, FileTypeCorner, GraduationCap, BookOpenCheck } from "lucide-react";
import { useState } from "react";

function Experience(){
    const experiences = [
        {title : "Junior Software Engineer", company : "OrangeApps", year : 2025, icon: ChevronsLeftRightEllipsis},
        {title : "BS Information Technology", company : "CvSU Cavite City Campus", year : 2025, icon: GraduationCap},
        {title : "Service Crew Trainer", company : "Mcdonald's Kawit Centennial", year : 2024, icon: Hamburger},
        {title : "Technical Support (College OJT) ", company : "Municipality of Rosario Cavite", year : 2023, icon: Handshake},
        {title : "Backlink Acquisition Strategist ", company : "Trafficbet", year : 2023, icon: Link},
        {title : "CSS NCII ", company : "CNHS SHS", year : 2019, icon: BookOpenCheck},
        {title : "Student Assistant (SHS OJT) ", company : "Datacom, Rosario Cavite", year : 2019, icon: FileTypeCorner},
    ];
    const [Icon, setIcon] = useState(BriefcaseBusiness);
    return <div className="w-[30%] border border-gray-300 rounded-xl p-2 mb-5 max-sm:w-full">
        <h1 className="text-2xl font-bold text-left pl-2 flex items-center p-1 max-sm:text-xl"><Icon className="mr-5" />Experience</h1>
        <ul className="list-none w-full">
           {experiences.map((value, index) => (
            <li className="font-bold text-xs flex justify-between text-left items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-md px-3 py-1 cursor-pointer max-sm:text-sm" key={index} onMouseOver={() => setIcon(value.icon)} onMouseOut={() => setIcon(BriefcaseBusiness)} onClick={() => setIcon(value.icon)}>
                <span>{value.title}
                    <p className="font-normal">{value.company}</p>
                </span>
                <span className="text-right">{value.year}</span>
            </li>
           ))}
        </ul>
    </div>
}

export default Experience;