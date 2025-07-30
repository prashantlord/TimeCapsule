import {
  Cloudy,
  Lock,
  LockOpen,
  MoveLeftIcon,
  MoveRight,
  SquarePen,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import PublicCard from "../Components/PublicCard";
import { Link } from "react-router";
export default function Home() {
  const navigate = useNavigate();
  const [bar, setBar] = useState(false);
  const [formPage, setFormPage] = useState("public");

  const userData = [
    {
      name: "Anonymous",
      title: "Future World",
      info: "I dont know what is going to happen in the future but I know one thing that is the world will end in 2026",
      about: ["future", "world"],
      coverImg: "/image.png",
      personImg: "/person2.png",
    },
    {
      name: "Anonymous",
      title: "Future life",
      info: "I really want to have more than 50 children and they grow up to be a football star, cricket star and so on",
      about: ["future", "sports"],
      coverImg: "/image.png",
      personImg: "/person1.png",
    },
    {
      name: "Anonymous",
      title: "Currency Life",
      info: "I want to leave what I am doing right now and get the hell out of this country and start a new life with a.. ",
      about: ["future", "world"],
      coverImg: "/image.png",
      personImg: "/person3.png",
    },
  ];

  const webData = [
    {
      icon: SquarePen,
      title: "Create Your Capsule",
      desc: "Write a message, upload photos, set goals, and choose when you want your capsule to be opened.",
    },
    {
      icon: Lock,
      title: "Your Capsule is Sealed",
      desc: "We securely store your capsule until the date you specify. No peeking allowed!",
    },
    {
      icon: LockOpen,
      title: "Open When it's time",
      desc: "when the future date arrives, your capsule unlocks and you can revisit your past thoughts and memories.",
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
      <section className="mx-auto h-fit md:h-75  mt-12  ">
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
      <section className="bg-white w-full flex flex-col justify-center h-fit ">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row gap-15 py-10 px-5">
            {webData.map((item, key) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex flex-col items-center text-center gap-5 xl:w-100"
                  key={key}
                >
                  <Icon className="bg-gray-200 w-14 h-14 p-4 rounded-full" />
                  <div>
                    <h1 className="font-medium text-md">{item.title}</h1>
                    <p className="font-light">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 flex flex-col justify-center py-10 px-5 ">
        <div className="mx-auto flex flex-col gap-10 md:flex-row-reverse  items-center ">
          <div className="md:w-100">
            <h1 className="font-medium text-xl">Create Your First Capsule</h1>
            <p className="font-light md:w-75 xl:w-120">
              Start by creating a personal capsule just for yourself, or share
              your thoughts with the world through a public capsule.
            </p>
          </div>
          <form className="mx-auto bg-white px-8 py-8 rounded-xl outline-1 outline-gray-300 w-full sm:w-100">
            <div className="flex justify-between w-full mb-5 ">
              <button
                className={`p-2 w-full border-b-2 transition-all duration-300  ${
                  formPage === "public" ? "border-black" : "border-gray-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setFormPage("public");
                }}
              >
                Private Capsule
              </button>
              <button
                className={` p-2 w-full border-b-2 transition-all duration-300  ${
                  formPage === "private" ? "border-black" : "border-gray-300"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setFormPage("private");
                }}
              >
                Public Capsule
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Title" className="text-gray-800">
                Title
              </label>
              <input
                type="text"
                placeholder="Letter to my future self"
                className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="message" className="text-gray-800">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Dear future me..."
                className="outline-1 resize-none outline-gray-300 py-2 px-3 rounded-md"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="date" className="text-gray-800">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
              />
            </div>
            <button
              onClick={() => {
                navigate("create");
              }}
              className="w-full mt-5 outline-1 bg-gray-900 text-white hover:bg-gray-800 cursor-pointer transition-colors duration-200 py-2 px-3 rounded-md"
            >
              Create Capsule
            </button>
          </form>
        </div>
      </section>
      <section className="flex items-center  bg-white w-full h-fit py-20 ">
        <div className="mx-auto flex flex-col items-center text-center gap-5 px-5">
          <h1 className="font-medium text-2xl">
            Ready to send a message to your future self?
          </h1>
          <p className="text-gray-500  ">
            Create your first time capsule today and start your journey of
            self-reflection.
          </p>
          <button
            className="bg-gray-900 text-white w-fit px-10 py-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors duration-200 "
            onClick={(e) => {
              e.preventDefault();
              navigate("/create");
            }}
          >
            Get Started It's Free
          </button>
        </div>
      </section>
    </>
  );
}
