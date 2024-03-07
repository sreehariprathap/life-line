import React, { useState } from "react";
import {
  RectangleStackIcon,
  UserIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`flex flex-col gap-5 bg-slate-300 rounded-md p-4 transition-all duration-300 ${
        isExpanded ? "w-96" : "w-32"
      }`}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    >
      <SidebarItem
        icon={<RectangleStackIcon className=" w-8" />}
        label="Appointments"
      />
      <SidebarItem
        icon={<UserIcon className=" w-8" />}
        label="Users"
      />
      <SidebarItem
        icon={<PencilSquareIcon className=" w-8" />}
        label="Edit"
      />
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="flex gap-5 flex-col justify-center items-center group hover:text-[#4461F2] transition-all duration-300">
      {icon}
      <p className="text-sm group-hover:font-medium">{label}</p>
    </div>
  );
};

export default Sidebar;
