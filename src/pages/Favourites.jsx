import React from "react";
import { useFavourites } from "../context/FavouriteContext";
import MealCard from "../components/MealCard";

const Favourites = () => {
  const { favourites } = useFavourites();
  
  



  return (
   <div className="p-10">
        <h1 className='text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-primary font-bold mb-5'>
       
        Favourites
      </h1>

      {favourites.length === 0 ? (
        <p className="text-center text-base-content/80">No favourites yet.</p>
      ) : (
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favourites.map((meal) => (
            <>
            <div key={meal.idCategory}>
                <MealCard category={meal} />
            </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
