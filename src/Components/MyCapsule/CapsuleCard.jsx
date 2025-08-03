import { Delete, Edit, Trash, Trash2 } from "lucide-react";
import React from "react";

export default function CapsuleCard({
  name = "Prashant",
  title = "Future Me",
  description = "I hope to become something else in the future.",
  status = false,
  opening = "2026-1-1",
  published = "2025-8-3",
  id = "1124",
}) {
  console.log(name, title, description, status, opening, published, id);
  return (
    <section className="flex flex-col  gap-3 px-5 w-full md:w-200 xl:w-300 mx-auto  ">
      <div className="w-full outline-1 outline-gray-300  flex flex-col gap-3 rounded-xl overflow-hidden">
        <div className="bg-black w-full h-25"></div>

        <div className="flex w-full justify-between px-2">
          <h1 className="font-medium">{title}</h1>
          <div className="flex gap-3">
            <Edit size={20} className="text-gray-600 cursor-pointer" />
            <Trash2 size={20} className="text-gray-600 cursor-pointer" />
          </div>
        </div>
        <div className="w-full px-2">
          <p>{status ? description : `${description}`}</p>
        </div>

        <button className="bg-gray-900 text-white py-2 m-2 rounded-xl cursor-pointer hover:bg-gray-800 transition-colors duration-300 ">
          {status ? "Read" : `Unlocks in ${opening}`}
        </button>
      </div>
    </section>
  );
}

// FUTURE PLAN
//   <div className="flex h-50 flex-col gap-4 items-center w-80 mx-auto bg-white px-5 py-4 rounded-xl hover:shadow-md hover:translate-y-[-0.2rem] transition-all duration-300   ">
//       <div className="flex justify-between w-full items-center">
//         <div>
//           <h1 className="font-medium">{name}</h1>
//           <p className="text-gray-500 text-[0.8rem] flex items-center gap-1">
//             <MailOpen size={15} /> {opening}
//           </p>
//         </div>
//         <Unlock className="w-9 h-9 bg-gray-500 p-2 rounded-full text-white" />
//       </div>
//       <div className="w-full">
//         <h1 className="font-medium text-[1.1rem]"> {title}</h1>
//         <p>
//           {description.length > 85
//             ? description.slice(0, 80) + "......"
//             : description}
//         </p>
//       </div>
//     </div>
