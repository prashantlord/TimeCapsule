import { ID } from "appwrite";
import { Lock, MailOpen, Unlock } from "lucide-react";
import React from "react";

export default function CardOne({
  name = "Anonomus",
  title = "Future Me",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, nobis!",
  id = ID.unique(),
  opening = "2025-07-30",
}) {
  return (
    <div className="flex h-50 flex-col gap-4 items-center w-80 mx-auto bg-white px-5 py-4 rounded-xl hover:shadow-md hover:translate-y-[-0.2rem] transition-all duration-300   ">
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="font-medium">{name}</h1>
          <p className="text-gray-500 text-[0.8rem] flex items-center gap-1">
            <MailOpen size={15} /> {opening}
          </p>
        </div>
        <Unlock className="w-9 h-9 bg-gray-500 p-2 rounded-full text-white" />
      </div>
      <div className="w-full">
        <h1 className="font-medium text-[1.1rem]"> {title}</h1>
        <p>
          {description.length > 85
            ? description.slice(0, 80) + "......"
            : description}
        </p>
      </div>
    </div>
  );
}
