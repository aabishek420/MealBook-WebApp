import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import FoodCard from "../components/MealCard"

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/categories.php")
      .then(res => setCategories(res.data.categories || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center lg:text-left font-bold mb-6 text-primary">Categories</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map(cat => (
          <FoodCard
            key={cat.idCategory}
            id={cat.idCategory}
            title={cat.strCategory}
            image={cat.strCategoryThumb}
            navigateTo={`/category/${cat.strCategory}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
