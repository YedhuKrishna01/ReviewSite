import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function SingleInSeoulReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 laptop:mt-12 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6 laptop:p-10 desktop:p-6 tv:p-8">
          <img
            src="/singleinseoul.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Single in Seoul
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 6.5
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 6.87
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          The story revolves around two people who have different temperament
          and lifestyle. They meet via an essay about single life, and then old
          memories are rekindled, opening the past wounds. Park Yeong-ho (Lee
          Dong-wook) is an instructor and influencer with 300,000 followers, who
          enjoys being single. Joo Hyeon-jin (Im Soo-jung) is Park Yeong-ho's
          college junior and an editor-in-chief of a publishing company and
          in-charge of the essay series titled “Single in the City”
          <br />
          <br />
          Park Ji-yoon writing was not upto the mark but the performance of the
          actors were well received by the audience. It was the actors
          passionate performances that saved the somewhat sloppy story. Park
          Jae-hwan wrote in review that "the film shows the sensibility between
          coldness and passion and does not have the same gap as "Men are from
          Venus, Women are from Mars"." Park praised the performances of Lee
          Dong-wook and Lim Soo-jung, Jang Hyun-seong, Kim Ji-young, Lee Mi-do,
          Ji I-soo, and Lee Sang-i. Park concluded, "It cannot be denied that
          this is a work that reveals the true skills of Myeong Film.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              "Single in Seoul" is a candid portrayal of love and relationships,
              brought to life by an exceptional cast and punctuated by
              heartwarming moments. The film beautifully illustrates how every
              story has multiple perspectives, emphasizing the importance of
              letting go, cherishing fond memories, and embracing new
              opportunities for love. With its blend of humour, warmth, and
              relatable characters, "Single in Seoul" is a delightful cinematic
              experience that will leave audiences smiling.
              <br />
              <br />
              What the movie really lacks is the element of surprise since the
              plot is as cliche as it can be and some of the outcomes are so
              predictable throughout the movie.
              <br />
              <br />
              Even though It may not be the best at it's genre, it indeed put a
              smile on people's face and that's all that matter for a "Feel
              good" movie. Some of the wholesome moments in the movie are
              somewhat realistic and gives the movie a lot of room for coming
              back to those scenes again which is also one of the good thing
              about this movie.
            </>
          )}
        </div>
      </div>

      {/* Button to shrink and expand the review */}

      <div className="flex justify-center mt-3">
        <button
          onClick={toggleExpand}
          className="text-white border-[1px] text-xs tablet:text-base laptop:text-xl desktop:text-xs tv:text-sm homeIntro rounded-lg px-4 py-2 mb-5 opacity-80 hover:opacity-100"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <Recommend />
    </div>
  );
}

export default SingleInSeoulReview;
