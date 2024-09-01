import React from "react";
import { Link } from "react-router-dom";

function Recommend() {
  return (
    <div className="bg-red-800 text-white flex mb-10 tablet:mt-3 justify-center">
      <Link
        to="/Contact"
        className="flex h-14 tablet:h-20 items-center p-2 gap-x-2"
      >
        <div className="tablet:text-2xl laptop:text-4xl desktop:text-2xl">
          Recommend a movie?
        </div>
        <div className="text-lg tablet:text-2xl laptop:text-4xl desktop:text-2xl">
          {" >>"}
        </div>
      </Link>
    </div>
  );
}

export default Recommend;
