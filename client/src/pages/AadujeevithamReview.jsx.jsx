import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function AadujeevithamReview() {
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
            src="/goatlife.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Aadujeevitham
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 9.6
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 9
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8.6
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 6
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 8.3
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          Unimaginable are the ways in which adversities can reshape a human
          being. The physical transformation is the most obvious of these. But,
          Blessy’s Aadujeevitham — based on the real-life story of a man who
          ends up living in slave-like conditions in a goat farm in the middle
          of a desert — deals with much more than this. For instance, it is
          interesting how the film treats the ill-fated man’s struggles with
          language. Initially, when Najeeb (Prithviraj Sukumaran) lands up with
          a younger compatriot at a Saudi airport, one sees him struggling to
          communicate in any language other than Malayalam. This also has a huge
          role to play in the unfortunate turn their life takes afterwards.
          <br />
          <br />
          Later, after years of herding goats and camels in the farm, and with
          no human interaction (other than the abusive words from his ‘owner’),
          he loses the only language he knew, almost bleating like a goat when
          he sees his long-lost friend. Aadujeevitham, which otherwise is mostly
          filled with extreme suffering and heightened emotions, has a few such
          delicate touches. One of the others being an emaciated Najeeb finding
          enough time to savour a bath after long years, in the small window of
          time that he got to escape from the farm.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Benyamin’s book, one of the most read books in Malayalam, on which
              the film is based, drowns itself in suffering almost to the level
              of monotony. The film sticks to the basic text, except for a few
              changes, especially in how it stays clear of the way Najeeb deals
              with his sexual urges.Blessy, a filmmaker who has a knack for
              pushing the emotional levers over the maximum limit, attempts the
              same here. Indeed, there are some genuinely moving sequences, but
              at the same time, there are quite a lot that leave one untouched,
              despite all the obvious hardships in depicting them on screen.
              Some of these repetitive sequences leave one with a sense of
              emptiness that a person who trudges up a sand dune feels as he
              sees yet another expanse of sand extending till the horizon,
              instead of that expected sign of life.
              <br />
              <br />
              Amid all the expansive shots of the blazing hot desert, massive
              sandstorms and the rather inconsequential humans who are reduced
              to a mere dot, Prithviraj holds his own with some remarkable
              physical and emotional transformation to become a character who
              went through unbelievable suffering. He does things that can only
              be done by internalising the character — something he is often
              accused of not doing — and pulls off perhaps the best performance
              of his career.
              <br />
              <br />
              AR Rahman, in his rare work for a Malayalam movie, comes up with a
              soundtrack that suits the theme and setting, with ‘Periyone’ and
              its various iterations being the high points. The few sequences of
              Najeeb’s life back home are strictly functional, except for that
              breathtaking shift from the river to the desert at the end of a
              song. Amala Paul gets a role so short that leaves no scope for
              performance.If hard work were the sole benchmark for a film,
              Aadujeevitham would rank right up there among the best. And, quite
              a lot of the hard work does pay off too. Yet, it leaves one with
              the wish that the script had enough to break the monotony that
              sets in at some points.
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

export default AadujeevithamReview;
