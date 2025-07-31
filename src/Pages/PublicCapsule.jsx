import React, { useEffect, useState } from "react";
import db from "../lib/database";
import MyCapsule from "./MyCapsule";
import { EarthIcon, Unlock } from "lucide-react";
import CardOne from "../Components/Capsule/CardOne";

export default function PublicCapsule() {
  const [publicCap, setPublicCap] = useState([]);

  const init = async () => {
    const res = await db.public.list();
    console.log(res.documents);
    setPublicCap(res.documents);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <section className="mx-auto h-fit mb-5 mt-12  ">
        <div className=" flex items-center flex-col gap-5 px-5">
          <EarthIcon className="spinAnime bg-gray-200 w-20 h-20 p-5 rounded-full  " />
          <h1 className="text-3xl font-bold text-center">
            Public Time Capsules
          </h1>
          <p className="text-center text-gray-700 text-sm">
            Discover inspiring messages from people around the world, sharing
            their hopes, dreams, and reflections for the future.
          </p>
        </div>
      </section>

      <section className="flex  flex-col gap-5 bg-gray-100 px-5 py-10  w-full h-fit">
        <h1 className="mx-auto font-bold text-xl">Explore Public Captules</h1>
        <div className="flex flex-wrap gap-5 w-fit mx-auto">
          {publicCap
            ? publicCap.map((item, key) => {
                return (
                  <CardOne
                    key={key}
                    name={item.name}
                    title={item.title}
                    description={item.description}
                    opening={item.opening.split("T")[0]}
                  />
                );
              })
            : null}
        </div>
      </section>
    </>
  );
}
