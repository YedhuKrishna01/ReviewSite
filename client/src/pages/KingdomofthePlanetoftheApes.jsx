import React, { useState } from "react";
import Navbar from "../components/Navbar";

function KingdomofthePlanetoftheApesReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/kingdomofapes.jpg" className="h-48 mt-7 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">
              Kingdome of the Planet of the Apes
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7.8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 7.57
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          Kingdom of the Planet of the Apes excels in its portrayal of the ape
          society in various ways. The phenomenal CGI breathes life into these
          creatures and makes them easily believable. Their emotions are
          remarkably clear thanks to the talented actors behind the
          motion-capture suits. Kevin Durand as Proximus is probably my
          favorite. He had me saying “What a wonderful day!” immediately after
          the film.
          <br />
          <br />
          The action sequences in the film are intense and pull you right into
          the heart of the battle. More conflicts would have been nice, but when
          things do escalate, it’s quite engaging. The final action sequence is
          easily the best of the film by far.The world-building is equally
          impressive in “Kingdom of the Planet of the Apes. The post-apocalyptic
          setting is carefully crafted, with detailed set pieces that enhance
          the film’s realism. The story itself is compelling, cleverly weaving
          in creative nods to the franchise’s history and ape culture, all while
          pushing the narrative forward
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              However, the human storyline doesn’t quite measure up to the ape
              narrative. While not terrible, it feels underdeveloped due to a
              lack of in-depth exposition about the current state of humanity.
              We get glimpses of their struggles, but these details are often
              teased rather than explained. A stronger foundation for the human
              characters and their world would have enriched the overall
              experience.
              <br />
              <br />
              The film introduces a captivating villain whose complexity is a
              breath of fresh air. His motivations, while seemingly
              well-intentioned, come at a great cost to the humans. This creates
              a fascinating moral dilemma and has the potential to drive a
              deeper wedge between the villain and the main character.
              Unfortunately, the villain’s arc feels underdeveloped due to
              limited screen time.The pacing can be inconsistent at times. The
              initial introduction of the human character, Freya, feels
              particularly slow, hindering the film’s momentum early on. In
              contrast, the action sequences are masterfully crafted,
              transporting viewers directly into the heart of the conflict.
              <br />
              <br />
              "Kingdom of the Planet of the Apes" remains an enjoyable and
              engaging cinematic experience that solidifies its place among the
              better entries in the franchise. The visual effects are
              groundbreaking, the ape narrative is captivating, and the
              world-building is immersive. Do not feel compelled to rewatch all
              of the previous films. This movie does a good job of recapping the
              previous events enough for you to enjoy. Whether you’re a die-hard
              fan or a newcomer to the franchise, this film offers a worthwhile
              addition to the Planet of the Apes mythology.
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

export default KingdomofthePlanetoftheApesReview;
