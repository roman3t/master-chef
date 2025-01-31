import React from "react";

type CardProps = {
    id: string;
    thumb: string;
    meal: string;
}

export default function CardMeal(Props: CardProps) {
 const {id, meal, thumb} = Props

  return (
    <a key={id} className="border h-36" href={`/meal/${id}`}>
      <img
        src={thumb}
        alt={meal}
        className="w-full h-24 object-cover"
      />
      <h3 className="text-center text-xs mt-2 font-semibold">{meal}</h3>
    </a>
  );
}
