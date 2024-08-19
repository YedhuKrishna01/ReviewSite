import React from "react";
import { Link } from "react-router-dom";

function HomeSeries() {
  return (
    <div className="w-10/12 flex mb-10 justify-end">
      <Link
        to="/TVshows"
        className="flex h-10 items-center font-light p-2 gap-x-2"
      >
        <div>TV Shows</div>
        <div className="text-lg">{" >>"}</div>
      </Link>
    </div>
  );
}

export default HomeSeries;
