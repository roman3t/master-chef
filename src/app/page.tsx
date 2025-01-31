"use client";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

import CategoriesMenu from "./components/CategoriesMenu";
import MealsList from "./components/MealList";
import ButtonRandom from "./components/ButtonRandom";
import SearchList from "./components/SearchList";
import { fetchSearch } from "./api/fetchSearch";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Meal[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    try {
      const response = await fetchSearch(query);
      setSearchResults(response || []);
      setIsSearching(true);
      setSelectedCategory("");
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="mt-20">
      <SearchBar onSearch={handleSearch} />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Select a category</h1>
        <CategoriesMenu onSelectCategory={setSelectedCategory} />
        {selectedCategory && <MealsList category={selectedCategory} />}
        {isSearching && !selectedCategory && (
          <SearchList mealSearch={searchResults} />
        )}
      </div>
      <ButtonRandom fixed />
    </div>
  );
}
