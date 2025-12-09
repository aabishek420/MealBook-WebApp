import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="flex glass bg-base-100/50 shadow-md sticky top-0 text-base-content justify-between items-center p-4  z-50">
        <div className="hover:cursor-pointer">
          <h1 className="text-primary/85 text-2xl font-bold lg:text-4xl hover:text-primary">
            MealBook
          </h1>
          <p className="text-secondary/85 text-sm font-medium hover:text-secondary ">
            Every Meal Tells a Story..
          </p>
        </div>
        <div>
          <ul className="flex gap-4 text-lg font-medium ">
            <div className="flex gap-2 justify-center items-center rounded-full p-2  hover:cursor-pointer transition group">
              <IoHome className="w-5 h-5 text-primary" />
              <li className="text-primary group-hover:font-semibold  transition-all duration-200 ">
                Home
              </li>
            </div>
            <div className="flex gap-2 justify-center items-center rounded-full p-2 hover:cursor-pointer transition group">
              <MdOutlineFavoriteBorder className="w-5 h-5 text-primary" />
              <li className="text-primary group-hover:font-semibold transition-all duration-200 ">
                Favorites
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
