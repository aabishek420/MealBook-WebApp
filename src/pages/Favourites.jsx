import React from "react";
import { useFavourites } from "../context/FavouriteContext";
import FoodCard from "../components/MealCard";
import { GiChickenOven } from "react-icons/gi";
import { useNavigate } from "react-router-dom";


const Favourites = () => {
  const { favourites } = useFavourites();
 const navigate = useNavigate();

  return (
    <div className="p-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-primary font-bold mb-5">
        Favourites
      </h1>

      {favourites.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-2">
         <GiChickenOven className="w-5 h-5 md:w-40 md:h-40 text-5xl"/>
          <h3 className="text-center text-base-content/80">No favourites yet.</h3>
          <p className="text-center text-base-content/80">Start exploring and save your favorite meals here to cook them later!</p>
          <button onClick={()=>navigate('/')}  className="btn btn-primary rounded-3xl transition hover:-translate-y-1 duration-all">Explore Meals</button>
        </div>
      ) : (
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favourites.map((item) => (
            <FoodCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              navigateTo={`/meal/${item.id}`}
              favouriteId={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
