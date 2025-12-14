import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Loader from "../ui/Loader";
import { CiYoutube } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useFavourites } from "../context/FavouriteContext";
import gsap from "gsap";

/* ===== Helper: YouTube embed URL */
const getYoutubeEmbedUrl = (url) => {
  if (!url) return null;

  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);

  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const Meal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToFavourites, isFavourite } = useFavourites();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  /* ===== Fetch Meal */
  useEffect(() => {
    setLoading(true);
    axios
      .get(`lookup.php?i=${id}`)
      .then((res) => {
        setMeal(res.data.meals?.[0] || null);
      })
      .catch(() => setMeal(null))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!meal) return; // Wait for meal data to load
    const elements = document.querySelectorAll(".js-meal-page");
    //, .js-meal-header, .js-meal-video, .js-meal-image, .js-ingredients, .js-meal-title, .js-instructions, .js-instruction-step

    gsap.fromTo(
      elements,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 0.5, stagger: 0, ease: "sine.out" }
    );
  }, [meal]); // Run when meal data is available

  /* ===== Ingredients */
  const ingredients = useMemo(() => {
    if (!meal) return [];
    const list = [];

    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ing?.trim()) {
        list.push(`${measure?.trim() || ""} ${ing.trim()}`.trim());
      }
    }
    return list;
  }, [meal]);

  /* ===== Instructions */
  const instructions = useMemo(() => {
    if (!meal?.strInstructions) return [];

    return meal.strInstructions
      .replace(/(?:^|\n)\s*(?:step\s*)?\d+\.?\s*/gi, "\n")
      .split(/\r?\n/)
      .map((step) => step.trim())
      .filter(Boolean);
  }, [meal]);

  const youtubeEmbedUrl = useMemo(
    () => getYoutubeEmbedUrl(meal?.strYoutube),
    [meal]
  );

  const favourite = isFavourite(meal?.idMeal);

  const handleFavourite = () => {
    if (!meal) return;
    addToFavourites({
      id: meal.idMeal,
      title: meal.strMeal,
      image: meal.strMealThumb,
    });
  };

  if (loading) return <Loader />;

  if (!meal) {
    return (
      <h2 className="text-center text-xl text-base-content">No Meal Found</h2>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-10 space-y-8 js-meal-page" >
      {/* ===== Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center js-meal-header">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-secondary flex items-center gap-2 w-fit"
        >
          <IoArrowBack />
          Back
        </button>

        <div className="flex flex-wrap gap-3">
          {youtubeEmbedUrl && (
            <button
              onClick={() => setShowVideo((p) => !p)}
              className="btn btn-info flex items-center gap-2"
            >
              <CiYoutube className="w-5 h-5" />
              {showVideo ? "Hide Video" : "Watch Video"}
            </button>
          )}

          <button
            onClick={handleFavourite}
            className={`btn flex items-center gap-2 ${
              favourite ? "btn-error" : "btn-primary"
            }`}
          >
            <FaHeart className="w-5 h-5" />
            {favourite ? "Remove" : "Save"}
          </button>
        </div>
      </div>

      {/* ===== Video */}
      {showVideo && youtubeEmbedUrl && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={youtubeEmbedUrl}
            title="YouTube video player"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      {/* ===== Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left */}
        <div className="md:col-span-5 space-y-6">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full rounded-2xl shadow-lg js-meal-image"
          />

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Ingredients</h3>

            <ul className="list-disc list-inside space-y-2 js-ingredients">
              {ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right */}
        <div className="md:col-span-7">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 js-meal-title">
            {meal.strMeal}
          </h1>

          <h3 className="text-xl sm:text-2xl font-bold mb-4">Instructions</h3>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
            {instructions.map((step, index) => (
              <div key={index} className="flex gap-4 js-instruction-step">
                <div className="text-primary font-bold min-w-[24px]">
                  {index + 1}
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
