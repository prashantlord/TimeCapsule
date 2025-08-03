import { Delete, Edit, Key, Lock, Soup, Trash2 } from "lucide-react";
import React from "react";

export default function CapsuleCard({
  name = "Prashant",
  title = "Future Me",
  description = "I hope to become something else in the future.",
  status = true,
  opening = "2026-1-1",
  published = "2025-8-3",
  id = "1124",
  deleteThis,
}) {
  console.log(name, title, description, status, opening, published, id);
  return (
    <div className="w-full  sm:w-80 outline-1 outline-gray-300  flex flex-col gap-3 rounded-xl overflow-hidden">
      <div className="bg-black w-full h-25"></div>

      <div className="flex w-full justify-between px-2">
        <h1 className="font-medium">{title}</h1>
        <div className="flex gap-3">
          <Edit size={20} className="text-gray-600 cursor-pointer" />
          <Trash2
            size={20}
            className="text-gray-600 cursor-pointer"
            onClick={() => {
              deleteThis(id);
            }}
          />
        </div>
      </div>
      <div className="w-full px-2">
        <p>{status ? description : `${description}`}</p>
      </div>

      <button className="bg-gray-900 text-white py-2 m-2 rounded-xl cursor-pointer hover:bg-gray-800 transition-colors duration-300 flex justify-center gap-2 ">
        {status ? <Soup size={20} /> : <Lock size={20} />}
        {status ? "Capsule is Ready" : `Opening Date ${opening}`}
      </button>
    </div>
  );
}
