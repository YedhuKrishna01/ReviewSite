import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function InsideoutReview() {
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
            src="/insideout.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Inside Out 2
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-bas mt-3 text-zinc-300 font-medium">
              V-Acting : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-bas mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-bas mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-bas mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-bas mt-3 text-zinc-300 font-medium">
              Overall : 7
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          One of the best things about “Inside Out 2” is how it visualizes new
          concepts. The idea of belief being tied to one’s identity is
          especially interesting. This concept is easy to understand, thanks to
          the visualization of threads coming together. Another fun and engaging
          idea is the introduction of new emotions. These new emotions capture
          the complicated feelings any young teenager might experience during
          puberty. Among the new emotions, Anxiety stands out. She is depicted
          in a way that anyone who has experienced extreme anxiety can relate
          to. The film masterfully shows a balanced take on the effects of these
          emotions. Similar to the first “Inside Out,” it demonstrates that some
          feelings are useful in certain situations and harmful in others. An
          old emotion that shows up occasionally brings instant laughter every
          time she appears.
          <br />
          <br />
          The cameos of other characters are another highlight. Pouchy, for
          example, seems to be an instant fan favorite whenever it appears on
          screen. These characters add extra charm and humor to the film and
          they were great additions.The plot is compelling and creative, giving
          both old and new emotions their own challenges to overcome. This keeps
          the audience engaged, as each challenge brings about an even greater
          one, right up to the end. There are no easy fixes or solutions, making
          the development of the characters even more rewarding. It is
          refreshing to see how even the emotions themselves have to learn new
          things to move forward.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              However, some themes in the movie are communicated a bit too
              straightforwardly. More subtext would have been nice. For example,
              there’s a quick moment in the film that says, “Puberty is messy.”
              While humorous, it could have been a bit more clever and less
              obvious.
              <br />
              <br />
              Additionally, while the emotions learning some lessons were great,
              it can be odd to see them break character at times. This doesn’t
              happen often, but it feels strange when it does. For instance,
              seeing Fear become brave or Sadness become really angry would be
              out of character. These moments make sense for the dramatic effect
              at the time, but they can take away from the essence of the
              characters.
              <br />
              <br />
              All in all “Inside Out 2” is a fantastic, imaginative sequel that
              is a must-see event for all ages. Its heartwarming messages and
              life lessons make it an instant classic. This film is sure to age
              wonderfully over time and has excellent rewatchability. Compared
              to its predecessor, “Inside Out” is still better due to its
              originality. However, “Inside Out 2” manages to be a fun and
              engaging journey despite treading a path already marked out.
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

export default InsideoutReview;
