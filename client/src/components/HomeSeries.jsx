import React from "react";
import { Link } from "react-router-dom";

function HomeSeries() {
  return (
    <div className="w-10/12 flex mb-10 desktop:mt-[-12rem] justify-end">
      <Link
        to="/TVshows"
        className="flex h-10 items-center font-light p-2 gap-x-2"
      >
        <div className="tablet:text-2xl laptop:text-4xl desktop:text-2xl">
          TV Shows
        </div>
        <div className="text-lg tablet:text-2xl laptop:text-4xl desktop:text-2xl">
          {" >>"}
        </div>
      </Link>
    </div>
  );
}

export default HomeSeries;
