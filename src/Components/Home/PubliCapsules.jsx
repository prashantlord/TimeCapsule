import PublicCard from "../PublicCard";
import { Link } from "react-router";
import { MoveRight } from "lucide-react";

export default function PublicCapsule({ userData }) {
  return (
    <section className=" h-fit  justify-center gap-10  items-center  mt-15 bg-gray-100 p-2 py-5 ">
      <div className="flex">
        <div className="mx-auto flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide">
          {userData.map((item, key) => (
            <PublicCard
              key={key}
              name={item.name}
              title={item.title}
              info={item.info}
              about={item.about}
              coverImg={item.coverImg}
              personImg={item.personImg}
            />
          ))}
        </div>
      </div>
      <Link
        to="/publiccapsule"
        className=" w-full flex items-center justify-center text-gray-600 text-[0.9rem] gap-1 mt-10 "
      >
        View All public Capsule <MoveRight size={20} />
      </Link>
    </section>
  );
}
