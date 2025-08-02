import React from "react";

export default function AboutUs({ webData }) {
  return (
    <section className="bg-white w-full flex flex-col justify-center h-fit ">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row gap-15 py-10 px-5">
          {webData.map((item, key) => {
            const Icon = item.icon;
            return (
              <div
                className="flex flex-col items-center text-center gap-5 xl:w-100"
                key={key}
              >
                <Icon className="bg-gray-200 w-14 h-14 p-4 rounded-full" />
                <div>
                  <h1 className="font-medium text-md">{item.title}</h1>
                  <p className="font-light">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
