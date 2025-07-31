import { FilePlus2, Tablets } from "lucide-react";
import React, { useState } from "react";
import CardOne from "../Components/Capsule/CardOne";
import { data } from "react-router";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [publish, setPublish] = useState("");
  const [opening, setOpening] = useState("");
  const [goals, setGoals] = useState([]);

  const [capsule, setCapsule] = useState("private");

  const handleCreate = () => {};
  const handleDraft = () => {};

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
                  value={data}
                  onChange={(e) => {
                    setPublish(e.target.value);
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
                <input type="checkbox" name="task1" id="task1" />
                <input
                  type="text"
                  placeholder="Learning new skills"
                  className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                />
              </div>
              <div className="flex gap-5">
                <input type="checkbox" name="task1" id="task1" />
                <input
                  type="text"
                  placeholder="Spending more time with Family"
                  className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 md:flex-row">
              <button
                className="bg-gray-900 text-white py-3 rounded-xl w-full curosr-pointer hover:bg-gray-800  transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleCreate();
                }}
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
    </>
  );
}
