

export default function PublicCard({
  name = "Anonymous",
  title = "Future Job",
  info = "I am hopping to get a proper job for myself in the future",
  about = ["future", "goals"],
  coverImg = "/image.png",
  personImg = "/person2.png",
}) {
  return (
    <>
      <div className="min-w-80  snap-start overflow-hidden h-fit md:w-100 xl:w-110 rounded-xl  border-1 border-gray-300 hover:translate-y-[-0.5rem] transition-transform duration-300  cursor-auto">
        <img src={coverImg} alt={title} className="w-full" />

        <div className=" p-3 bg-white flex flex-col gap-3 ">
          <div className="flex items-center gap-2">
            <img
              src={personImg}
              alt=""
              className="w-8 h-9 object-contain rounded-full "
            />
            <h1 className="font-medium text-gray-700">{name}</h1>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">{title}</h1>
            <p>{info}</p>
          </div>
          <div className=" gap-3 hidden md:flex">
            {about.map((item, key) => (
              <p
                key={key}
                className="bg-gray-200 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300 transition-colors duration-200"
              >
                {item}{" "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
