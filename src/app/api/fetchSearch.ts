export const fetchMeal = async (slug: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`
  );
  const data = await response.json();
  return data.meals[0];
};
