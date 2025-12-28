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
      <div className="size-35 mr-8 max-sm:size-30 max-sm:mr-4">
        <img className="w-full h-full m-auto rounded-2xl transition duration-300 ease-in-out cursor-pointer" src={profile} onMouseOver={() => setProfile(profile_2)} onMouseOut={() => setProfile(profile_1)} onClick={() => setProfile(profile_3)} />
      </div>
      <div>
        <h1 className="text-left font-bold text-4xl flex items-center max-sm:text-3xl">
          Jhuvel Colina
          <BadgeCheck color="#1d9bf0" className="mx-3 size-5" />
        </h1>
        <p className="text-left flex items-center max-sm:text-base">
          <MapPin className="mx-2 size-5 max-sm:size-4" /> General Trias Cavite
        </p>
        <p className="text-left text-xl flex items-center mt-1 mb-2 max-sm:text-lg">
          <BriefcaseBusiness className="mx-2 size-6 max-sm:size-5" /> Junior Web Developer
        </p>
        <p className="text-left flex items-center px-2 py-1 rounded-xl bg-[#1d9bf0] text-white font-bold hover:bg-gray-300 hover:text-black">
          <Mail className="mr-2 ml-1 size-5 max-sm:size-4" /> jhuvelcolina@gmail.com 
          <span className="max-sm:hidden"> / devjhuvel@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default Introduction;
