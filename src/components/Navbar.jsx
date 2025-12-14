import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [favCount, setFavCount] = useState(0);
  const navigate = useNavigate();


  // Load favourites count
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavCount(favs.length);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="glass bg-base-100/50 shadow-md sticky top-0 z-50 p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div onClick={()=>navigate("/")} className="cursor-pointer ">
          <h1 className="text-primary/85 text-2xl font-bold lg:text-4xl">
            MealBook
          </h1>
          <p className="text-secondary/85 text-sm font-semibold">
            Every Meal Tells a Story..
          </p>
        </div>

        {/* //Desktop */}
        <ul className="hidden md:flex gap-4 text-lg font-medium">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${"flex gap-2 items-center px-4 py-2 rounded-full transition cursor-pointer"} ${
                  isActive ? "text-primary font-bold" : "text-primary/70"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`p-2 rounded-full transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-primary/10"
                    }`}
                  >
                    <IoHome className="text-lg" />
                  </span>
                  <span>Home</span>
                </>
              )}
            </NavLink>
          </li>

          {/* //Favourites */}
          <li>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                `${"flex gap-2 items-center px-4 py-2 rounded-full transition cursor-pointer"} ${
                  isActive ? "text-primary font-bold" : "text-primary/70"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`relative p-2 rounded-full transition ${
                      isActive ? "bg-primary text-white" : "hover:bg-primary/10"
                    }`}
                  >
                    <MdOutlineFavoriteBorder className="text-lg" />

                    {/* Badge */}
                    {favCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full">
                        {favCount}
                      </span>
                    )}
                  </span>

                  <span>Favourites</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>

        {/* //Toggle */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX className="bg-base-300  rounded-sm hover:bg-base-200"/> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-4 top-15 bg-white rounded-2xl shadow-xl p-3 w-48">
          <ul className="flex flex-col gap-2 text-base font-medium">
            {/* Home */}
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-base-content hover:bg-base-200"
                  }`
                }
              >
                <IoHome className="text-lg" />
                <span>Home</span>
              </NavLink>
            </li>

            {/* Favourites */}
            <li>
              <NavLink
                to="/favourites"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-base-content hover:bg-base-200"
                  }`
                }
              >
                <MdOutlineFavoriteBorder className="text-lg" />
                <span>Favorites</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
