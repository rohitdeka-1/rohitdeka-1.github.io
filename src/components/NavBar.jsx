import { Home, User, Folder, Mail } from "lucide-react"

const NavItem = ({ icon }) => {
  return (
    <button className="flex flex-col items-center justify-center p-2 hover:text-blue-400 transition-all hover:scale-110">
      {icon}
    </button>
  )
}

const NavBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-4 flex justify-center z-[8888] pointer-events-none">
      <div className="flex items-center justify-around w-64 h-14 2xl:h-16 bg-gray-900/90 backdrop-blur-md text-white rounded-full shadow-lg border border-gray-700 pointer-events-auto">
        <NavItem icon={<Home size={22} />} />
        <NavItem icon={<User size={22} />} />
        <NavItem icon={<Folder size={22} />} />
        <NavItem icon={<Mail size={22} />} />
      </div>
    </div>
  )
}

export default NavBar

