import { useState } from "react";
// import profile from "../images/profile.jpg";
import profile_1 from "../images/profile_1.png";
import profile_2 from "../images/profile_2.png";
import profile_3 from "../images/profile_3.png";
import { MapPin, BriefcaseBusiness, BadgeCheck, Mail } from "lucide-react";
function Introduction() {
    const [profile, setProfile] = useState(profile_1);
  return (
    <div className="w-full flex rounded-xl px-2 py-1 my-5">
      <div className="size-30 mr-8">
        <img alt="" className="size-30 m-auto rounded-2xl transition duration-300 ease-in-out" src={profile} onMouseOver={() => setProfile(profile_2)} onMouseOut={() => setProfile(profile_1)} onClick={() => setProfile(profile_3)} />
      </div>
      <div>
        <h1 className="text-left font-bold text-4xl flex items-center">
          Jhuvel Colina{" "}
          <BadgeCheck color="#1d9bf0" size={20} className="mx-3" />
        </h1>
        <p className="text-left flex items-center">
          <MapPin size={15} className="mx-2" /> General Trias Cavite
        </p>
        <p className="text-left text-xl flex items-center mt-1 mb-2">
          <BriefcaseBusiness size={20} className="mx-2" /> Junior Software
          Engineer (Web Developer)
        </p>
        <p className="text-left flex items-center px-2 py-1 rounded-xl bg-[#1d9bf0] text-white font-bold">
          <Mail size={18} className="mr-2 ml-1" /> jhuvelcolina@gmail.com /
          devjhuvel@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Introduction;
