import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import Loader from "../ui/Loader";
import FoodCard from "../components/MealCard";
import { IoArrowBack } from "react-icons/io5";

const CategoryMeal = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();



  useEffect(() => {
    axios.get(`filter.php?c=${category}`)
      .then(res => setMeals(res.data.meals || []))
      .finally(() => setLoading(false));
  }, [category]);


  if (loading) return <Loader />;



  return (
    <div className="p-10">

      <div onClick={()=>navigate(-1)} className="flex  items-center gap-2 group cursor-pointer">
        <IoArrowBack className="h-6 w-10 mb-7 group-hover:-translate-x-2 text-primary transition-all duration-200 " />
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left mb-7 font-bold  text-primary group-hover:translate-x-2 transition-all duration-200">
        {category} Meals
      </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {meals.map(meal => (
          <FoodCard
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            image={meal.strMealThumb}
            navigateTo={`/meal/${meal.idMeal}`}
            favouriteId={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryMeal;
