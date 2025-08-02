import React from "react";
import { useNavigate } from "react-router";

export default function CreationForm({ formPage, setFormPage }) {
  const navigate = useNavigate();

  return (
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
            onClick={(e) => {
              e.preventDefault();
              navigate("/create");
            }}
            className="w-full mt-5 outline-1 bg-gray-900 text-white hover:bg-gray-800 cursor-pointer transition-colors duration-200 py-2 px-3 rounded-md"
          >
            Create Capsule
          </button>
        </form>
      </div>
    </section>
  );
}
