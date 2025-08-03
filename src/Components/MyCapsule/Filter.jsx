export default function Filter({ filter, setFilter, total, locked, unlocked }) {
  const filterOption = [
    { id: "All", num: total },
    { id: "Locked", num: locked },
    { id: "Unlocked", num: unlocked },
  ];
  return (
    <div className="flex gap-3 px-2 w-full md:w-200 xl:w-300 mx-auto  ">
      {filterOption.map((item, key) => (
        <button
          key={key}
          className={`outline-gray-300 outline-1 px-3 py-1 rounded-full transition-colors duration-300 cursor-pointer ${
            filter === item.id
              ? "bg-black text-white"
              : "bg-white outline-black"
          }`}
          onClick={() => {
            setFilter(item.id);
          }}
        >
          {item.id} ({item.num})
        </button>
      ))}
    </div>
  );
}
