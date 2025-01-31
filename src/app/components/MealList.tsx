import React, { useEffect, useState } from "react";
import { fetchMealsByCategory } from "@/app/api/fetchMealsByCateries";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function MealsList({ category }: { category: string }) {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const getMeals = async () => {
      const data = await fetchMealsByCategory(category);
      setMeals(data);
    };
    getMeals();
  }, [category]);


  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Meals in {category}</h2>
      <div className="grid grid-cols-4 gap-5">
        {meals.map((meal: Meal) => (
          <a key={meal.idMeal} className="border h-36" href={`/meal/${meal.idMeal}`}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-24 object-cover"
            />
            <h3 className="text-center text-xs mt-2 font-semibold">{meal.strMeal}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}