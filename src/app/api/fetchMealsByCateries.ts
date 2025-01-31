export const fetchMealsByCategory = async (category: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await response.json();
  return data.meals;
};
