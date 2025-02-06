const Navbar = () => {
  return (
    <div className="fixed left-19 right-20 w-[90%] z-10">
      <div className="navbar font-poppins h-[70px] bg-black rounded-b-2xl px-16 flex shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-1 shadow"
            >
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Rohit Deka</a>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl font-bold">
              <li><a className="hover:text-[#20a3cf]">About</a></li>
              <li><a className="hover:text-[#20a3cf]">Projects</a></li>
              <li><a className="hover:text-[#20a3cf]">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
