import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function TheInternReview() {
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
            src="/intern.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              The Intern
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8.2
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 8.05
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          Writer-director Nancy Meyers has scored a number of commercial
          successes (including It’s Complicated and Something’s Gotta Give) by
          going against the grain and making movies centered on women and aimed
          at older audiences. These films have not always fared as well with
          critics as they have with audiences, and you can expect the same
          divided response to her latest feel-good comedy, The Intern. Box
          office should be healthy, even though the movie offers more
          frustrations than rewards to discerning viewers of any age or gender.
          <br />
          <br />
          On the plus side, the movie benefits from the casting of Robert De
          Niro and especially Anne Hathaway. And the premise has possibilities.
          Hathaway plays Jules Ostin, a high-powered executive at a new fashion
          website, and De Niro is Ben, a senior intern hired to work for her
          after he rejects the idea of retirement. Fortunately, there is no hint
          of romance between the two characters; it’s more of a friendship and
          professional relationship, which turns out to benefit both of them. So
          far, so good, and the supporting cast is also appealing, even if some
          of their roles are very thinly written. But there’s a vacuum at the
          center of the film that becomes increasingly problematic: Jules is, at
          first, reluctant to take on Ben as her intern, but she quickly
          realizes his value, so there isn’t a lot of conflict to enliven this
          central relationship.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              This film bears a resemblance to Baby Boom, a 1987 film co-written
              by Meyers and her former partner, Charles Shyer. In that picture,
              Diane Keaton was a high-flying executive who’s forced to
              re-examine her priorities when she inherits a baby. But the movie
              was a lot funnier and sharper. One of its strengths was that
              Keaton played a more flawed character than the talented and
              vibrant Jules. In addition, Keaton’s character had antagonists in
              a suspicious boss (Sam Wanamaker) and a sneaky co-worker (James
              Spader — who else?). In The Intern, Hathaway’s Jules doesn’t
              really have anyone trying to challenge or undermine her, and that
              means drama often is shortchanged.
              <br />
              <br />
              Given the vacuity of the script, it must be admitted that Hathaway
              achieves something of a triumph. She’s always engaging and keeps
              the character on a human rather than superhuman scale. De Niro has
              demonstrated his flair for comedy in such films as Meet the
              Parents, Analyze This and The King of Comedy, but this role is too
              constricted to allow him to break free. He’s been given a romantic
              interest in Rene Russo (wonderful, as always), who’s a more
              age-appropriate mate than Hathaway. She is still a decade younger
              than De Niro, however, and undeniably glamorous. It’s interesting
              that the film rejects the idea that Ben might have a romance with
              a woman his own age.
              <br />
              <br />
              In conclusion, the film is very much relaxing and exciting at the
              same time. The slow pacing of the movie keeps the audience engaged
              to know how their work relation is going to go from here and then.
              Thus, making the film worth watching and also grants the people
              more reasons to rewatch in the future.
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

export default TheInternReview;
