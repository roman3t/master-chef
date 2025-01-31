type Ingredient = {
  ingredient: string | null;
  measure: string | null;
};

export const MealIngredients = ({
  ingredients,
}: {
  ingredients: Ingredient[];
}) => (
  <div className="mt-5">
    <h2 className="text-sm font-bold">Ingredients</h2>
    <ul className="grid grid-cols-2 gap-2">
      {ingredients.map((ingredient, index) => (
        <li className="capitalize text-lg flex flex-row gap-2" key={index}>
          <input type="checkbox" id={ingredient.ingredient?.toString()} name={ingredient.ingredient?.toString()} />
          <label htmlFor={ingredient.ingredient?.toString()} className={``}>
            {ingredient.ingredient}: {ingredient.measure}
          </label>
        </li>
      ))}
    </ul>
  </div>
);
