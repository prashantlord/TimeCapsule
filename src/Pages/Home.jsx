import { Cloudy, MoveLeftIcon, MoveRight } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import PublicCard from "../Components/PublicCard";
import { Link } from "react-router";
export default function Home() {
  const navigate = useNavigate();
  const [bar, setBar] = useState(false);

  const userData = [
    {
      name: "Prashant Stha",
      title: "Future World",
      info: "I dont know what is going to happen in the future but I know one thing that is the world will end in 2026",
      about: ["future", "world"],
      coverImg: "/image.png",
      personImg: "/person2.png",
    },
    {
      name: "Ranjan",
      title: "Future life",
      info: "I really want to have more than 50 children and they grow up to be a football star, cricket star and so on",
      about: ["future", "sports"],
      coverImg: "/image.png",
      personImg: "/person1.png",
    },
    {
      name: "Dibas",
      title: "Currency Life",
      info: "I want to leave what I am doing right now and get the hell out of this country and start a new life with a russian ",
      about: ["future", "world"],
      coverImg: "/image.png",
      personImg: "/person3.png",
    },
  ];

  const personalCapsule = (e) => {
    e.preventDefault();
    navigate("/create");
  };

  const publicCapsule = (e) => {
    e.preventDefault();
    navigate("/publiccapsule");
  };

  return (
    <>
      <section className="mx-auto h-fit mt-12  ">
        <div className="flex items-center flex-col gap-5 px-5">
          <Cloudy className="bg-gray-200 w-20 h-20 p-5 rounded-full " />
          <h1 className="text-3xl font-bold text-center">
            Send A Message To Your Future
          </h1>
          <p className="text-center text-gray-700 text-sm">
            Create time capsules with personal messages, photos, and goals that
            will be delivered to you in the future .
          </p>
          <div className="flex gap-3">
            <button
              onClick={personalCapsule}
              className="border-2 border-gray-700 py-2 w-30 md:w-60  rounded-full bg-gray-700 text-white cursor-pointer hover:translate-y-[-0.2em] hover:scale-102 transition-transform duration-200 ease-in"
            >
              Create <span className="hidden md:inline">Personal Capsule</span>
            </button>
            <button
              onClick={publicCapsule}
              className="border-2 border-gray-700 py-2 w-30  md:w-60  rounded-full cursor-pointer hover:translate-y-[-0.2rem] hover:scale-102 transition-transform duration-200 ease-in"
            >
              Explore <span className="hidden md:inline">Public Capsules</span>
            </button>
          </div>
        </div>
      </section>

      <section className=" h-100   justify-center gap-10  items-center  mt-15 bg-gray-100 p-2">
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
        <Link to="/publiccapsule" className=" w-full flex items-center justify-center text-gray-600 text-[0.9rem] gap-1 mt-10 ">
          View All public Capsule <MoveRight size={20} />
        </Link>
      </section>
    </>
  );
}
