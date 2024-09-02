import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function ASongfromtheDarkReview() {
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
            src="/asongfromthedark.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              A Song from the Dark
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 6.5
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 7.12
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          “A Song from the Dark,” though majority of the production was done in
          the United Kingdom, however, this is a supernatural horror film of
          African descent. The story follows Isioma Williams, who, after the
          mysterious death of her husband, hires a young lady by the name of
          Ashionye, a reluctant Nigerian shaman (one with power or access to the
          world of living and the dead) living in England, to expel a malevolent
          spirit tormenting her family. As Ashionye delves deeper into the
          family’s troubles, she discovers they are hiding a dark secret that
          complicates her mission.
          <br />
          <br />
          It is a masterpiece that explores themes of African mysticism and
          family secrets, blending horror with cultural elements. And yes, all
          these features were portrayed in a great cinematic performance and
          great picture-perfect quality status. It also cut across the
          conventional boundaries of horror, offering a rich tapestry of African
          culture, traditions, and mythology. This film is a testament to the
          power of storytelling, brought to life through an exceptional cast,
          mesmerizing music, and masterful sound design. The sound and foley
          cannot be iterated enough, being one that pays attention to such extra
          features in film productions, such as effect, cast, and music. The
          music and sound effect all blended perfectly at the right places.
          Great shout-out to the sound man, music and foley team, editors…in
          fact salute to the entire production team.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              The film was written by Ogodinife Okpue, who also directed the
              production. Great effort was put into how the scenes (both present
              and past) blend into each other seamlessly. These flawless
              integration helps the viewer to not only have a fuller picture of
              the film, but also grasp the reason behind some of the actions
              (and inaction) of some of the casts. Great examples of these can
              be cited on why Dare hated the dad so much, and why the same Dare
              seems to be the only person exempted from the evil spirit attack.
              <br />
              <br />
              The movie made good use of the background score to bring an eerie
              ambience along with some surprises. Although there are some
              aspects that could use some improvement such as the dialogue
              delivery in some part as well as transitions to a different scene
              might seem abrupt at some point. But apart from that the movie is
              a must watch to all the horror lovers out there.
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

export default ASongfromtheDarkReview;
