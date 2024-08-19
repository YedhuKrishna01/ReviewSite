import React, { useState } from "react";
import Navbar from "../components/Navbar";

function ThebeastwithinReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/beast.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">The Beast Within</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 6
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 6
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 6.5
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          The Beast Within follows 10-year-old Willow (Caoilinn Springall), who
          lives deep in the English countryside with her parents. For his debut
          film, Alexander J. Farrell, who co-wrote the script with Greer Taylor
          Ellison, takes an impressive first step in this new foray with a
          production rich with gothic references. It's perfect for a tale about
          lycanthropy. He and cinematographer Daniel Katz do wonders to capture
          the foreboding, beautiful, and sweeping English landscape, with cool
          tones drawing out the dark and creepy energy from the story told.
          <br />
          <br />
          After a series of odd behaviors from her family, she follows them out
          one day and stumbles upon a dark secret that will change everything.
          If the marketing and the film's poster don't make it clear, this is a
          werewolf story, but through the eyes of a young girl. From this
          perspective, we get a story that uses the famous hairy creature as an
          allegory of the beast within our families as it follows Willow's
          family history of abuse and trauma.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Willow spends her days tied to an oxygen tank, reading and
              spending time with her mother and grandfather. Her father (Kit
              Harington), while loving, is somewhat distant, disappearing for
              days every month with the help of her mother, who is always on
              edge. Her mother and grandfather bicker about the truth of the
              situation, but as a girl relegated to being indoors and having to
              entertain herself with her imagination, Willow has sharpened her
              observational skills and seeks the truth. The truth is a terrible
              reality that, while very fantastical, harkens to real-world issues
              about fragile families and dangerous fathers.
              <br />
              <br /> Where The Beast Within stumbles is the writing. As a
              coming-of-age story, it's impressive. The theme is obvious, if a
              little muddled, but it's easy to ascertain what Farrell is
              attempting to accomplish. It's when things take a turn that the
              director loses grip on the narrative, and the delicate layers come
              crashing down.
              <br />
              <br /> This is a horror, but it's too understated due to the
              weight of the family drama. As well shot as this picture is, the
              story is neglected in many ways. Tension is quickly lost, the
              suspense is hardly maintained, and the scares are few and far
              between. Additionally, the characters need more to make them feel
              distinguished, though the actors do more than enough in their
              performances to ground them and give them dimension.
              <br />
              <br />
              Despite narrative flaws, the look and feel of the film are perfect
              for a spooky night in. The cinematography really adds to the
              film's sense of eeriness. This story isn't the flashiest werewolf
              tale, but it is worth seeing thanks to a fresh perspective. As
              flawed as the story may be, the story from a child's eyes offers a
              new and unique entry point for the subgenre. The Beast Within may
              be a decent entry-level film for budding fans of the horror genre.
              The sense of losing sight of who your parents are and losing trust
              in the safety of your home and family is a weighted layer of the
              story. But it's what surrounds this core narrative that doesn't
              fully land.
            </>
          )}
        </div>
      </div>

      {/* Button to shrink and expand the review */}

      <div className="flex justify-center mt-3">
        <button
          onClick={toggleExpand}
          className="text-white border-[1px] text-xs homeIntro rounded-lg px-4 py-2 mb-5 opacity-80 hover:opacity-100"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default ThebeastwithinReview;
