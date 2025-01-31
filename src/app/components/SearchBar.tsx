"use client"
import React, { useEffect, useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void; 
};


export default function SearchBar({ onSearch }: SearchBarProps) {

  const [query, setQuery] = useState(""); 

  const handleSearch = () => {
    onSearch(query); 
  };


  return (
    <div className="w-4/5 flex justify-between gap-10  top-10 mx-auto">
      <input 
        placeholder="type a meal" 
        className="w-5/6 border pl-3" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}/>
      <button onClick={handleSearch} className="w-1/6 bg-slate-500 text-white px-5 py-2">
        Search
      </button>
    </div>
  );
}
