import React, { useEffect, useState } from "react";

export default function SearchBar() {

  
  return (
    <div className="w-4/5 flex justify-between gap-10 fixed top-10">
      <input placeholder="type a meal" className="w-5/6 border pl-3" />
      <a href="" className="w-1/6 bg-slate-500 text-white px-5 py-2">
        Search
      </a>
    </div>
  );
}
