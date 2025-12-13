import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Loader from "../ui/Loader";
import FoodCard from "../components/MealCard";

const CategoryMeal = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    axios.get(`filter.php?c=${category}`)
      .then(res => setMeals(res.data.meals || []))
      .finally(() => setLoading(false));
  }, [category]);


  if (loading) return <Loader />;



  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        {category} Meals
      </h1>

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
