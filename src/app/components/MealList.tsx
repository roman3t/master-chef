import React, { useEffect, useState } from "react";
import { fetchMealsByCategory } from "@/app/api/fetchMealsByCateries";
import CardMeal from "./CardMeal";

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
          <CardMeal id={meal.idMeal} meal={meal.strMeal} thumb={meal.strMealThumb} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
}