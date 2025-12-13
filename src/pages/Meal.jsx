import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Loader from "../ui/Loader";

const Meal = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`lookup.php?i=${id}`)
      .then((res) => res.meals?.[0] || null)
      .finally(() => setLoading(false));
  },[id]);

    if (loading) return <Loader />;
    if(!meal) return <> 
    <h2 className="text-center text-xl text-base-content/90">No Meals</h2>
    </>

  return (
    <div className="p-10">
      <h1>Individual Meal..{id} </h1>
    </div>
  );
};

export default Meal;
