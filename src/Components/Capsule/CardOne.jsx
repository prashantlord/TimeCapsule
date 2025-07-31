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
    <div className="flex flex-col gap-4 items-center w-80 mx-auto bg-white px-5 py-4   ">
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="font-medium">{name}</h1>
          <p className="text-gray-500 text-[0.8rem] flex items-center gap-1">
            <MailOpen size={15} /> Opened {opening}
          </p>
        </div>
        <Unlock className="w-9 h-9 bg-gray-500 p-2 rounded-full text-white" />
      </div>
      <div className="w-full">
        <h1 className="font-medium text-[1.1rem]"> {title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
