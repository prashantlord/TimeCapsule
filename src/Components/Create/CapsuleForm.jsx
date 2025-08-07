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
      className="flex w-full flex-col gap-6 rounded-xl px-7 py-5 shadow-md outline-1 outline-gray-200"
      onSubmit={handleCreate}
    >
      <div className="flex w-full flex-col gap-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-600">
          Capsule Title
        </label>
        <input
          type="text"
          name="title"
          maxLength={30}
          minLength={1}
          className="rounded-md border-t-2 border-r-2 border-l-2 border-gray-200 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
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

      <div className="flex w-full flex-col gap-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-600">
          Your Message
        </label>
        <textarea
          type="text"
          name="title"
          maxLength={50}
          minLength={4}
          className="h-35 resize-none rounded-md border-t-2 border-r-2 border-l-2 border-gray-200 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
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
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            Unlock Date
          </label>
          <input
            type="date"
            name="title"
            title="Will not be seen in public capsule"
            className="w-full rounded-md border-t-2 border-r-2 border-l-2 border-gray-200 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
            onChange={(e) => {
              setOpeningDate(e.target.value);
            }}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="title" className="text-sm font-medium text-gray-600">
            Unlock Time
          </label>
          <input
            type="time"
            name="title"
            className="w-full rounded-md border-t-2 border-r-2 border-l-2 border-gray-200 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
            title="Will not be seen in public capsule"
            onChange={(e) => {
              setOpeningTime(e.target.value);
            }}
          />
        </div>
      </div>
      {/* <div className="flex w-full flex-col gap-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-600">
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
            className="w-full rounded-md border-t-2 border-r-2 border-l-2 border-gray-200 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
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
            className="w-full rounded-md border-t-2 border-r-2 border-l-2 border-gray-200 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
            disabled={goalTwo === false}
            onChange={(e) => {
              setGoalTwo(e.target.value);
            }}
          />
        </div>
      </div> */}
      <div className="flex flex-col gap-3 md:flex-row">
        <button
          className="curosr-pointer w-full cursor-pointer rounded-xl bg-gray-900 py-3 text-white transition-colors duration-300 hover:bg-gray-800"
          type="submit"
        >
          Create {capsule === "public" ? "Public" : "Private"} Capsule
        </button>
        {/* <button
          onClick={handleDraft}
          className="w-full cursor-pointer rounded-xl border-t-2 border-r-2 border-l-2 border-gray-200 py-3 transition-colors duration-300 hover:border-gray-400 hover:bg-gray-200 md:w-60"
        >
          Save as Draft
        </button> */}
      </div>
    </form>
  );
}
