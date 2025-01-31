"use client";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

import CategoriesMenu from "./components/CategoriesMenu";
import MealsList from "./components/MealList";
import ButtonRandom from "./components/ButtonRandom";

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="mt-20">
      <SearchBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Select a category</h1>
        <CategoriesMenu onSelectCategory={setSelectedCategory} />
        {selectedCategory && <MealsList category={selectedCategory} />}
      </div>
      <ButtonRandom fixed/>
    </div>
  );
}
