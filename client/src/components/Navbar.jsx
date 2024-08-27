import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="grid grid-cols-12 h-20 pt-8">
        <div className="text-white col-start-2 py-2 font-medium text-2xl ">
          <Link className="ml-2" to="/">
            Reseña.
          </Link>
        </div>
        <div className="col-start-10 col-span-2 pt-1 flex justify-end">
          <svg
            onClick={handleIconClick}
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
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
        <div className="text-white text-sm w-10/12 py-1 px-3">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/TVshows" className="hover:underline">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:underline">
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
