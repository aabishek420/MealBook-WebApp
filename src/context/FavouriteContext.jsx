import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react';


export const FavouritesContext = createContext();


// Custom Hook
export const useFavourites = () => useContext(FavouritesContext);


const FavouritesProvider = ({children}) => {

    const [favourites, setFavourites] = useState([]);

  const addToFavourites = (meal) => {
  if (isFavourite(meal.idCategory)) {
    removeFromFavourites(meal.idCategory);
    return;
  }
  setFavourites((prev) => [...prev, meal]);
};

const removeFromFavourites = (mealId) => {
  setFavourites((prev) =>
    prev.filter((meal) => meal.idCategory !== mealId)
  );
};

const isFavourite = (mealId) => {
  return favourites.some((meal) => meal.idCategory === mealId);
};


    useEffect(() =>{
        const storedFavourites = localStorage.getItem("favourites");
        if(storedFavourites){
            setFavourites(JSON.parse(storedFavourites));
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);


  return (
    <FavouritesContext.Provider value={{favourites, addToFavourites, removeFromFavourites, isFavourite}}>
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesProvider
