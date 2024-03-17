import { CiSearch } from "react-icons/ci";
const NavigationBer = () => {
  return (
    <>
      <div>
        <div className="navbar bg-base-100 mt-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-8">
            <div className="  flex items-center bg-slate-100 w-24 md:w-auto rounded-3xl p-2 ">
              <CiSearch className="text-xl text-[#150B2BB3] ml-4" />
              <input
                type="text"
                placeholder=" Search"
                className=" outline-none focus:border-0 bg-slate-100 rounded-3xl "
              />
            </div>

            <div className="w-10 rounded-full">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/HYfJ7NL/download-4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBer;
