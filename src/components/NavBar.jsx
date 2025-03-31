import { useState, useEffect } from "react";
import { Home, User, Folder, Mail } from "lucide-react";

const NavItem = ({ icon }) => {
  return (
    <button className="flex flex-col items-center justify-center p-2 hover:text-blue-400 transition-all hover:scale-110">
      {icon}
    </button>
  );
};

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50); 
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 flex justify-center z-[8888] transition-all duration-300 ${
        showNav ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } pointer-events-none`}
    >
      <div className="flex items-center justify-around w-64 md:w-80 lg:w-96 lg:px-10 xl:w-[29rem] 2xl:w-[30rem] h-14 2xl:h-15 backdrop-blur-md text-white rounded-full shadow-lg border border-gray-700 pointer-events-auto">
        <NavItem icon={<Home size={24} />} />
        <NavItem icon={<User size={24} />} />
        <NavItem icon={<Folder size={24} />} />
        <NavItem icon={<Mail size={24} />} />
      </div>
    </div>
  );
};

export default NavBar;
