import { useRef } from "react";
import "../styles/home.css";

function HomeMovieList() {
  const slideRef = useRef(null);

  const scrollLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: -slideRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: slideRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-10/12 homeIntro mt-4 rounded-lg text-xl flex flex-col gap-y-4 font-semilight relative">
      <button
        className="text-white flex justify-center items-center scrollButton rounded-full absolute top-[55%] right-[94%] z-10"
        onClick={scrollLeft}
      >
        {"<"}
      </button>
      <button
        className="text-white flex justify-center items-center scrollButton rounded-full absolute top-[55%] left-[94%] z-10"
        onClick={scrollRight}
      >
        {">"}
      </button>
      <div className="flex mt-8 justify-center">
        <input
          className="rounded-md bg-transparent border-[1px] border-gray-400 p-2 placeholder:text-sm placeholder:pl-2 text-sm"
          placeholder="Search..."
        />
      </div>
      <div className="text-center">More Movies</div>

      <div className="w-full mt-[-2vh] flex slider" ref={slideRef}>
        <div className="w-full grid grid-cols-2 gap-4 slides p-6 rounded-lg">
          {/* kingdom of the planet of the apes */}

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

          {/* The Intern */}

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

          {/* Dear Zindagi */}

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

          {/* A Song from the Dark */}

          <div className="rounded-lg card4 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                A Song from the Dark
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2023</div>
                <div className="text-xs px-1">1hr 45m</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 slides p-6 rounded-lg">
          {/* The Goat Life */}

          <div className="rounded-lg card5 relative">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Aadujeevitham
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2024</div>
                <div className="text-xs px-1">2hr 52m</div>
              </div>
            </div>
          </div>

          {/* Tarrot  */}

          <div className="rounded-lg card6 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Tarrot
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2024</div>
                <div className="text-xs px-1">1hr 32m</div>
              </div>
            </div>
          </div>

          {/* Shaitaan */}

          <div className="rounded-lg card7 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Shaitaan
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2024</div>
                <div className="text-xs px-1">2hr 08m</div>
              </div>
            </div>
          </div>

          {/* Single in Seoul  */}

          <div className="rounded-lg card8 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Single in Seoul
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2023</div>
                <div className="text-xs px-1">1hr 43m</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 slides p-6 rounded-lg">
          {/* Gifted */}

          <div className="rounded-lg card9 relative">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Gifted
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2017</div>
                <div className="text-xs px-1">1hr 41m</div>
              </div>
            </div>
          </div>

          {/* Jailer  */}

          <div className="rounded-lg card10 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Jailer
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2023</div>
                <div className="text-xs px-1">2hr 45m</div>
              </div>
            </div>
          </div>

          {/* Maverick */}

          <div className="rounded-lg card11 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Top Gun: Maverick
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2022</div>
                <div className="text-xs px-1">2hr 11m</div>
              </div>
            </div>
          </div>

          {/* Avatar 2  */}

          <div className="rounded-lg card12 relative pt-48">
            <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
              <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                Avatar: The Way of Water
              </div>
              <div className="flex pt-1">
                <div className="text-xs px-1">2022</div>
                <div className="text-xs px-1">2hr 32m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMovieList;
