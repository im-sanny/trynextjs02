"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );
      const data = await res.json();
      setMeals(data.meals);
      setError("");
    }
     catch (error) {
      setError("No meal found");
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div className="mt-12">
        <input
          onChange={handler}
          type="text"
          placeholder="search meals"
          className="border p-3  outline-none "
        />
        <button onClick={() => loadData()} className="border p-3 bg-teal-300">
          Search
        </button>
        <div className="mt-12 grid grid-cols-4 gap-6 ">
          {meals?.length > 0 &&
            !error &&
            meals?.map((meal) => (
              <div key={meal.idMeal} className="border p-4">
                <Image
                  src={meal.strMealThumb}
                  alt={meal?.strMeal}
                  width={400}
                  height={400}
                ></Image>
                <h3>{meal.strMeal}</h3>
                <p>{meal.strInstructions}</p>
              </div>
            ))}
          {error && <p>No meal found</p>}
        </div>
      </div>
    </div>
  );
};

export default Meals;
