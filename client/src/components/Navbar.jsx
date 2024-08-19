import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex h-20 p-5">
      <div className="text-white p-2 font-medium text-2xl w-4/6">
        <Link className="ml-2" to="/">
          Reseña.
        </Link>
      </div>
      <div className="w-2/6 p-2 flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          fill="#e8eaed"
        >
          <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
