import React, { useState } from "react";
import Navbar from "../components/Navbar";

function TarrotReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/tarrot.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Tarrot</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 6
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 6
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 6.62
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          Tarot follows the friend group led by final girl Haley (Harriet
          Slater) who is going through a recent and painful breakup with Grant
          (Adain Bradley), as their communication styles (he’s a Leo, she’s an
          Aquarius) have led to a breakdown in their relationship. Then we have
          the comedic sidekick Paxton (Spider-Man’s Jacob Batalon), madly in
          love couple Elisa and Page (Larsen Thompson and Mean Girls’ Avantika),
          and friends who won’t admit they’re into each other, Madelyn and Lucas
          (Humberly González and Wolfgang Novogratz). The friends are staying in
          an AirBnB straight out of a Mike Flanagan Netflix joint and stumble
          across a wooden box with the zodiac wheel on it. Inside is a deck of
          old, hand-painted tarot cards.
          <br />
          <br />
          While astrology enthusiast Haley is reluctant to play with a deck that
          does not belong to her as this is seemingly an unwritten rule when it
          comes to tarot cards, her friends (mainly Elise) pressure her into
          doing all of their readings. They all seem pretty content with what
          Haley predicts and they each get a card with a terrifying figure on it
          — the fool (Paxton), the magician (Page), the devil (Grant), Death
          (Haley), etc. — but they all go back to college unphased. Then the
          classic horror trope of “the group gets killed off one by one” — but
          with a twist. Their deaths connect to their tarot reading and the
          figure stalking them is the same as the one that appeared on their
          card. The surviving members must then figure out how to stop the curse
          of the cards before they all succumb to their… horrorscope!
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Every month or so we’ll get a horror release that almost always
              follows a similar formula: a decent budget (by horror standards),
              backed by a big studio, and a PG-13 rating. And almost always
              these fail to scare, relying on empty jump scares, obnoxious CGI,
              and no blood or gore. Tarot feels quite formulaic in its setup —
              one-dimensional characters who are defined by one trait with the
              final girl who has to overcome her grief and trauma, and a curse
              that picks them off one by one. And yes, the dialogue is pretty
              stilted, rather shameless in its expositional approach, and
              doesn't really care that the characters sometimes sound like Siri
              rather than actual 21-year-olds. However, those thoughts are soon
              dashed when the first kill scene happens.
              <br />
              <br />
              It’s unexpectedly brutal, with lots of shadowplay, a dark figure
              rushing at the camera, and a brutal, elongated death. There isn't
              much gore or blood (in this scene and throughout the film) but it
              still feels violent and relentless. Seeing such visceral violence
              and actually creepy attacks have become few and far between in
              PG-13 horror. Last year’s The Boogeyman didn't go past a few jumps
              and many of Blumhouse’s recent frights are as scary as a dark
              Spongebob Squarepants episode. Tarot strikes a solid balance
              between using audience expectations to scare themselves while
              still delivering actual horrific imagery.
              <br />
              <br />
              Some of the monster designs are pretty straightforward, but there
              is one that could easily leave you with nightmares. Clowns have
              become a dubious creature to use in horror as two maniacs have
              taken up all the space on the podium — Pennywise from the It
              movies and Terrifier’s Art the Clown. But Tarot deserves props for
              its use of a funnyman in a truly terrifying way. It comes when
              it's Paxton’s turn to face down his demon, and his card shows “The
              Fool.” As he walks home alone at night, he hears a laugh not quite
              as bone-chilling as Heath Ledger’s but one that may play in your
              head as soon as you turn off the lights. The sequence then
              descends into full-blown terror and I found myself watching the
              screen through my fingers as the clown steps out of the shadows
              and into full view. Insidious’s influence is very much felt
              throughout the film with tall, ghostly figures in Victorian-era
              clothing with dark eyes rushing at the screen — and a few decent
              jump scares. While Tarot is by no means at the standard of James
              Wan and Leigh Whannell’s modern masterpiece, this stylistic
              flourish of making its monsters meaner and more humane ensures
              Tarot stand out from the sea of movies that don't bother to
              attempt to have their creatures go beyond their CGI design
              <br />
              <br />
              But the film is not as perfect as it can be. You’d think a film
              surrounding horoscopes in 2024 would have a ton of clever quips
              and jokes about Gen Z and millennials' obsession with star signs —
              but it doesn’t. Hell, 2022’s Bodies Bodies Bodies had a star sign
              joke funnier than anything muttered in Tarot (Rachel Sennott’s
              conviction as she shouted “Well, he's a Libra Moon so that says a
              lot is still one of the actor’s best moments). Other than a few
              “ugh, you’re such a Leo” comments or the boys not buying into this
              astrology bullshit, Tarot doesn't have a whole lot to say about
              astrology and people’s relationship with it. Tarot could’ve easily
              been made 15 years ago in how little it connects to real life and,
              apart from a few mentions of grief and loss, it doesn't have a lot
              of emotional heft.
              <br />
              <br />
              Tarot is a pretty forgettable horror movie. Dull characters, a
              basic plot, and very little to say with its themes render it a
              fairly unmemorable experience. However, what it can and should be
              commended for is showing how to scare within the constraints of
              the PG-13 rating. Some of its sequences are among the most
              frightening scenes in a PG-13 horror movie of recent years (we're
              not at The Ring's level but we are definitely higher than Five
              Nights at Freddy's). This alone is enough to warrant a
              recommendation.
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

export default TarrotReview;
