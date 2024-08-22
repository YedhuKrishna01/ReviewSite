import React, { useState } from "react";
import Navbar from "../components/Navbar";

function GiftedReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/gifted.jpg" className="h-48  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Gifted</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 8.12
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          A schoolteacher’s amazed discovery of an apparently genius child; a
          custody battle bitterly dividing family members; a single father
          becoming romantically involved with his little girl’s elementary
          school teacher. Those are among the familiar, or, to put it less
          charitably, cliched elements of Marc Webb’s Gifted. But despite its
          recycled tropes, the comedy-drama manages to be both funny and moving
          even if its emotional manipulations are fully apparent.
          <br />
          <br />
          Chris Evans, taking a break from saving the world as Captain America,
          plays Frank, the sort of gruff, stubble-cheeked loner who obviously
          has a heart of gold. Working as a boat repairman in a Florida coastal
          town, he shares a modest home with his 7-year-old niece Mary (Mckenna
          Grace), the daughter of his sister, who committed suicide when Mary
          was just six months old.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Mary, we soon learn, is a child prodigy, having inherited her
              mother’s brilliance for mathematics. So she’s understandably
              frustrated upon being asked to perform simple addition in her
              first-grade class. When kindly teacher Bonnie (Jenny Slate)
              discovers her pupil’s extraordinary abilities, she brings them to
              the attention of the school’s principal (Elizabeth Marvel), who
              promptly offers Frank the opportunity to place Mary in a school
              for gifted children, with a full scholarship.
              <br />
              <br />
              Frank turns down the offer, explaining that he wants Mary to lead
              a normal little girl’s life unlike her mother, who was driven by
              her and Frank’s wealthy mother Evelyn (Lindsay Duncan) to
              cultivate her math skills whatever the emotional cost. When
              Evelyn, with whom Frank has long been estranged, suddenly shows up
              out of the blue, she takes Frank to court to fight for custody of
              the little girl she recognizes as another prodigy. Meanwhile,
              Frank’s neighbor Roberta (Octavia Spencer), who serves as a mother
              figure to Mary, watches with concern from the sidelines.
              <br />
              <br />
              The screenplay by Tom Flynn — whose only previous theatrical
              credit is the little-seen Watch It (1993) — features generous
              doses of humor that keep the proceedings from becoming too
              maudlin. And Webb, making a welcome return to indie films after
              his unfortunate reboot of the Spider-Man franchise, handles the
              blend of comedy and drama as effectively as he did in his
              acclaimed debut, (500) Days of Summer. But he’s not entirely able
              to overcome the story’s cloying aspects, including, believe it or
              not, a last-minute rescue from euthanasia of the family pet,
              which, in keeping with the film’s labored quirkiness, is a
              one-eyed cat.
              <br />
              <br />
              More than a few scenes generate eye-rolling, including Frank
              taking Mary to a hospital waiting room so she can learn a life
              lesson by watching the delighted reactions of relatives receiving
              news about a baby’s birth. When Frank and schoolteacher Bonnie
              engage in a drunken flirtation but solemnly agree that it won’t
              lead to anything more, it comes as little surprise that the next
              shot depicts them giddily falling into bed together. Webb is even
              shameless enough to include a Cat Stevens song on the soundtrack.
              <br />
              <br />
              None of that, however, will prevent you from succumbing to the
              film’s heartstring pulling, such as the wrenching scene in which
              Mary becomes hysterical when Frank is forced to leave her with
              foster parents. The gifted 10-year-old actress, who has already
              amassed a lengthy list of film and television credits, delivers a
              superb performance here that bodes well for her future. She
              handles her character’s wide-ranging emotional demands with
              consummate skill; perhaps her best moment is Mary’s deadpan
              reaction upon discovering her half-naked teacher in her home.
              <br />
              <br />
              All of the performances are terrific, even if Spencer’s
              no-nonsense, voice-of-reason shtick threatens to become tiresome.
              Evans underplays to fine effect as the emotionally conflicted
              Frank; Slate is winsomely appealing as the teacher who finds
              herself drawn to her student’s hunky guardian; and Duncan displays
              a droll, deadpan humor that makes the grandmother surprisingly
              sympathetic.
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

export default GiftedReview;
