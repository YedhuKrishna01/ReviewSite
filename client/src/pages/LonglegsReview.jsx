import React, { useState } from "react";
import Navbar from "../components/Navbar";

function LonglegsReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/longlegs.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">The Beast Within</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 9
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 8.25
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          Osgood Perkins‘ Longlegs is a masterclass in horror and thriller
          filmmaking. It blends atmospheric tension with a deeply unsettling
          narrative that haunts long after the credits roll. With Nicolas Cage
          and Maika Monroe starring as the leads, the film delivers a chilling
          exploration of occultism, psychological terror, and the insidious
          nature of evil. Set against the eerie backdrop of 1970s and 1990s
          Oregon, Longlegs opens with an unforgettable sequence that sets the
          tone for the entire film. A little girl with a Polaroid camera follows
          a mysterious voice into the woods, only to encounter the grotesque
          figure of Longlegs, played with unnerving intensity by Nicolas Cage.
          This scene, steeped in foreboding and dread, introduces us to the
          film’s central antagonist, whose presence looms large over the
          narrative.
          <br />
          <br />
          The film then shifts to the 1990s, where Maika Monroe’s Lee Harker, a
          newly recruited FBI agent, is introduced. Monroe’s portrayal of Harker
          is compelling, blending vulnerability with a steely determination. Her
          character’s inexplicable intuition and possible clairvoyance add a
          supernatural layer to the investigation of a series of brutal
          murder-suicides, each linked by cryptic, Satanic messages signed by
          Longlegs. The narrative intricately weaves together past and present,
          gradually revealing the connections between Lee, the mysterious
          Longlegs, and the horrific events she is tasked with investigating.
          The plot’s complexity is a testament to Perkins’ skill as a
          storyteller. He maintains suspense and delivering well-timed twists
          that keep the audience engaged.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Nicolas Cage’s performance as Longlegs is nothing short of
              mesmerizing. His portrayal of the disfigured, erratic antagonist
              is both terrifying and captivating, embodying a palpable sense of
              malevolence. Cage’s ability to switch between moments of calm,
              almost tender menace, and explosive violence is a highlight of the
              film. He makes Longlegs a memorable and genuinely frightening
              villain. Maika Monroe shines as Lee Harker, delivering a nuanced
              performance that captures the character’s internal struggle and
              growing realization of her connection to Longlegs. Monroe’s
              chemistry with Blair Underwood’s Carter, her skeptical yet
              supportive supervisor, adds depth to the narrative, grounding the
              supernatural elements in a believable investigative partnership.
              <br />
              <br />
              The supporting cast, including Alicia Witt as Lee’s mother Ruth,
              Michelle Choi-Lee, and Dakota Daulby, all contribute to the film’s
              immersive atmosphere. Witt, in particular, stands out in her
              portrayal of Ruth. Her transformation from a seemingly oblivious
              mother to a pivotal player in Longlegs’ scheme is both shocking
              and heartbreaking. Perkins’ direction is masterful, utilizing a
              slow-burn approach to build tension and unease. The film’s visual
              style enhances the sense of dread. The use of lighting and shadow,
              combined with an evocative score, creates a hauntingly immersive
              experience.
              <br />
              <br />
              Perkins’ attention to detail is evident in the film’s symbolic
              imagery and the recurring motifs of dolls and Polaroid
              photographs. These serve as unsettling reminders of Longlegs’
              influence. Longlegs delves into themes of trauma, familial bonds,
              and the nature of evil. The film’s exploration of Satanic rituals
              and occult symbolism adds a layer of existential horror. It’ll
              make you question the boundaries between free will and malevolent
              influence. Lee’s journey from FBI agent to confronting her dark
              past and familial connections to Longlegs adds depth to the film.
              <br />
              <br />
              The film also raises intriguing questions about the nature of
              clairvoyance and intuition. It positions Lee’s abilities as both a
              gift and a curse. Her relationship with her mother mirrors this
              duality.
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

export default LonglegsReview;
