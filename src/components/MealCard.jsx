import React from "react";

const MealCard = ({ category }) => {
  return (
    <>
      <div
        key={category.idCategory}
        className="bg-base-100 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-gray-100"
      >
        <div className="relative bg-base-300  rounded-2xl overflow-hidden mb-4">
          <img
            src={category.strCategoryThumb}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt={category.strCategory}
          />
        </div>

        <h3 className="text-lg font-bold text-center mb-1 truncate">
          {category.strCategory}
        </h3>
      </div>
    </>
  );
};

export default MealCard;
