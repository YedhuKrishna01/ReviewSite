import React, { useRef } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function TVshowBody() {
  const movieSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <div className="rounded-3xl flex flex-col justify-center items-center text-white mt-3">
        <div className="h-auto w-full flex flex-col gap-y-4 md:gap-y-6 items-center top-52 left-0">
          <div className=" mt-3 flex w-10/12 items-center relative">
            <div className="w-full mb-8 tablet:mb-14 laptop:mb-20 desktop:mb-14 tv:mb-20 flex flex-col desktop:grid desktop:grid-cols-2 gap-y-4 tablet:gap-y-10 laptop:gap-y-14 desktop:gap-10">
              {/* House of the dragons S2 */}

              <Link
                to="/HOTDReview"
                className="homeIntro rounded-lg p-2 tablet:p-4 laptop:p-6 desktop:p-4 w-full"
              >
                <article className="p-3 space-x-4 items-start flex">
                  <img
                    src="/hotd.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none tablet:w-32 laptop:w-44 desktop:w-32 rounded-lg"
                  />
                  <div className="min-w-0 laptop:pl-3 relative flex-auto">
                    <h2 className="font-semibold text-base tablet:text-2xl laptop:text-4xl desktop:text-2xl truncate sm:pr-20">
                      House of the Dragon (S2)
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs tablet:text-base laptop:text-xl desktop:text-sm tablet:w-10/12 leading-6 tablet:leading-9 laptop:leading-10 desktop:leading-[2rem] font-light">
                      <div className="hidden tablet:flex absolute top-28 left-0 laptop:top-32 desktop:top-40 laptop:left-4 items-center space-x-1">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7.75</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-950 rounded">
                          TV-MA
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
                          Fantasy, Drama
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Season || EP</dt>
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
                          S2 || EP8
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 tablet:mt-0 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Matt Smith, Emma D'Arcy
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* Black Out */}

              <Link
                to="/BlackOutReview"
                className="homeIntro rounded-lg p-2 tablet:p-4 laptop:p-6 desktop:p-4 w-full"
              >
                <article className="p-3 space-x-4 items-start flex">
                  <img
                    src="/blackout.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none tablet:w-32 laptop:w-44 desktop:w-32 rounded-lg"
                  />
                  <div className="min-w-0 laptop:pl-3 relative flex-auto">
                    <h2 className="font-semibold text-base tablet:text-2xl laptop:text-4xl desktop:text-2xl truncate sm:pr-20">
                      Black Out
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs tablet:text-base laptop:text-xl desktop:text-sm tablet:w-10/12 leading-6 tablet:leading-9 laptop:leading-10 desktop:leading-[2rem] font-light">
                      <div className="hidden tablet:flex absolute top-28 left-0 laptop:top-32 desktop:top-40 laptop:left-4 items-center space-x-1">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-950 rounded">PG</dd>
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
                          Mystery, Crime
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Season || EP</dt>
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
                          S1 || EP4
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 tablet:mt-0 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">Byun Yo Han, Go Joon</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* Mayor of Kingstown */}

              <Link
                to="/MayorOfKingstownReview"
                className="homeIntro rounded-lg p-2 tablet:p-4 laptop:p-6 desktop:p-4 w-full"
              >
                <article className="p-3 space-x-4 items-start flex">
                  <img
                    src="/mayorofkingstown.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none tablet:w-32 laptop:w-44 desktop:w-32 rounded-lg"
                  />
                  <div className="min-w-0 laptop:pl-3 relative flex-auto">
                    <h2 className="font-semibold text-base tablet:text-2xl laptop:text-4xl desktop:text-2xl truncate sm:pr-20">
                      Mayor of Kingstown (S3)
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xstablet:text-base laptop:text-xl desktop:text-sm tablet:w-10/12 leading-6 tablet:leading-9 laptop:leading-10 desktop:leading-[2rem] font-light">
                      <div className="hidden tablet:flex absolute top-28 left-0 laptop:top-32 desktop:top-40 laptop:left-4 items-center space-x-1">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7.12</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-950 rounded">
                          TV-MA
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
                          Drama, Crime
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Season || EP</dt>
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
                          S3 || EP10
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 tablet:mt-0 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Jeremy Renner, Kyle Chandler
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* Presumed Innocent  */}

              <Link
                to="/PresumedInnocentReview"
                className="homeIntro rounded-lg p-2 tablet:p-4 laptop:p-6 desktop:p-4 w-full"
              >
                <article className="p-3 space-x-4 items-start flex">
                  <img
                    src="/presumedinnocent.jpg"
                    loading="lazy"
                    decoding="async"
                    alt="the beast within"
                    width="100"
                    height="88"
                    className="flex-none tablet:w-32 laptop:w-44 desktop:w-32 rounded-lg"
                  />
                  <div className="min-w-0 laptop:pl-3 relative flex-auto">
                    <h2 className="font-semibold text-base tablet:text-2xl laptop:text-4xl desktop:text-2xl truncate sm:pr-20">
                      Presumed Innocent
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs tablet:text-base laptop:text-xl desktop:text-sm tablet:w-10/12 leading-6 tablet:leading-9 laptop:leading-10 desktop:leading-[2rem] font-light">
                      <div className="hidden tablet:flex absolute top-28 left-0 laptop:top-32 desktop:top-40 laptop:left-4 items-center space-x-1">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7.75</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-950 rounded">
                          TV-MA
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
                          Drama, Mystery
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Season || EP</dt>
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
                          S1 || EP8
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 tablet:mt-0 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Jake Gyllenhaal, Ruth Negga
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* Sweet Home S3 */}

              <Link
                to="/SweetHomeReview"
                className="homeIntro rounded-lg p-2 tablet:p-4 laptop:p-6 desktop:p-4 w-full"
              >
                <article className="p-3 space-x-4 items-start flex">
                  <img
                    src="/sweethome.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none tablet:w-32 laptop:w-44 desktop:w-32 rounded-lg"
                  />
                  <div className="min-w-0 laptop:pl-3 relative flex-auto">
                    <h2 className="font-semibold text-base tablet:text-2xl laptop:text-4xl desktop:text-2xl truncate sm:pr-20">
                      Sweet Home (S3)
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs tablet:text-base laptop:text-xl desktop:text-sm tablet:w-10/12 leading-6 tablet:leading-9 laptop:leading-10 desktop:leading-[2rem] font-light">
                      <div className="hidden tablet:flex absolute top-28 left-0 laptop:top-32 desktop:top-40 laptop:left-4 items-center space-x-1">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7.25</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-950 rounded">
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
                          Fantasy, Drama
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Season || EP</dt>
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
                          S3 || EP8
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 tablet:mt-0 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                          Song Kang, Lee Si-young
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>

              {/* X-men '97 */}

              <Link
                to="/Xmen1997Review"
                className="homeIntro rounded-lg p-2 tablet:p-4 laptop:p-6 desktop:p-4 w-full"
              >
                <article className="p-3 space-x-4 items-start flex">
                  <img
                    src="/xmen.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    width="100"
                    height="88"
                    className="flex-none tablet:w-32 laptop:w-44 desktop:w-32 rounded-lg"
                  />
                  <div className="min-w-0 laptop:pl-3 relative flex-auto">
                    <h2 className="font-semibold text-base tablet:text-2xl laptop:text-4xl desktop:text-2xl truncate sm:pr-20">
                      X-men '97
                    </h2>
                    <dl className="mt-2 flex flex-wrap text-xs tablet:text-base laptop:text-xl desktop:text-sm tablet:w-10/12 leading-6 tablet:leading-9 laptop:leading-10 desktop:leading-[2rem] font-light">
                      <div className="hidden tablet:flex absolute top-28 left-0 laptop:top-32 desktop:top-40 laptop:left-4 items-center space-x-1">
                        <dt className="text-red-800">
                          <span className="sr-only">Star rating</span>
                          <svg width="16" height="20" fill="currentColor">
                            <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                          </svg>
                        </dt>
                        <dd>7</dd>
                      </div>
                      <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-2 ring-1 ring-red-950 rounded">
                          TV-14
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
                          Sci-Fi, Fantasy
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Season || EP</dt>
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
                          S1 || EP10
                        </dd>
                      </div>
                      <div className="flex-none w-full mt-2 tablet:mt-0 font-normal text-nowrap overflow-hidden">
                        <dt className="sr-only">Cast</dt>
                        <dd ref={movieSectionRef} className="text-slate-400">
                          Ray Chase, Cal Dodd
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Link>
            </div>
          </div>
          {/* Navigate to TV shows */}
        </div>
      </div>
    </div>
  );
}

export default TVshowBody;
