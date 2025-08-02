import { FilePlus2 } from "lucide-react";
import { useEffect, useState } from "react";

import db from "../lib/database";
import { data, useNavigate } from "react-router";
import useAccount from "../context/useAccount";

export default function Create() {
  const { loggedIn } = useAccount();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publish, setPublish] = useState("");
  const [openingDate, setOpeningDate] = useState("");
  const [openingTime, setOpeningTime] = useState("");

  const [date, setDate] = useState("");
  const [goalOne, setGoalOne] = useState(false);
  const [goalTwo, setGoalTwo] = useState(false);

  const [capsule, setCapsule] = useState("public");

  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const handleCreate = (e) => {
    e.preventDefault();
    const dt = new Date(`${openingDate}T${openingTime}`);
    setDate(dt.toISOString());
    setPublish(new Date().toISOString());
    if (loggedIn) {
      
      
      if (title === "" || description === "" || publish === "" || date === "") {
        return;
      } else {
        if (capsule === "public") {
          init();
        } else {
          return;
        }
      }
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    if (!nav) return;

    const time = setTimeout(() => {
      setNav(false);
    }, 8000);

    return () => clearTimeout(time);
  }, [nav]);

  
  const handleDraft = () => {};

  const init = async () => {
    try {
      const payload = {
        name: loggedIn.split("@")[0],
        title: title,
        description: description,
        published: publish,
        opening: date,
      };

      const res = await db.public.create(payload);
      setTitle("");
      setDescription("");
      navigate("/publiccapsule");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="mx-auto h-fit mt-12  ">
        <div className="flex items-center flex-col gap-5 px-5">
          <FilePlus2 className=" bg-gray-200 w-20 h-20 p-5 rounded-full  " />
          <h1 className="text-3xl font-bold text-center">
            Create Your Time Capsule
          </h1>
          <p className="text-center text-gray-700 text-sm">
            Write a message to your future self or share your thoughts with the
            world
          </p>
        </div>
      </section>

      <section className="flex flex-col mt-10 gap-10 px-5">
        <div className="mx-auto overflow-hidden bg-white w-full h-12 md:w-200 outline-1 outline-gray-300 shadow-md rounded-t-2xl flex  justify-between">
          <button
            className={` border-b-1  w-full transition-all duration-300 ease-in ${
              capsule === "private"
                ? "bg-gray-100 border-black "
                : "border-white"
            }`}
            onClick={() => {
              setCapsule("private");
            }}
          >
            Private <span className="hidden md:inline ">Capsule </span>{" "}
          </button>
          <button
            className={` border-b-1  w-full transition-all duration-300 ease-in ${
              capsule === "public"
                ? "bg-gray-100 border-black "
                : "border-white"
            }`}
            onClick={() => {
              setCapsule("public");
            }}
          >
            Public <span className="hidden md:inline ">Capsule </span>{" "}
          </button>
        </div>
        <div className="mx-auto w-full h-fit flex flex-col items-center justify-center xl:flex-row gap-10 md:w-200 mb-20  ">
          <form className="outline-1 outline-gray-200 shadow-md rounded-xl w-full px-7 py-5 flex flex-col gap-6 ">
            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="title"
                className="text-gray-600 font-medium text-sm"
              >
                Capsule Title
              </label>
              <input
                type="text"
                name="title"
                className="border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                placeholder={
                  capsule === "private"
                    ? "Letter to my future self"
                    : "Letter to the future world"
                }
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="title"
                className="text-gray-600 font-medium text-sm"
              >
                Your Message
              </label>
              <textarea
                type="text"
                name="title"
                className="border-t-2 h-35 resize-none border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                placeholder={
                  capsule === "public"
                    ? "Hello world from the future..."
                    : " Dear future me..."
                }
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <div className="flex w-full gap-4">
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-gray-600 font-medium text-sm"
                >
                  Unlock Date
                </label>
                <input
                  type="date"
                  name="title"
                  className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                  onChange={(e) => {
                    setOpeningDate(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="title"
                  className="text-gray-600 font-medium text-sm"
                >
                  Unlock Time
                </label>
                <input
                  type="time"
                  name="title"
                  className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                  onChange={(e) => {
                    setOpeningTime(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="title"
                className="text-gray-600 font-medium text-sm"
              >
                Goals & Task (Optional)
              </label>
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  name="task1"
                  id="task1"
                  onChange={() => {
                    setGoalOne((prev) => !prev);
                  }}
                />
                <input
                  type="text"
                  placeholder="Learning new skills"
                  className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                  disabled={goalOne === false}
                  onChange={(e) => {
                    setGoalOne(e.target.value);
                  }}
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="checkbox"
                  name="task1"
                  id="task1"
                  onChange={() => {
                    setGoalTwo((prev) => !prev);
                  }}
                />
                <input
                  type="text"
                  placeholder="Spending more time with Family"
                  className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                  disabled={goalTwo === false}
                  onChange={(e) => {
                    setGoalTwo(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <button
                className="bg-gray-900 text-white py-3 rounded-xl w-full curosr-pointer cursor-pointer hover:bg-gray-800  transition-colors duration-300"
                onClick={handleCreate}
              >
                Create {capsule === "public" ? "Public" : "Private"} Capsule
              </button>
              <button
                className="border-t-2 border-l-2 border-r-2 border-gray-200 py-3 rounded-xl w-full md:w-60 cursor-pointer hover:bg-gray-200 transition-colors duration-300 hover:border-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  handleDraft();
                }}
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </section>
      <div
        className={`rounded-l-xl fixed top-20 bg-red-500 px-5 py-2 right-0 text-white transition-all duration-300 ease-in ${
          nav ? "right-0" : "right-[-50rem]"
        }`}
      >
        Login or Register to Create
      </div>
    </>
  );
}
