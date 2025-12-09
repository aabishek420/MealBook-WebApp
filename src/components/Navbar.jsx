import React from "react";
import { IoHome } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <nav className="flex bg-base-100 sticky top-0 text-base-content justify-between items-center p-4  z-50">
        <div>
          <h1 className="text-primary text-2xl font-bold lg:text-4xl">
            MealBook
          </h1>
          <p className="text-secondary text-sm font-medium ">
            Every Meal Tells a Story..
          </p>
        </div>
        <div>
          <ul className="flex gap-4 text-lg font-medium">
            <div className="flex gap-2 justify-center items-center rounded-full p-2">
              <IoHome className="w-5 h-5 text-primary" />
              <li className="text-primary hover:font-semibold hover:cursor-pointer transition ">
                Home
              </li>
            </div>
            <div className="flex gap-2 justify-center items-center rounded-full p-2">
              <MdOutlineFavoriteBorder className="w-5 h-5 text-primary" />
              <li className="text-primary hover:font-semibold hover:cursor-pointer transition">
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
