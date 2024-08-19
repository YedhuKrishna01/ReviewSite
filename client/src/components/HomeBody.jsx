import React, { useRef } from "react";
import "../styles/home.css";
import HomeMovieList from "./HomeMovieList";
import HomeSeries from "./HomeSeries";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <div>
      <div className="h-64 flex flex-col justify-center items-center relative text-white">
        <div className="text-3xl text-center font-semibold">
          Hello, fellow movie fanatics
        </div>
        <div className="text-xl font-thin">
          Some subtext here for the intro.
        </div>
        <div className="absolute h-auto w-full flex flex-col gap-y-4 md:gap-y-6 items-center top-52 left-0">
          <div className="text-xl w-10/12 font-semilight text-center">
            Latest Reviews
          </div>
          <div className="flex w-10/12 items-center relative">
            <div className="w-full flex flex-col gap-y-4">
              {/* deadpool & wolverine */}

              <Link
                to="/DeadpoolReview"
                className="homeIntro rounded-lg p-2 w-full"
              >
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/Deadpool.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-base text-slate-900 truncate sm:pr-20 dark:text-slate-100">
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
                        <dd>8</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          R-rated
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
                          Action, Comedy
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
              </Link>

              {/* It Ends With Us */}

              <Link
                to="/ItendswithusReview"
                className="homeIntro rounded-lg p-2 w-full"
              >
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/itendswithus.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-base text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                      It Ends With Us
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs leading-6 font-light">
                      <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7</dd>
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
                          Romance, New Adult
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
                          2h 11m
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Blake Lively, Justin Baldoni
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* Badboys */}

              <Link
                to="/BadboysReview"
                className="homeIntro rounded-lg p-2 w-full"
              >
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/badboys.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-base text-slate-900 truncate sm:pr-20 dark:text-slate-100">
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
                        <dd>7.25</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          R-rated
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
                          Comedy, Thriller
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
              </Link>

              {/* The Beast Within  */}

              <Link
                to="/ThebeastwithinReview"
                className="homeIntro rounded-lg p-2 w-full"
              >
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/beast.jpg"
                    loading="lazy"
                    decoding="async"
                    alt="the beast within"
                    width="100"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-base text-slate-900 truncate sm:pr-20 dark:text-slate-100">
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
                        <dd>6.5</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          R-rated
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
                          Folk Horror, Thriller
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
              </Link>

              {/* Longlegs */}

              <Link
                to="/LonglegsReview"
                className="homeIntro rounded-lg p-2 w-full"
              >
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/longlegs.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-base text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                      Longlegs
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs leading-6 font-light">
                      <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>8.25</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          R-rated
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
                          Horror, Thriller
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
                          1h 26m
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Maika Monroe, Nicolas Cage
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* Inside Out 2 */}

              <Link
                to="/InsideoutReview"
                className="homeIntro rounded-lg p-2 w-full"
              >
                <article className="p-3 space-x-4 items-start sm:space-x-6 lg:space-x-4 xl:space-x-6 flex">
                  <img
                    src="/insideout.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none rounded-lg"
                  />
                  <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-base text-slate-900 truncate sm:pr-20 dark:text-slate-100">
                      Inside Out 2
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs leading-6 font-light">
                      <div className="hidden absolute top-0 right-0 sm:flex items-center space-x-1 dark:text-slate-100">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7</dd>
                      </div>
                      <div className="dark:text-slate-200">
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-800 rounded dark:ring-red-950">
                          PG
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
                          Drama, Comedy
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
                          1h 37m
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Amy Poehler, Maya Hawke
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>
            </div>
          </div>

          {/* More Movies */}

          <HomeMovieList />

          {/* Navigate to TV shows */}

          <HomeSeries />
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
