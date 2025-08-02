export default function Filter({ filter, setFilter }) {
  const filterOption = ["All", "Locked", "Unlocked"];
  return (
    <div className="flex gap-3 px-2 w-full md:w-200 xl:w-300 mx-auto  ">
      {filterOption.map((item, key) => (
        <button
          key={key}
          className={`outline-gray-300 outline-1 px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer ${
            filter === item ? "bg-black text-white" : "bg-white outline-black"
          }`}
          onClick={() => {
            setFilter(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
