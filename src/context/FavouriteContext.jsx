import React, { createContext, useContext, useEffect, useState } from "react";

export const FavouritesContext = createContext(null);

// Custom hook
export const useFavourites = () => useContext(FavouritesContext);

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // ---- helpers ----
  const normalizeId = (id) => String(id);

  const isFavourite = (id) => {
    const favId = normalizeId(id);
    return favourites.some((item) => item.id === favId);
  };

  const addToFavourites = ({ id, title, image }) => {
    const favId = normalizeId(id);

    if (isFavourite(favId)) {
      removeFromFavourites(favId);
      return;
    }

    setFavourites((prev) => [
      ...prev,
      {
        id: favId,
        title,
        image,
      },
    ]);
  };

  const removeFromFavourites = (id) => {
    const favId = normalizeId(id);
    setFavourites((prev) =>
      prev.filter((item) => item.id !== favId)
    );
  };

  // ---- persistence ----
  useEffect(() => {
    const stored = localStorage.getItem("favourites");
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
