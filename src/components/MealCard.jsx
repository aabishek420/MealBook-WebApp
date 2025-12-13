import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useFavourites } from "../context/FavouriteContext";

const FoodCard = ({ id, title, image, navigateTo, favouriteId }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const { addToFavourites, isFavourite } = useFavourites();

  useGSAP(() => {
    gsap.to(cardRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  });

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(navigateTo)}
      className="opacity-0 translate-y-5 bg-base-100 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100 relative"
    >
      {favouriteId && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            addToFavourites({
              id: favouriteId,
              title,
              image,
            });
          }}
          className="absolute top-2 right-4 z-10"
        >
          <FaHeart
            className={`w-5 h-5 ${
              isFavourite(favouriteId) ? "text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      )}

      <div className="bg-base-300 rounded-2xl overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h3 className="text-lg font-bold text-center truncate">{title}</h3>
    </div>
  );
};

export default FoodCard;
