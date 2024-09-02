import React from "react";
import { Link } from "react-router-dom";

function Recommend() {
  return (
    <div className="bg-red-800 text-white flex mb-10 tablet:mt-3 tv:mt-5 justify-center">
      <Link
        to="/Contact"
        className="flex h-12 tablet:h-14 laptop:h-16 desktop:h-12 items-center p-2 gap-x-2"
      >
        <div className="tablet:text-xl laptop:text-2xl desktop:text-sm">
          Recommend a movie?
        </div>
        <div className="text-lg tablet:text-2xl laptop:text-4xl desktop:text-sm">
          {" >>"}
        </div>
      </Link>
    </div>
  );
}

export default Recommend;
