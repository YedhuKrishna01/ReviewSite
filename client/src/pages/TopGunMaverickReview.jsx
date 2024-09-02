import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function TopGunMaverickReview() {
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
            src="/maverick.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Top Gun: Maverick
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 9
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 8
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          In “Top Gun: Maverick,” the breathless, gravity and logic-defying “Top
          Gun” sequel that somehow makes all the sense in the world despite
          landing more than three decades after the late Tony Scott’s original,
          an admiral refers to Tom Cruise’s navy aviator Pete Mitchell—call sign
          “Maverick”—as “the fastest man alive.” It’s a chuckle-inducing scene
          that recalls one in “Mission: Impossible – Rogue Nation,” when Alec
          Baldwin’s high-ranking Alan Hunley deems Cruise’s Ethan Hunt, “the
          living manifestation of destiny.” In neither of these instances are
          Cruise’s co-stars exclusively referring to his make-believe screen
          personas. They are also (or rather, primarily) talking about the
          ongoing legacy of Cruise the actor himself.
          <br />
          <br />
          Truth be told, our fearless and ever-handsome action hero earns both
          appraisals with a generous side of applause, being one of the precious
          remnants of bona-fide movie superstardoms of yore, a slowly dwindling
          they-don’t-make-'em-like-they-used-to notion of immortality these
          days. Indeed, Cruise’s consistent commitment to Hollywood
          showmanship—along with the insane levels of physical craft he
          unfailingly puts on the table by insisting to do his own stunts—I
          would argue, deserves the same level of high-brow respect usually
          reserved for the fully-method sorts such as Daniel Day-Lewis. Even if
          you somehow overlook the fact that Cruise is one of our most gifted
          and versatile dramatic and comedic actors with the likes of “Born on
          the Fourth of July,” “Magnolia,” “Tropic Thunder,” and “Collateral”
          under his belt, you will never forget why you show up to a Tom Cruise
          movie, thanks in large part to his aforesaid enduring dedication. How
          many other household names and faces can claim to guarantee “a
          singular movie event” these days and deliver each time, without
          exceptions in Hollywood?
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              In that regard, you will be right at home with “Top Gun:
              Maverick,” director Joseph Kosinski’s witty adrenaline booster
              that allows its leading producer to be exactly what he is—a
              star—while upping the emotional and dramatic stakes of its
              predecessor with a healthy (but not overdone) dose of nostalgia.
              After a title card that explains what “Top Gun” is—the identical
              one that introduced us to the world of crème-de-la-crème Navy
              pilots in 1986—we find Maverick in a role on the fringes of the US
              Navy, working as an undaunted test pilot against the familiar
              backdrop of Kenny Loggins’ “Danger Zone.” You won’t be surprised
              that soon enough, he gets called on a one-last-job type of mission
              as a teacher to a group of recent Top Gun graduates. Their
              assignment is just as obscure and politically cuckoo as it was in
              the first movie. There is an unnamed enemy—let’s called it Russia
              because it’s probably Russia—some targets that need to be
              destroyed, a flight plan that sounds nuts, and a scheme that will
              require all successful Top Gun recruits to fly at dangerously low
              altitudes.
              <br />
              <br />
              It’s a long shot, if the details of the operation—explained to the
              aviator hopefuls in a rather “It can’t be done” style reminiscent
              of “Mission: Impossible”—are any indication. But you will be
              surprised that more appealing than the prospect of the bonkers
              mission here is the human drama that co-scribes Ehren Kruger, Eric
              Warren Singer, and Christopher McQuarrie spin from a story by
              Peter Craig and Justin Marks. For starters, the group of potential
              recruits include Lt. Bradley “Rooster” Bradshaw (Miles Teller,
              terrific), the son of the dearly departed “Goose,” whose
              accidental death still haunts Maverick as much as it does the rest
              of us. And if Rooster’s understandable distaste of him wasn’t
              enough (despite Maverick’s protective instincts towards him),
              there are skeptics of Maverick’s credentials—Jon Hamm’s Cyclone,
              for instance, can’t understand why Maverick’s foe-turned-friend
              Iceman (Val Kilmer, returning with a tearjerker of a part) insists
              on him as the teacher of the mission. Further complicating the
              matters is Maverick’s on-and-off romance with Penny Benjamin (a
              bewitching Jennifer Connelly), a new character that was
              prominently name-checked in the original movie, as some will
              recall.
              <br />
              <br />
              In some sense, what this movie takes most seriously are concepts
              like friendship, loyalty, romance, and okay, bromance. Everything
              else that surrounds those notions—like patriotic egotism—feels
              like playful winks and embellishments towards fashioning an
              old-school action movie. And because this mode is clearly shared
              by the entirety of the cast—from a memorable Ed Harris that begs
              for more screen time to the always great Glen Powell as the
              alluringly overconfident “Hangman,” Greg Tarzan Davis as “Coyote,”
              Jay Ellis as “Payback,” Danny Ramirez as “Fanboy,” Monica Barbaro
              as “Phoenix,” and Lewis Pullman as “Bob”—“Top Gun: Maverick” runs
              fully on its enthralling on-screen harmony at times.
              <br />
              <br />
              Still, the action sequences—all the low-altitude flights, airborne
              dogfights as well as Cruise on a motorcycle donned in his original
              Top Gun leather jacket—are likewise the breathtaking stars of
              “Maverick,” often accompanied by Harold Faltermeyer’s celebratory
              original score (aided by cues from Hans Zimmer and Lorne Balfe).
              Reportedly, all the flying scenes—a pair of which are pure
              hell-yes moments for Cruise—were shot in actual U.S. Navy F/A-18s,
              for which the cast had to be trained for during a mind-boggling
              process. The authentic work that went into every frame generously
              shows. As the jets cut through the atmosphere and brush their
              target soils in close-shave movements—all coherently edited by
              Eddie Hamilton—the sensation they generate feels miraculous and
              worthy of the biggest screen one can possibly find. Equally worthy
              of that big screen is the emotional strokes of “Maverick” that
              pack an unexpected punch. Sure, you might be prepared for a second
              sky-dance with “Maverick,” but perhaps not one that might require
              a tissue or two in its final stretch.
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

export default TopGunMaverickReview;
