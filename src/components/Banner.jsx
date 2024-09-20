import React from "react";
import model from "../assets/model.png";

export const Banner = () => {
  return (
    <>
      <div className="w-screen bg-slate-100 h-screen flex flex-col items-center">
        {/* Banner body divided into 2 parts */}
        <div className="md:flex md:flex-grow md:w-full">
          <div className="left w-1/2 p-4 bg-blue-500 flex justify-center items-center">
            <h1>Left</h1>
          </div>

          {/* Right side image div */}
          <div className="relative w-1/2 flex justify-end items-end">
            <div className="bg-custom-black w-64 h-full absolute right-0 top-0"></div>
            <img
              src={model}
              className="md:h-96 px-5 relative z-10"
              alt="Model"
            />
          </div>
        </div>

        {/* Bottom black strip */}
        <div className="bottom bg-custom-black w-full md:h-28 md:flex md:items-center text-white md:justify-evenly">
          {[
            { count: "500+", label: "Happy Member", description: "Our community is growing fast" },
            { count: "5+", label: "Year Experience", description: "Experience in various workout" },
            { count: "13+", label: "Certified Trainers", description: "Guidance at every step" },
            { count: "90%", label: "Customers satisfaction", description: "We ensure your progress satisfaction" }
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <ul className="list-none flex flex-col items-center">
                <li className="md:text-2xl font-sans font-bold">{item.count}</li>
                <li className="text-sm">{item.label}</li>
                <li className="text-sm">{item.description}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
