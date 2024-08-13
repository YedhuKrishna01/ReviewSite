import React, { useRef } from "react";
import "../styles/home.css";
import HomeMovieList from "./HomeMovieList";

function HomeBody() {
  const slideRef = useRef(null);
  const slideRef2 = useRef(null);

  const scrollLeft = () => {
    if (slideRef.current && slideRef2.current) {
      slideRef.current.scrollBy({
        left: -slideRef.current.offsetWidth,
        behavior: "smooth",
      });
      slideRef2.current.scrollBy({
        left: -slideRef2.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (slideRef.current && slideRef2.current) {
      slideRef.current.scrollBy({
        left: slideRef.current.offsetWidth,
        behavior: "smooth",
      });
      slideRef2.current.scrollBy({
        left: slideRef2.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="h-64 flex flex-col justify-center items-center relative text-white">
        <div className="text-4xl font-semibold">Intro text here</div>
        <div className="text-xl font-thin">
          Some subtext here for the intro.
        </div>
        <div className="absolute h-auto w-full flex flex-col gap-y-4 md:gap-y-6 items-center top-52 left-0">
          <div className="text-xl w-10/12 font-lighter">Latest Reviews</div>
          {/* deadpool & wolverine */}
          <div className="flex w-10/12 items-center relative">
            <button
              className="flex justify-center items-center bg-red-950 text-white h-6 w-6 rounded-full absolute right-full mr-1"
              onClick={scrollLeft}
            >
              {"<"}
            </button>
            <div className="slide overflow-hidden w-full flex" ref={slideRef}>
              <div className="homeIntro rounded-lg p-2 w-full">
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/Deadpool.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="80"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-sm text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                      Deadpool & Wolverine
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs leading-6 font-light">
                      <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7.4</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          PG-13
                        </dd>
                      </div>
                      <div className="ml-2">
                        <dt className="sr-only">Year</dt>
                        <dd>2024</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Genre</dt>
                        <dd className="flex items-center">
                          <svg
                            width="2"
                            height="2"
                            fill="currentColor"
                            className="mx-2 text-slate-300"
                            aria-hidden="true"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          Action
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Runtime</dt>
                        <dd className="flex items-center">
                          <svg
                            width="2"
                            height="2"
                            fill="currentColor"
                            className="mx-2 text-slate-300"
                            aria-hidden="true"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          2h 07m
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Hugh Jackman, Ryan Reynolds
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </div>

              {/* Badboys */}

              <div className="homeIntro rounded-lg p-2 w-full">
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/badboys.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="80"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-sm text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                      Bad Boys: Ride or Die
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs leading-6 font-light">
                      <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>6.3</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          PG-13
                        </dd>
                      </div>
                      <div className="ml-2">
                        <dt className="sr-only">Year</dt>
                        <dd>2024</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Genre</dt>
                        <dd className="flex items-center">
                          <svg
                            width="2"
                            height="2"
                            fill="currentColor"
                            className="mx-2 text-slate-300"
                            aria-hidden="true"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          Action
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Runtime</dt>
                        <dd className="flex items-center">
                          <svg
                            width="2"
                            height="2"
                            fill="currentColor"
                            className="mx-2 text-slate-300"
                            aria-hidden="true"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          1h 55m
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Will Smith, Martin Lawrence
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </div>

              {/* The Beast Within  */}

              <div className="homeIntro rounded-lg p-2 w-full">
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/beast.jpg"
                    loading="lazy"
                    decoding="async"
                    alt="the beast within"
                    width="80"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-sm text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                      The Beast Within
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs leading-6 font-light">
                      <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>5.8</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          PG-13
                        </dd>
                      </div>
                      <div className="ml-2">
                        <dt className="sr-only">Year</dt>
                        <dd>2024</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Genre</dt>
                        <dd className="flex items-center">
                          <svg
                            width="2"
                            height="2"
                            fill="currentColor"
                            className="mx-2 text-slate-300"
                            aria-hidden="true"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          Horror
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Runtime</dt>
                        <dd className="flex items-center">
                          <svg
                            width="2"
                            height="2"
                            fill="currentColor"
                            className="mx-2 text-slate-300"
                            aria-hidden="true"
                          >
                            <circle cx="1" cy="1" r="1" />
                          </svg>
                          1h 17m
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Kit Harrington, Ashleigh Cummings
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </div>
            </div>
            <button
              className="flex justify-center items-center bg-red-950 text-white h-6 w-6 rounded-full absolute left-full ml-1"
              onClick={scrollRight}
            >
              {">"}
            </button>
          </div>
          <div
            className="flex flex-nowrap snap-mandatory overflow-x-hidden w-10/12 h-auto mt-5"
            ref={slideRef2}
          >
            <div className="w-full p-6 text-justify homeIntro rounded-lg">
              "Deadpool and Wolverine" is a long awaited cedeu
            </div>
            <div className="w-full p-6 homeIntro rounded-lg">
              "Deadpool ggtehyrjeykukand Wolverine" is a highly anticipated
              crossover that brings together two of Marvel's most beloved
              antiheroes. The film excels in blending Deadpool's irreverent
              humor with Wolverine's gritty intensity, creating a unique dynamic
              that keeps the audience entertained throughout. Ryan Reynolds and
              Hugh Jackman deliver stellar performances, effortlessly bouncing
              off each other with sharp wit and intense action sequences. While
              the plot may lean on familiar superhero tropes, the chemistry
              between the leads and the mix of humor, action, and heart make it
              a must-watch for fans of both characters.
            </div>
            <div className="w-full p-6 homeIntro rounded-lg">
              "Deadpooldvdvdv ggtehyrjeycsacaskukand Wolverine" is a highly
              anticipated crossover that brings together two of Marvel's most
              beloved antiheroes. The film excels in blending Deadpool's
              irreverent humor with Wolverine's gritty intensity, creating a
              unique dynamic that keeps the audience entertained throughout.
              Ryan Reynolds and Hugh Jackman deliver stellar performances,
              effortlessly bouncing off each other with sharp wit and intense
              action sequences. While the plot may lean on familiar superhero
              tropes, the chemistry between the leads and the mix of humor,
              action, and heart make it a must-watch for fans of both
              characters.
            </div>
          </div>
          <HomeMovieList />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
