import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function BadboysReview() {
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
            src="/badboys.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Bad Boys: Ride or Die
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 7
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
              Overall : 7.25
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          "Bad Boys Ride or Die" dazzles with its larger-than-life action
          sequences, constantly raising the stakes and delivering
          adrenaline-fueled moments that keep viewers hooked. The prison fight
          scene stands out with its brutal, high-intensity violence, keeping
          audiences riveted. A helicopter sequence is especially gripping,
          overflowing with suspense and ensuring total viewer engagement. The
          film's final act is its crowning achievement, featuring explosive yet
          grounded action that leads to a thoroughly satisfying conclusion.
          <br />
          <br />
          Cinematography plays a key role in making the action unforgettable, as
          directors Adil and Bilall infuse the film with a distinct and
          immersive visual style. One standout moment features Will Smith’s
          character wielding a gun, as the perspective shifts seamlessly from
          first-person to second-person mid-action, evoking the feel of a video
          game. The directors also pay tribute to Michael Bay with signature
          low-angle rotating shots, blending homage with their own creative
          flair.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              The chemistry between Will Smith and Martin Lawrence is a standout
              feature, as the two effortlessly play off each other with
              impeccable comedic timing and a palpable sense of camaraderie.
              Their playful banter and strong friendship are convincingly
              portrayed, giving the film its heart. Smith’s character takes
              center stage with a deeper exploration of his internal struggles,
              allowing him to flex his dramatic acting chops while still shining
              in his action-hero moments. Despite this shift in focus, the film
              never loses its balance, as Smith remains as charismatic and
              engaging as ever. Dennis Greene, who plays Reggie, steals the
              spotlight in his scenes, delivering some of the film's most
              memorable moments and drawing the loudest cheers from the
              audience.
              <br />
              <br /> One notable flaw in *Bad Boys Ride or Die* is its uneven
              use of comedic relief. While the film has its share of genuinely
              funny moments, some jokes miss the mark. For instance, a scene
              involving Martin Lawrence and a gator falls flat, leading to
              awkward silence in the theater. This problem arises throughout the
              movie, with certain jokes overstaying their welcome or feeling
              unnecessary. The film struggles to strike the right balance
              between humor and tension, occasionally resulting in awkward
              pacing. A more restrained approach to the comedy would have
              heightened the impact of the film’s more intense moments.
              <br />
              <br /> Another issue is the character change for Martin Lawrence’s
              character, which feels contrived and seems like an excuse to use
              visual effects. This change makes the film feel more animated and
              out of place for a buddy cop movie. The closest comparison would
              be Tyrese’s character in “Fast 9,” which also felt out of sync
              with the rest of the film. A scene involving Lawrence and some
              juice, for example, feels silly and unnecessary, more suited for a
              blooper reel than the final cut.
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

export default BadboysReview;
