export default function Filter({ filter, setFilter, locked, unlocked }) {
  const filterOption = [
    { id: "Locked", num: locked },
    { id: "Unlocked", num: unlocked },
  ];
  return (
    <div className="mx-auto flex w-full gap-3 px-2 md:w-200 xl:w-300">
      {filterOption.map((item, key) => (
        <button
          key={key}
          className={`cursor-pointer rounded-full px-3 py-1 outline-1 outline-gray-300 transition-colors duration-300 ${
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
