import React from "react";
import { fetchRandom } from "../api/fetchRandom";
import { useRouter } from "next/navigation";

export default function ButtonRandom({
  fixed,
}: {
  fixed?: boolean;
}) {
  const router = useRouter();

  const getRandomMeal = async () => {
    try {
      const meal = await fetchRandom();
      router.push(`/meal/${meal.idMeal}`);
    } catch (error) {
      console.error("error:", error);
    }
  };
  return (
    <a
      className={`${fixed ? "fixed" : ""} bottom-10 right-10 text-white bg-black/55 px-4 py-2 text-xs cursor-pointer hover:bg-green-300 hover:text-black`}
      onClick={getRandomMeal}
    >
      I do not know how to prepare
    </a>
  );
}
