import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function PresumedInnocentReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/presumedinnocent.jpg" className="h-48  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Presumed Innocent</div>
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
              Rewatchability : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 7.75
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          In Apple TV+’s “Presumed Innocent,” Jake Gyllenhaal stars as Chicago’s
          chief deputy prosecutor, Rusty Sabich. Based on Scott Turow’s 1987
          novel of the same name, the show finds Rusty on trial for the gruesome
          murder of his colleague and lover, Carolyn Polhemus (Renate Reinsve).
          David E. Kelley’s eight-part miniseries offers an entirely new and
          updated perspective, differentiating it from the 1990 film adaptation,
          which starred Harrison Ford. Many core elements remain the same, but
          this version isn’t riddled with the exhausting sexism that weighed
          down the film. Instead, the female characters, including Carolyn;
          Rusty’s wife, Barbara (an entrancing Ruth Negga); and his lead
          investigator, Det. Alana Rodriguez (Nana Mensah), are depicted as
          three-dimensional and thoughtful women, all reeling from Rusty’s
          chaotic choices. While Ford’s take on Rusty was stoic, Gyllenhaal
          plays a desperate man unable to reconcile his damaging decisions with
          the image he’s presented to others. Entirely watchable, “Presumed
          Innocent” is one of the best legal thrillers to arrive on television
          in years.
          <br />
          <br />
          The story opens on a picturesque day in the Windy City. Rusty and his
          teenage children, Kyle (Kingston Rumi Southwick) and Jaden (Chase
          Infiniti), are hanging out in the backyard. The sunny afternoon takes
          a turn when Rusty receives a call that Carolyn has been found
          bludgeoned to death. Agitated, he relays the news to Barbara and then
          races to his dead lover’s apartment.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Rusty’s life then unravels in ways neither he, his family, nor the
              audience could have anticipated. Since Carolyn and Rusty’s affair
              was a secret, District Attorney Raymond Horgan (Bill Camp)
              initially assigns Rusty the case. But the Illinois primary quickly
              upends Rusty’s investigation. With Raymond booted out of his role,
              Rusty is left under the helm of new DA Nico Della Guardia (O-T
              Fagbenle) and the loathsome Tommy Molto (Peter Sarsgaard), who
              steps in as chief deputy prosecutor, taking over the case from
              Rusty.
              <br />
              <br />
              Sensing his arrest is imminent, Rusty starts making bizarre moves
              to stay off Tommy and Nico’s radars. Still, it’s not long before
              he’s on trial for homicide. Meanwhile, amid the media frenzy
              around the hidden life Rusty’s been leading, Barbara, Jaden and
              Kyle are caught in the crossfire. So often on-screen, wives and
              children are showcased as footnotes in male characters’ lives, but
              here, Rusty’s family is intricately woven into the story as the
              ones most affected by his arrogance and selfishness.
              <br />
              <br />
              “Presumed Innocent” is so effective because it allows the viewer
              to get to know each character intimately. From Barbara’s therapy
              sessions with her psychologist, Dr. Liz Rush (Lily Rabe), to the
              Sabich teens’ reactions to and understanding of their father’s
              lies, the series’ breathability gives it a haunting realism.
              Additionally, Kelley, a master at writing legal dramas, unpacks
              the baroque politics of a prosecuting attorney’s office and how
              they factor into the investigation of Carolyn’s killing and
              Rusty’s trial.
              <br />
              <br />
              “Presumed Innocent” soars because the audience is never quite sure
              what to make of Rusty. He is highly affable one moment and
              borderline narcissistic the next, leaving both his sincerity and
              his innocence perpetually up for debate. Moreover, several
              brilliant twists keep the viewer from getting too comfortable.
              From the start, Gyllenhaal portrays Rusty as an enigma —whether he
              is experiencing guilt, shame or both is to be determined.
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

export default PresumedInnocentReview;
