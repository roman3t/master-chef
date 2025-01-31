import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/fetchCategories";

type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function CategoriesMenu({
  onSelectCategory,
}: {
  onSelectCategory: (category: string) => void;
}) {
  const [categories, setCategories] = useState<Category[]>([]);

  const [selected, setSelected] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category: Category) => (
        <div
          key={category.idCategory}
          onClick={() => onSelectCategory(category.strCategory)}
          className={`cursor-pointer hover:bg-neutral-200 px-4 py-2 max-w-[100px] truncate text-xs`}
        >
          <img
            src={category.strCategoryThumb}
            className={`w-20 rounded-full h-12 object-cover mx-auto`}
          />
          <h3 className="text-center mt-2 ">
            {category.strCategory}
          </h3>
        </div>
      ))}
    </div>
  );
}