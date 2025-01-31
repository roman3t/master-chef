import React from "react";
import CardMeal from "./CardMeal";

type PropsMeal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

export default function SearchList({
  mealSearch,
}: {
  mealSearch: PropsMeal[];
}) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4">Searching {}</h2>
      <div className="grid grid-cols-4 gap-5">
        {mealSearch.length < 1 && <p>No results</p>}
        {mealSearch.map((meal) => (
          <CardMeal
            id={meal.idMeal}
            meal={meal.strMeal}
            thumb={meal.strMealThumb}
            key={meal.idMeal}
          />
        ))}
      </div>
    </div>
  );
}
