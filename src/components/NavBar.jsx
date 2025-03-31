import React from "react";
import { Home, User, Folder, Mail } from "lucide-react";

const NavBar = () => {
  return (
    <div className="fixed bottom-4 2xl:bottom-9 py-6 px-6 left-1/2 transform -translate-x-1/2 text-white flex items-center justify-around w-64 h-12 rounded-full shadow-lg z-50 border border-gray-700">
      <NavItem icon={<Home size={20} />} label="Home" />
      <NavItem icon={<User size={20} />} label="About" />
      <NavItem icon={<Folder size={20} />} label="Projects" />
      <NavItem icon={<Mail size={20} />} label="Connect" />
    </div>
  );
};

const NavItem = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center justify-center p-2 hover:text-blue-400 transition">
      {icon}
     
    </button>
  );
};

export default NavBar;
