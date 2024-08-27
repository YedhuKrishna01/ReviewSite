import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function Xmen1997Review() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/xmen.jpg" className="h-48  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">X-Men '97</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              V-Acting : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 7
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          “X-Men: The Animated Series” may have an enduring impact as meme
          fodder, but to many millennials, the Fox show was a gateway into one
          of Marvel’s most venerable franchises. Before the live-action
          blockbusters of the early aughts, and certainly before the rise of the
          Marvel Cinematic Universe, “The Animated Series” offered a primer on
          mutants as a powerful allegory for marginalized groups, plus iconic
          characters like the saber-clawed Wolverine and telepathic Jean Grey.
          <br />
          <br />
          Due to the intricacies of intellectual property rights, the X-Men have
          been a conspicuous absence from the MCU since its inception in 2008.
          Disney’s acquisition of Fox opened the door for an integration, but
          the Mouse House has been patient in deploying its new assets. The
          animated series “X-Men ‘97” marks the first X-Men title to originate
          from Marvel Studios, the unit captained by power producer Kevin Feige.
          Smartly, the show reintroduces the X-Men on their own terms, rather
          than grafting them onto a pre-existing ensemble. Under head writer
          Beau DeMayo, “X-Men ‘97” is also freed of any obligations to the MCU’s
          continuity. (DeMayo was recently fired from the show, but had
          completed work through an upcoming second season.) As a direct
          follow-up to “The Animated Series” set near the end of the last
          millennium, the show can dedicate its energies to doing right by a
          nostalgia object while introducing itself to a new audience. And as
          off-canon animation, “X-Men ‘97” can take bigger, wilder swings in its
          story, staying true to the fantastical nature of comics writing while
          remaining grounded in characters’ emotions.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              In the finale to “The Animated Series,” Professor Charles Xavier
              was fatally shot by an anti-mutant bureaucrat. Technically, he was
              near-fatally shot and spirited off to an alien world for long-term
              care, but the first three episodes of “X-Men ‘97” simplify that
              background knowledge into the simple fact of Xavier’s absence. An
              X-Men with no Professor X is jarring, but “X-Men ‘97” offers a
              bridge between past and present in a deep bench of returning voice
              actors, including Cal Dodd as Wolverine and Alison Sealy-Smith as
              the weather-controlling Storm. In Xavier’s absence, Cyclops (Ray
              Chase) has uneasily assumed the role of de facto leader, but his
              pregnant wife Jean (Jennifer Hale) thinks the couple should
              consider stepping back from saving humanity to focus on their
              family. Xavier, it turns out, may have agreed. The premiere’s
              final moments reveal the Professor’s chosen heir is his former
              friend and arch-rival Magneto (Matthew Waterson), who agrees to
              adopt a more peaceful vision of mutants’ coexistence with
              humanity.
              <br />
              <br />
              This reversal instantly is enough to give “X-Men ‘97” its own
              identity, though it’s accompanied and followed by a slew of
              storylines that could each anchor their own feature film. Here,
              they’re squeezed into 30-minute increments, as the X-Men face
              obstacles that include Sentinel robots, a weapon that neutralizes
              their powers and a psychic attack engineered by longtime nemesis
              Mr. Sinister (Chris Britton). At one point, it’s casually revealed
              that a major protagonist is actually a clone of themselves; even
              Magneto’s conversion to the X-Men’s side of things is surprisingly
              swift and fuss-free. The pace can be dizzying, but when rendered
              in the pleasantly throwback, neon-colored, two-dimensional style
              of the original, it’s also engaging. There’s no time for things to
              drag when the plot is this packed.
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

export default Xmen1997Review;
