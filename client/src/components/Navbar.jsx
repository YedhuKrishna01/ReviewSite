import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="grid grid-cols-12 h-20 tablet:h-24 laptop:h-28 pt-6 tablet:pt-10 laptop:pt-12">
        <div className="text-white col-start-2 py-2 font-medium text-2xl tablet:text-4xl laptop:text-5xl">
          <Link className="ml-2" to="/">
            Reseña.
          </Link>
        </div>
        <div className="col-start-10 col-span-2 pt-2 tablet:pt-3 flex justify-end">
          <svg
            onClick={handleIconClick}
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
            className={`transform transition-transform duration-700 tablet:scale-125 laptop:scale-150 ${
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
        <div className="text-white text-sm tablet:text-lg laptop:text-xl w-10/12 py-1 px-3">
          <ul className="space-y-2 tablet:space-y-3 tablet:mt-1">
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
