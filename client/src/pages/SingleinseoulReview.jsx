import React, { useState } from "react";
import Navbar from "../components/Navbar";

function ShaitaanReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/shaitaan.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Shaitaan</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 8.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 9
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 8.5
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          The story of Shaitaan revolves around a family of four. Ajay Devgn
          essays the role of Kabir, a hard-working CA who loves his family a
          lot. Jyothika is seen in the role of his caring wife, Jyoti. Janki
          Bodiwala and Anngad Raaj, who were also a part of the Gujarati film,
          essay the role of their daughter and son. Things take a drastic turn
          in their lives when a strange man named Vanraj (R Madhavan) enters
          their house and hypnotises the daughter into doing everything he says.
          The rest of the film explores how Kabir does everything in his
          capacity to save his kid. The trailer of this 2024 movie looked quite
          promising but the review of Shaitaan might beg to differ.
          <br />
          <br />
          Credit where it is due, Vikas Bahl has a very abstract way of cutting
          the trailers of his movies that make the film look intriguing. He did
          something very similar with Shaitaan which has helped in drawing
          people’s attention to the film. The horror film, which promises
          maximum drama through its first glimpse, has several moments where you
          might find yourself on the edge of your seat, something that you
          expect from a horror movie. The film has been shot well. Considering
          that most of the scenes take place in just one room, the story has so
          many elements that you might not notice the bland screenplay.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              R Madhavan is driving the film with his stellar performance with
              Ajay Devgn sharing a great camaraderie with him. Jyothika, Janki
              and Anngad also did a great job with their roles and delivered
              certain scenes in such an effortless manner that you might end up
              liking the film just because of them. The climax is what makes up
              for the entire dull buildup, so we suggest you sit through the
              film to see what happens in the end.
              <br />
              <br />
              The narrative maintains a good pace and the treatment makes the
              movie gripping for the most part, although things gets a tad
              monotonous in the second half. Albeit not too suspenseful, the
              buildup is unnerving. The story has some unconvincing elements,
              and one scene gives away a pivotal plot point, which makes the
              climax predictable. Cinematographer Sudhakar Reddy Yakkanti excels
              in creating an atmosphere of dread and darkness, further enhanced
              by Amit Trivedi’s music.
              <br />
              <br />
              Even though Shaitaan’s narrative stumbles at times, the masterful
              use of atmosphere and top-notch acting elevate it into an
              unsettling experience worth having.
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

export default ShaitaanReview;
