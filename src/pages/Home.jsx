import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Loader from "../ui/Loader";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const[loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("/categories.php")
      .then((res) => {
        setCategories(res.data.categories);
        setLoading(false); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  
  if(loading) return <Loader />


  return (
    <>
      <div className="p-10">
        <h1 className='text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-primary font-bold mb-5'>Categories</h1>
       
        <div className="px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.length > 0 &&
            categories.map((category) => (
              <MealCard key={category.idCategory} category={category}  />
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
