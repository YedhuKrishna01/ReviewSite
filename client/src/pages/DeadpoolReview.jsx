import React, { useState } from "react";
import Navbar from "../components/Navbar";

function DeadpoolReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/Deadpool.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Deadpool & Wolverine</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 9
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 8
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          The highly anticipated Deadpool & Wolverine marks the 34th entry in
          the Marvel Cinematic Universe (MCU). Directed by Shawn Levy, the film
          stars Ryan Reynolds as Deadpool and sees Hugh Jackman return as
          Wolverine. Together, they bring a unique blend of action, humor, and
          emotional weight, making it a standout in the rapidly growing Marvel
          franchise. For those concerned that Deadpool’s integration into the
          MCU would water down his character—fear not. The film retains the same
          level of irreverence, vulgarity, and violence that fans loved in the
          previous two films, with the MCU’s influence doing nothing to diminish
          its edge.
          <br />
          Without giving away any spoilers, the story begins with Wade Wilson
          (Deadpool) living a mundane post-mercenary life. However, his peace is
          disrupted when the Time Variance Authority (TVA) apprehends him and
          forces him into a mission involving multiverse travel. His objective?
          To locate a variant of Wolverine to help stabilize his crumbling
          timeline. This sets the stage for a thrilling, chaotic journey filled
          with multiverse madness and unforgettable character moments.
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              The chemistry between Ryan Reynolds and Hugh Jackman is electric.
              Reynolds' portrayal of Deadpool is as irreverent and sharp-witted
              as ever, delivering perfectly timed quips with his signature
              self-awareness and frequent fourth-wall breaks. Jackman’s gruff,
              no-nonsense Wolverine is the perfect foil to Deadpool’s manic
              energy, and their dynamic is the core of the film, fueling both
              its comedic and emotional beats.
              <br /> The supporting cast brings depth and variety, with standout
              performances from Emma Corrin, Morena Baccarin, Rob Delaney,
              Leslie Uggams, Aaron Stanford, and Matthew Macfadyen. Corrin, in
              particular, adds a layer of intensity and intrigue, elevating the
              narrative with her compelling portrayal.
              <br /> Shawn Levy’s direction is sharp and assured, seamlessly
              balancing the film’s varying tones. The screenplay—co-written by
              Levy, Reynolds, Rhett Reese, Paul Wernick, and Zeb Wells—is a
              masterclass in blending humor with high-stakes drama. The dialogue
              is witty and authentic, staying true to the characters while
              pushing them into fresh, challenging situations.
              <br />
              The action sequences are thrilling and meticulously choreographed,
              highlighting the contrasting fighting styles of Deadpool and
              Wolverine. The visual effects, particularly in the multiverse
              sequences, are top-notch, delivering imaginative, visually
              stunning scenes. The smooth fusion of CGI and practical effects
              creates an immersive and visually cohesive experience.
              <br /> Humor is a constant throughout, with Reynolds delivering
              sharp one-liners and meta-jokes that keep the audience laughing.
              However, the film also explores deeper emotional themes. The
              evolving bond between Deadpool and Wolverine offers touching
              moments of connection and reflection amid the chaos, adding heart
              to the narrative.
              <br /> At its core, the film tackles themes of redemption,
              friendship, and second chances. Both Deadpool and Wolverine,
              haunted by their pasts, embark on a journey that forces them to
              confront their demons and seek peace. This emotional depth
              elevates the film beyond standard superhero fare, making it a more
              poignant experience.
              <br /> The pacing is brisk and engaging, with a well-structured
              narrative that holds viewers' attention from start to finish. The
              film deftly balances multiple plot threads, ensuring that each
              character arc is given ample attention. Despite the complexity of
              multiverse travel and numerous character interactions, Levy's
              direction keeps the story coherent and easy to follow.
            </>
          )}
        </div>
      </div>

      {/* Button to shrink and expand the review */}

      <div className="flex justify-center mt-5">
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

export default DeadpoolReview;
