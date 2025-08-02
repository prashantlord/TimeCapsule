import { useNavigate } from "react-router";

export default function GetStarted() {
  const navigate = useNavigate();

  return (
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
  );
}
