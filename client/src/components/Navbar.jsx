import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex h-20 p-5">
        <div className="text-white p-2 font-medium text-2xl w-4/6">
          <Link className="ml-2" to="/">
            Reseña.
          </Link>
        </div>
        <div className="w-2/6 p-2 flex justify-end">
          <svg
            onClick={handleIconClick}
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#e8eaed"
            className={`transform transition-transform duration-700 ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
          </svg>
        </div>
      </div>

      {/* Extended Menu */}
      <div
        className={`transition-all flex justify-center duration-700 overflow-hidden ${
          isMenuOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="text-white w-10/12 py-5 px-2">
          <ul className="space-y-2">
            <li>
              <Link to="/tv-shows" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tv-shows" className="hover:underline">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/recommendations" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
