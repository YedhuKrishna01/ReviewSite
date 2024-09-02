import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function DearZindagiReview() {
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
            src="/dearzindagi.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Dear Zindagi
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
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
          Starring Alia Bhatt as the lead and Shah Rukh Khan as her
          psychiatrist, Dear Zindagi is about Kaira (Alia) - an aspiring
          cinematographer who does small ads and projects but wants to shoot an
          entire feature film. The introductory sequence - with Kaira’s
          confident banter and hands-on body language - assures us that she is
          truly talented and knows her job well. However, when she is offered a
          big break in a feature film, she is not sure if it is because of her
          talent or because one of the co-producers finds her hot. This
          co-producer, Raghavendra (Kunal Kapoor), is also the one with whom
          Kaira is cheating on her current love, Sid (Angad Bedi).
          <br />
          <br />
          Soon, we get to know Kaira and her problems - a career woman who isn’t
          sure whether she should thank her talent or looks for the
          opportunities and one who is dealing with a heart break after a guy
          ditched her for another girl. Rendered homeless after her landlord
          asks her to vacate because “she is single”, she decides to move to her
          home town, Goa. Since she shares a rather tense relationship with her
          parents, it makes her all the more sad at the thought of living with
          them. Sounds relatable. To deal with it all, Kaira decides to meet a
          ‘dimag ka doctor aka DD’.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Enter Shah Rukh Khan and the frame lights up with his charm and
              charisma. Shah Rukh’s psychiatrist is caring, charming and witty.
              The movie then traces Kaira’s sessions with Dr Jehangir Khan aka
              Jug who doles out gyan on life, handling relationship, dealing
              with one’s feelings, staying happy and much more.
              <br />
              <br />
              Jug’s meetings with Kaira provide Ms. Shinde with abundant
              opportunities to explore philosophical issues (“zindagi” means
              “life”), not least the value of forgiveness and the need people
              can have to create unnecessary obstacles for themselves. This is a
              movie that drops quotations from Faulkner and Einstein, but it
              rarely feels pedantic or platitudinous, thanks to the breezy,
              assured delivery of Mr. Khan, whose unforced ease is apparent when
              Jug gracefully resists a misguided romantic overture from Kaira.
              <br />
              <br />
              The only thing better than the ideas at work in Dear Zindagi is
              the chemistry between Alia Bhatt and Shah Rukh Khan. Both actors’
              performances are career best. Alia brings a likeable edge to her
              role. She may be confused but she’s not clueless. Fiercely
              independent and equally passionate her portrayal of Kiara is pure
              firebrand. The perfect complement to her is the cool as a cat
              psychologist played by SRK. This is the superstar’s best
              performance since Chak De! India. He’s not intense nor overtly
              dramatic. Instead he’s just the coolest guy with the most
              entertaining stories and wisdom beyond Chinese proverbs. SRK’s
              performance and character is pure cinematic zen.
              <br />
              <br />
              Amit Trivedi’s stellar score infuses Dear Zindagi with verve and
              zesty energy. The fact that the movie features Kunal Kapoor, Ali
              Zafar, Angad Bedi and Aditya Roy Kapur in supporting roles adds an
              extra level of charm. The last 20-odd minutes of the movie are a
              bit too casual. The conflicts are resolved with uncanny ease.
              These minor grievances stop Dear Zindagi from being the best of
              the year. But even so, this film has some fantastic moments. Some
              soul searching philosophy and some heart crushing realities on
              offer. Dear Zindagi is a feel good film. An experience that will
              make you feel alive.
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

export default DearZindagiReview;
