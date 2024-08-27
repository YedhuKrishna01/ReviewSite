import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function MayorOfKingstownReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/mayorofkingstown.jpg" className="h-48  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">
              Mayor of Kingstown(S3)
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7.5
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
              Overall : 7.12
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          Mayor of Kingstown season 3 starts off strong, with an explosive first
          three episodes that see Mike McClusky continue to struggle to keep
          Kingstown in one piece. The series, which stars Jeremy Renner as Mike,
          the unofficial mayor, is another branch of the Taylor Sheridan
          universe. However, while the series has Sheridan's trademark action,
          politics and intrigue, the show does not take place within the same
          universe as Yellowstone, or its connected shows.
          <br />
          <br />
          Regardless, Mayor of Kingstown is potentially one of the most gripping
          and exciting shows within the Sheridanverse. The series explores
          crime, racism, and corruption and how these can have domino effects on
          each other. Season 3 picks up after the tragedies which occur at the
          end of season 2, and Mike is still on the defensive trying to hold the
          city together. However, where he was a target throughout the first two
          seasons, Mike now dons a mantle of someone who is on the offensive in
          season 3.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Over the first two seasons, Mike worked tirelessly to restore
              order in Kingstown, and it appeared as though things had finally
              been settled. Season 3 makes a concerted effort to show that
              everything is still on the table. With mob bosses crossed off, new
              powers step in, and on the law enforcement side, nothing has been
              straightforward since Mitch's death. The premise and drama feels
              compelling, and the new characters are introduced in a way that
              quickly establishes they are not to be taken lightly.
              <br />
              <br />
              With so many moving parts, it's difficult for Mike to keep his
              finger on the pulse in Kingstown, but Renner does a great job of
              stepping up and enforcing his own brand of law and order. Even
              more impressive, Renner suffered a major incident prior to filming
              season 3 that could have easily hindered his performance, but he
              puts his entire body and mind into the role. From the brutal fight
              sequences, to the monologue voiceovers at the top of the show,
              Renner remains Mayor of Kingstown's biggest strength.
              <br />
              <br />
              However, the series is setting up a lot of moving pieces, and as
              challenging as it is for Mike to keep track of the changing
              powers, it could lead to confusion for audiences. Characters who
              have had very little presence come and go, with several new
              characters appearing to be pivotal. The first three episodes do a
              lot to establish a baseline for what will happen as the season
              progresses, but with only ten episodes to wrap up the events, it
              could present a challenge to deliver a satisfying conclusion.
              <br />
              <br />
              Another issue with season 3 is that, more than ever before, Mike
              is able to do or say anything with almost no consequences. His
              role as the mayor means he is required to maintain solid
              relationships with all parties, but with power shifting, Mike has
              the added challenge of gaining their trust and asserting himself
              as vital to all sides. In previous seasons, Mike played things
              smart, bringing backup along in dangerous moments, but that
              caution appears to have died with Milo in the Mayor of Kingstown
              season 2 finale.Mike is led by his emotions, rushing into
              dangerous situations and fighting back enemies from all sides.
              While this provides an incredible opportunity to showcase Renner's
              talents for action, it also feels like Renner's character is more
              Ronin than Mike. Despite these new rivals having little idea who
              he is, and access to large crews, they allow him to push them
              around with very little reaction.
              <br />
              <br />
              It is likely that things will heat up throughout the rest of the
              season, but at least in the first three episodes, Mike has a
              serious case of plot armor which dulls the tension and drama.
              Without real danger, the stakes are low, and it looks as though
              Mike will come out on top no matter what comes his way. Hopefully,
              the last seven episodes will resolve some of these issues, but at
              least the start of the season does a solid job establishing the
              numerous characters who are in play for Mayor of Kingstown season
              3.
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

export default MayorOfKingstownReview;
