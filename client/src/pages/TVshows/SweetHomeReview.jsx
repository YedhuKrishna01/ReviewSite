import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function SweetHomeReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/sweethome.jpg" className="h-48  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Sweet Home(S3)</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 7.25
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          In a much-anticipated return, ‘Sweet Home’ Season 3 aimed to rectify
          the missteps of its second season and provide a fitting conclusion to
          the popular K-drama. Premiering six months after the divisive second
          season, the new chapter brings Song Kang's character, Cha Hyun Su,
          back to the forefront, addressing one of the major criticisms of
          Season 2, where his role was notably diminished.
          <br />
          <br />
          Season 2's departure from the original webtoon’s storylines and its
          introduction of numerous new characters without sufficient backstory
          left many fans dissatisfied. This shift, coupled with the destruction
          of the Green Home, resulted in a season that diverged from what
          viewers had come to love. Season 3 sought to address these issues by
          refocusing on the beloved characters from Season 1. The return of
          Hyun-su, played by Song Kang, was a central element of the final
          season, and the interactions between him and other key characters,
          including Eun-yu (Go Min-si) and Eun-hyeok (Lee Do-hyun), were more
          prominent.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Season 3 was like a rollercoaster that started with a thrilling
              climb but ended with a screeching halt. The first few episodes
              were like a breath of fresh air, promising an epic finale. Then,
              out of nowhere, it felt like the show hit the fast-forward button.
              We went from intriguing plot twists to a dizzying whirlwind of
              scenes that left us wondering if we’d missed a chapter.
              <br />
              <br />
              With ‘Sweet Home’ Season 3, the makers put in efforts in
              correcting some of the issues from the previous season by
              reinstating focus on Hyun-su and re-engaging with the original
              characters. Fans were treated to moments of nostalgia and
              excitement, with versatile performances by Song Kang, Lee Do-hyun
              and Go Min-si. From an intense feeling of dread to dynamic mid-air
              combat and a , 'Sweet Home' season 3 is a complete package of
              emotions. The finale also showcased the emotional significance of
              the series title Sweet Home, as the three leads reunite,
              reflecting the feeling of togetherness in the Green Home.
              <br />
              <br />
              The series teased a lot of plot-twits but never really wrapped
              them uo. First up, there’s Dr. Lim and his creepy monster
              experiments, complete with a mysterious vial he owned. This vial
              was mentioned at the end of Season 3, but its purpose was as clear
              as mud. Sergeant In Hwan threw out a claim that it was Sang Wook’s
              blood, but Dr. Lim never confirmed this. Also, Dr. Lim removed the
              vial from Ja Yeong, the girl with hundred arms, but it didn’t seem
              to dent her, despite her already being in pain. So, the deal of
              the vial seemed quite irrelevant to the plot.
              <br />
              <br />
              One of the biggest plot points was supposed to be the source,
              birthing process, characteristics and purpose of the neohumans,
              which was a major deal for Sang Wook since they were immortal.
              Hyun Soo and Eun Hyuk even discussed it, hinting that destroying
              the source would put an end to future neohumans. But it seems the
              show’s runtime concluded before the makers could give that plot
              point the grand finale it deserved.
              <br />
              <br />
              The final episodes left many with a sense of disappointment due to
              unresolved storylines and the feeling of ‘What just happened?’
              emerged on several occasions but it did conclude the narrative
              with an engaging watch. The show’s final bow will be remembered
              fondly despite its hasty conclusion.
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

export default SweetHomeReview;
