import React, { useState } from "react";
import Navbar from "../components/Navbar";

function ItendswithusReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/itendswithus.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">It Ends With Us</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 6
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 7
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          It Ends with Us, directed by Justin Baldoni and adapted from Colleen
          Hoover’s best-selling novel, had the potential to deliver a poignant
          exploration of love, trauma, and resilience. However, despite its
          strong source material and a star-studded cast, the film ultimately
          falls short, leaving viewers with a disappointing and somewhat
          superficial experience.
          <br /> A significant issue lies in the adaptation. The novel, praised
          for its raw and honest depiction of domestic abuse and the complex
          emotions surrounding such relationships, loses much of its impact in
          the film. Christy Hall’s screenplay attempts to compress a deeply
          emotional and layered narrative into a two-hour runtime, but in doing
          so, it strips away much of the depth and nuance that made the book so
          compelling.
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              The pacing of the film feels rushed, particularly in the
              development of Lily and Ryle’s relationship. What starts with
              initial charm and chemistry quickly escalates, leaving little
              space for the audience to fully grasp the complexities of their
              bond. Ryle’s character remains largely underexplored beyond his
              surface-level appeal, and when his darker side emerges, it feels
              more like a plot contrivance than a naturally unfolding character
              trait, robbing the story of its emotional depth.
              <br /> Blake Lively, cast as Lily Bloom, brings her usual grace
              and screen presence to the role, but struggles to convey the
              emotional depth required for such a layered character. Lily’s
              internal conflict—her deep love for Ryle and her fear of becoming
              ensnared in an abusive relationship—is essential to the narrative.
              Unfortunately, while Lively’s performance is sincere, it lacks the
              intensity and vulnerability needed to truly capture Lily’s
              emotional journey, leaving much of her struggle feeling muted.
              <br /> Justin Baldoni, who also directs, takes on the role of Ryle
              Kincaid, a charming neurosurgeon with a dangerous edge. His
              portrayal of Ryle, however, lacks nuance; the shift from loving
              boyfriend to abusive partner feels abrupt and unconvincing. The
              absence of a gradual character development diminishes the
              emotional impact of the film’s key moments, which feel more forced
              than inevitable.
              <br />
              Brandon Sklenar plays Atlas Corrigan, Lily’s childhood friend and
              potential love interest, and though he brings warmth to the role,
              his character is woefully underdeveloped. Atlas, meant to serve as
              a beacon of hope and contrast to Ryle, is sidelined, reducing his
              character to little more than a narrative tool rather than a fully
              realized person with depth and complexity.
              <br /> Supporting roles from Jenny Slate and Hasan Minhaj provide
              light moments as Allysa and Marshall, but their characters feel
              like peripheral additions rather than integral to the storyline.
              While their presence adds some levity, their contributions do
              little to enhance the film’s emotional weight.
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
          className="text-white homeIntro rounded-lg px-4 py-2 mb-5 opacity-80 hover:opacity-100"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default ItendswithusReview;
