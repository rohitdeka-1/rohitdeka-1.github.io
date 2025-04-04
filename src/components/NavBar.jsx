import { useState, useEffect } from "react";
import { Home, User, Folder, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavItem = ({ icon, target, isRoute = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (isRoute) {
      navigate(target);
    } else {
      if (location.pathname !== "/") {
        
        navigate("/");
        setTimeout(() => {
          document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        }, 500); 
      } else {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center justify-center p-2 hover:text-blue-400 transition-all hover:scale-110"
    >
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
      <div className="flex items-center justify-around w-64 md:w-80 lg:w-96 lg:px-10 xl:w-[29rem] 2xl:w-[30rem] h-14 2xl:h-15 backdrop-blur-md text-white rounded-full shadow-lg border border-[#c0c0c065] pointer-events-auto">
        <NavItem target="/" icon={<Home size={24} />} isRoute={true} />
        <NavItem target="about" icon={<User size={24} />} />
        <NavItem target="projects" icon={<Folder size={24} />} />
        <NavItem target="/contact" icon={<Mail size={24} />} isRoute={true} />
      </div>
    </div>
  );
};

export default NavBar;
