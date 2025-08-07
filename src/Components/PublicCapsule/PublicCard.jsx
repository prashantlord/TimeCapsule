// import {
//   Mail,
//   Edit,
//   Trash2,
//   MailCheck,
//   MailCheckIcon,
//   UserRound,
// } from "lucide-react";
const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

// export default function PublicCard({
//   name = "Name",
//   title = "Title",
//   description = "Description",
//   published = "Date",
// }) {
//   return (
//     <div className="flex h-60 w-full flex-col gap-2 overflow-hidden rounded-xl border-1 sm:w-80 md:w-100">
//       <div className="flex h-20 w-full items-center justify-center bg-black">
//         <h1 className="text-white select-none">Future Capsule</h1>
//       </div>
//       <div className="flex w-full flex-col gap-2 px-5 py-2">
//         <div>
//           <h1 className="flex items-center gap-2 font-medium">
//             {" "}
//             <UserRound size={18} /> {name}
//           </h1>
//           <p className="flex items-center gap-2 text-gray-500">
//             <Mail size={18} /> {formatDate(published)}
//           </p>
//         </div>
//         <div>
//           <h1 className="text-xl font-semibold">
//             <span className="text-md font-medium">Title:</span> {title}
//           </h1>
//           <p>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
import { Mail } from "lucide-react";
import { useState } from "react";
export default function PublicCard({
  name,
  title,
  info,
  published,
  personImg = "/person2.png",
}) {
  const [about, setAbout] = useState([]);
  const goals = [
    "Mind",
    "Growth",
    "Learning",
    "Peace",
    "Balance",
    "Discipline",
    "Success",
    "Dreams",
    "Change",
    "Focus",
    "Motivation",
    "Vision",
    "Journey",
    "Energy",
    "Habits",
    "Strength",
    "Belief",
    "Path",
    "Purpose",
    "Reflection",
  ];
  useState(() => {
    const arr = [];
    for (let i = 0; i < 2; i++) {
      arr.push(goals[Math.floor(Math.random() * goals.length)]);
    }
    setAbout([...arr]);
  }, []);

  return (
    <>
      <div className="h-fit min-w-80 cursor-auto snap-start overflow-hidden rounded-xl border-1 border-gray-300 transition-transform duration-300 hover:translate-y-[-0.5rem] md:w-100 xl:w-110">
        <div className="flex h-30 w-full items-center bg-gray-900 text-white">
          <h1 className="mx-auto text-xl font-medium">Future Capsule</h1>
        </div>

        <div className="flex flex-col gap-3 bg-white p-3">
          <div className="flex items-center gap-2">
            <img
              src={personImg}
              alt="Person Image"
              className="h-9 w-8 rounded-full object-contain"
            />
            <div>
              <h1 className="font-medium text-gray-700">{name}</h1>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                {" "}
                <Mail size={18} />
                {formatDate(published)}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">{title}</h1>
            <p>{info}</p>
          </div>
          <div className="flex gap-3 md:flex">
            {about.map((item, key) => (
              <p
                key={key}
                className="cursor-pointer rounded-full bg-gray-200 px-3 py-1 transition-colors duration-200 hover:bg-gray-300"
              >
                {item}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
