import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const navigate = useNavigate();

  /* ================= STATE ================= */
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH LOGIC ================= */
  const fetchMeals = async () => {
    setLoading(true);

    try {
      let url = "";

      if (query.trim()) {
        url = `search.php?s=${query.trim()}`;
      } else if (category) {
        url = `filter.php?c=${category}`;
      } else if (area) {
        url = `filter.php?a=${area}`;
      } else {
        setMeals([]);
        setLoading(false);
        return;
      }

      const res = await axios.get(url);
      setMeals(res.data.meals || []);
    } catch (error) {
      console.error("Search error:", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  /* ================= EFFECT ================= */
  useEffect(() => {
    fetchMeals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, category, area]);

  /* ================= UI ================= */
  return (
    <div className="space-y-8">
      {/* ===== Title ===== */}
      <h1 className="text-3xl font-bold text-primary">
        Search Meals
      </h1>

      {/* ===== Controls ===== */}
      <div className="flex gap-6">
        <div className="flex gap-2 justify-center items-center  input w-full border-none rounded-lg ">
            <CiSearch className="w-5 h-5" />
        
        <input
          type="text"
          placeholder="Search by meal name & Press Enter ..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCategory("");
            setArea("");
          }}
          className=""
        />
        </div>

        {/* Filter by category */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setQuery("");
            setArea("");
          }}
          className="select border-none rounded-lg  w-full"
        >
          <option value="">Select Category</option>
          <option value="Beef">Beef</option>
          <option value="Chicken">Chicken</option>
          <option value="Seafood">Seafood</option>
          <option value="Dessert">Dessert</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>

        {/* Filter by area */}
        <select
          value={area}
          onChange={(e) => {
            setArea(e.target.value);
            setQuery("");
            setCategory("");
          }}
          className="select border-none rounded-lg w-full"
        >
          <option value="">Select Area</option>
          <option value="Indian">Indian</option>
          <option value="Canadian">Canadian</option>
          <option value="American">American</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
        </select>
      </div>

      {/* ===== States ===== */}
      {loading && (
        <p className="text-lg text-base-content/70">
          Loading meals...
        </p>
      )}

      {!loading && meals.length === 0 && (
        <p className="text-lg font-medium text-base-content/70">
          Not Yet Searched...
        </p>
      )}

      {/* ===== Results ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="card bg-base-100 shadow-md hover:shadow-xl mb-5 transition cursor-pointer"
            onClick={() => navigate(`/meal/${meal.idMeal}`)}
          >
            <figure>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg">
                {meal.strMeal}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
