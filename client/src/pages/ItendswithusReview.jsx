import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function ItendswithusReview() {
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
            src="/itendswithus.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              It Ends With Us
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 6
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 7
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          It Ends with Us, directed by Justin Baldoni and adapted from Colleen
          Hoover’s best-selling novel, had the potential to deliver a poignant
          exploration of love, trauma, and resilience. However, despite its
          strong source material and a star-studded cast, the film ultimately
          falls short, leaving viewers with a disappointing and somewhat
          superficial experience.
          <br />
          <br /> A significant issue lies in the adaptation. The novel, praised
          for its raw and honest depiction of domestic abuse and the complex
          emotions surrounding such relationships, loses much of its impact in
          the film. Christy Hall’s screenplay attempts to compress a deeply
          emotional and layered narrative into a two-hour runtime, but in doing
          so, it strips away much of the depth and nuance that made the book so
          compelling.The pacing of the film feels rushed, particularly in the
          development of Lily and Ryle’s relationship. What starts with initial
          charm and chemistry quickly escalates, leaving little space for the
          audience to fully grasp the complexities of their bond. Ryle’s
          character remains largely underexplored beyond his surface-level
          appeal, and when his darker side emerges, it feels more like a plot
          contrivance than a naturally unfolding character trait, robbing the
          story of its emotional depth.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Blake Lively, cast as Lily Bloom, brings her usual grace and
              screen presence to the role, but struggles to convey the emotional
              depth required for such a layered character. Lily’s internal
              conflict—her deep love for Ryle and her fear of becoming ensnared
              in an abusive relationship—is essential to the narrative.
              Unfortunately, while Lively’s performance is sincere, it lacks the
              intensity and vulnerability needed to truly capture Lily’s
              emotional journey, leaving much of her struggle feeling muted.
              <br />
              <br />
              Justin Baldoni, who also directs, takes on the role of Ryle
              Kincaid, a charming neurosurgeon with a dangerous edge. His
              portrayal of Ryle, however, lacks nuance; the shift from loving
              boyfriend to abusive partner feels abrupt and unconvincing. The
              absence of a gradual character development diminishes the
              emotional impact of the film’s key moments, which feel more forced
              than inevitable.
              <br />
              <br />
              Brandon Sklenar plays Atlas Corrigan, Lily’s childhood friend and
              potential love interest, and though he brings warmth to the role,
              his character is woefully underdeveloped. Atlas, meant to serve as
              a beacon of hope and contrast to Ryle, is sidelined, reducing his
              character to little more than a narrative tool rather than a fully
              realized person with depth and complexity.
              <br />
              <br /> Supporting roles from Jenny Slate and Hasan Minhaj provide
              light moments as Allysa and Marshall, but their characters feel
              like peripheral additions rather than integral to the storyline.
              While their presence adds some levity, their contributions do
              little to enhance the film’s emotional weight.
              <br />
              <br /> Baldoni’s direction, while competent, struggles to capture
              the emotional gravity necessary for a story centered around such
              heavy themes. The film’s tone wavers inconsistently between
              lighthearted romance and intense drama, creating an uneven
              narrative that makes it difficult for the audience to fully invest
              in the characters or their struggles. This tonal inconsistency
              disrupts the emotional arc of the film, leaving viewers uncertain
              about how to feel in crucial moments.
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

export default ItendswithusReview;
