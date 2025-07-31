import React, { useEffect, useState } from "react";
import db from "../lib/database";
import MyCapsule from "./MyCapsule";
import { Unlock } from "lucide-react";
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
      <section className="flex bg-gray-100 items-center w-full h-200">
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
      </section>
    </>
  );
}
