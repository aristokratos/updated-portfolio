import React from "react";
import FacoProject1 from "../assets/portfolio/FacoProject1.png";
import turinProject from "../assets/portfolio/turinProject.png";
import hotelmgtProject from "../assets/portfolio/hotelmgtProject.png";
import podGProject from "../assets/portfolio/podGProject.png";
import ewalletapi from "../assets/portfolio/ewalletapi.png";
import queenFisherProject from "../assets/portfolio/queenFisherProject.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: FacoProject1,
    },
    {
      id: 2,
      src: hotelmgtProject,
    },
    {
      id: 3,
      src: turinProject,
    },
    {
      id: 4,
      src: podGProject,
    },
    {
      id: 5,
      src: queenFisherProject,
    },
    {
      id: 6,
      src: ewalletapi,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-4 md:grid-cols-3 gap-6 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-1g">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href="https://github.com/aristokratos" target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
