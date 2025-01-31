export const fetchSearch = async (query: string) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    
  );
  const data = await response.json();
  return data.meals;
};
