export const fetchRandom = async () => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/random.php`
  );
  const data = await response.json();
  return data.meals[0];
};
