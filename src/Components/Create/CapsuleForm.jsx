import { Eye } from "lucide-react";
import React from "react";

export default function CapsuleForm({
  capsule,
  title,
  setTitle,
  description,
  setDescription,
  setOpeningDate,
  setOpeningTime,
  goalOne,
  setGoalOne,
  goalTwo,
  setGoalTwo,
  handleCreate,
  handleDraft,
}) {
  return (
    <form
      className="outline-1 outline-gray-200 shadow-md rounded-xl w-full px-7 py-5 flex flex-col gap-6 "
      onSubmit={handleCreate}
    >
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="title" className="text-gray-600 font-medium text-sm">
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
        <label htmlFor="title" className="text-gray-600 font-medium text-sm">
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
          <label htmlFor="title" className="text-gray-600 font-medium text-sm">
            Unlock Date
          </label>
          <input
            type="date"
            name="title"
            title="Will not be seen in public capsule"
            className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
            onChange={(e) => {
              setOpeningDate(e.target.value);
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="title" className="text-gray-600 font-medium text-sm">
            Unlock Time
          </label>
          <input
            type="time"
            name="title"
            className="w-full border-t-2 border-l-2 border-r-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
            title="Will not be seen in public capsule"
            onChange={(e) => {
              setOpeningTime(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="title" className="text-gray-600 font-medium text-sm">
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
            placeholder={"Spending more time with Family"}
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
          type="submit"
        >
          Create {capsule === "public" ? "Public" : "Private"} Capsule
        </button>
        <button
          onClick={handleDraft}
          className="border-t-2 border-l-2 border-r-2 border-gray-200 py-3 rounded-xl w-full md:w-60 cursor-pointer hover:bg-gray-200 transition-colors duration-300 hover:border-gray-400"
        >
          Save as Draft
        </button>
      </div>
    </form>
  );
}
