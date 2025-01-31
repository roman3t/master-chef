import ButtonRandom from "@/app/components/ButtonRandom";

type PropsMeal = {
  strArea: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strYoutube: string;
  strMeal: string;
  strTags: string;
};

const StarIcon = ({ fill }: { fill: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ? "yellow" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

export const MealHeader = ({ meal }: { meal: PropsMeal }) => {
  const randomStars = Math.floor(Math.random() * 2) + 4;

  return (
    <div className="relative mx-auto">
      <div className="flex my-4 justify-between">
        <div className="flex gap-2 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} fill={index < randomStars} />
          ))}
        </div>
        <ButtonRandom />
      </div>

      <div className="relative">
        <img src={meal.strMealThumb} className="h-[550px]" alt={meal.strMeal} />

        <h1 className="absolute top-10 bg-white text-black px-4 py-2 text-2xl font-bold">
          {meal.strMeal}
        </h1>
      </div>

      <div className="flex gap-2">
        <span className="bg-neutral-600 text-white text-xs px-2 py-1 rounded-sm">
          {meal.strArea}
        </span>
        <span className="bg-neutral-600 text-white text-xs px-2 py-1 rounded-sm">
          {meal.strCategory}
        </span>
      </div>
    </div>
  );
};
