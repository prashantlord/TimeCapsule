import { Search } from "lucide-react";
import React from "react";

export default function SearchBox({ search, setSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 py-2">
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search by Name"
            className="rounded-l-full border-1 border-gray-400 bg-white px-2 py-1 text-black focus:outline-none md:w-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer rounded-r-full border-1 border-gray-400 bg-gray-900 px-2 py-1 text-white transition-colors duration-300 ease-in hover:bg-gray-600"
          >
            <Search />
          </button>
        </form>
      </div>
    </>
  );
}
