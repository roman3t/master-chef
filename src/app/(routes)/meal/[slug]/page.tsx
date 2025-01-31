"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MealHeader } from "./components/MealHeader";
import { MealIngredients } from "./components/MealIngredients";
import { MealInstructions } from "./components/MealInstructions";
import { MealVideo } from "./components/MealVideo";
import { fetchMeal } from "@/app/api/fetchMeal";

type Ingredient = {
  ingredient: string | null;
  measure: string | null;
};

type PropsMeal = {
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strMeal: string;
  strTags: string;
  ingredients: Ingredient[];
};

export default function Page() {
  const [meal, setMeal] = useState<PropsMeal | null>(null);

  const params = useParams<{ slug: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mealData = await fetchMeal(params.slug);
        setMeal({
          ...mealData,
          ingredients: extractIngredients(mealData),
        });
      } catch (error) {
        console.error("Error fetching meal data:", error);
      }
    };

    fetchData();
  }, [params.slug]);

  const extractIngredients = (meal: any): Ingredient[] => {
    const ingredients: Ingredient[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (!meal) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl flex flex-col mx-auto">
      <MealHeader meal={meal} />
      <MealIngredients ingredients={meal.ingredients} />
      <MealInstructions instructions={meal.strInstructions} />
      <MealVideo url={meal.strYoutube} />
    </div>
  );
}
