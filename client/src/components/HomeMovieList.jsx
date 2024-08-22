import { useRef, useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

function HomeMovieList() {
  const slideRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Creating a small movie database that should be displayed on the site

  const movies = [
    {
      title: "Aadujeevitham",
      year: 2024,
      duration: "2hr 52m",
      image: "/goatlife.jpg",
      siteName: "Aadujeevitham",
    },
    {
      title: "Tarrot",
      year: 2024,
      duration: "1hr 32m",
      image: "/tarrot.jpg",
      siteName: "Tarrot",
    },
    {
      title: "Shaitaan",
      year: 2024,
      duration: "2hr 08m",
      image: "/shaitaan.jpg",
      siteName: "Shaitaan",
    },
    {
      title: "Single in Seoul",
      year: 2023,
      duration: "1hr 43m",
      image: "/singleinseoul.jpg",
      siteName: "SingleInSeoul",
    },
    {
      title: "Kingdom of the Planet of the Apes",
      year: 2024,
      duration: "2hr 25m",
      image: "/kingdomofapes.jpg",
      siteName: "KingdomofthePlanetoftheApes",
    },
    {
      title: "The Intern",
      year: 2015,
      duration: "2hr 01m",
      image: "/intern.jpg",
      siteName: "TheIntern",
    },
    {
      title: "Dear Zindagi",
      year: 2016,
      duration: "2hr 31m",
      image: "/dearzindagi.jpg",
      siteName: "DearZindagi",
    },
    {
      title: "A Song from the Dark",
      year: 2023,
      duration: "1hr 45m",
      image: "/asongfromthedark.jpg",
      siteName: "ASongfromtheDark",
    },
    {
      title: "Gifted",
      year: 2017,
      duration: "1hr 41m",
      image: "/gifted.jpg",
      siteName: "Gifted",
    },
    {
      title: "Jailer",
      year: 2023,
      duration: "2hr 45m",
      image: "/jailer.jpg",
      siteName: "Jailer",
    },
    {
      title: "Top Gun: Maverick",
      year: 2022,
      duration: "2hr 11m",
      image: "/maverick.jpg",
      siteName: "TopGunMaverick",
    },
    {
      title: "Avatar: The Way of Water",
      year: 2022,
      duration: "2hr 32m",
      image: "/avatar2.jpg",
      siteName: "Avatar2",
    },
  ];

  // Filter the movies based on search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Creating slides with 4 movies per slide
  const slides = [];
  for (let i = 0; i < filteredMovies.length; i += 4) {
    slides.push(filteredMovies.slice(i, i + 4));
  }

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
      <div className="flex mt-6 justify-center">
        <input
          className="rounded-md w-10/12 bg-transparent border-[1px] border-white p-2 placeholder:text-sm placeholder:pl-2 placeholder:text-zinc-300 text-sm"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="text-center">More Movies</div>

      <div className="w-full h-[28rem] mt-[-3vh] flex slider" ref={slideRef}>
        {slides.map((slide, index) => (
          <div
            className="w-full grid grid-cols-2 gap-4 slides p-6 rounded-lg"
            key={index}
            style={{ gridTemplateRows: "repeat(2, 1fr)" }}
          >
            {slide.map((movie, idx) => (
              <Link
                to={movie.siteName + "Review"}
                className="rounded-lg relative"
                key={idx}
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "12rem",
                }}
              >
                <div className="absolute cardText w-full bottom-0 left-0 rounded-b-lg pb-1">
                  <div className="text-xs font-semibold whitespace-nowrap overflow-x-hidden text-ellipsis px-1 pt-2">
                    {movie.title}
                  </div>
                  <div className="flex pt-1">
                    <div className="text-xs px-1">{movie.year}</div>
                    <div className="text-xs px-1">{movie.duration}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeMovieList;
