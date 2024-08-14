import React from "react";
import "../styles/home.css";

function HomeMovieList() {
  return (
    <div className="w-10/12 mt-4 rounded-lg text-xl flex flex-col gap-y-4 font-semilight">
      <div>More Movies</div>
      <div className="w-full grid grid-cols-2 mt-[-10px] gap-4 p-2">
        <div className="rounded-lg card1 relative">
          <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
            <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
              Kingdom of the planet of the apes
            </div>
            <div className="flex pt-1">
              <div className="text-xs px-1">2024</div>
              <div className="text-xs px-1">2hr 25m</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg card2 relative pt-48">
          <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
            <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
              The Intern
            </div>
            <div className="flex pt-1">
              <div className="text-xs px-1">2015</div>
              <div className="text-xs px-1">2hr 01m</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg card3 relative pt-48">
          <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
            <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
              Dear Zindagi
            </div>
            <div className="flex pt-1">
              <div className="text-xs px-1">2016</div>
              <div className="text-xs px-1">2hr 31m</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMovieList;
