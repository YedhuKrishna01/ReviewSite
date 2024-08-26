import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function HOTDReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/hotd.jpg" className="h-48  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">
              House of the Dragon (S2)
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 7.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 7.75
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          The first season of “House of the Dragon,” HBO’s prequel to “Game of
          Thrones” and the first spinoff in network history, was widely
          considered a success. But it was also, in essence, 10 hours of set-up,
          speeding through decades of context to take audiences to the brink of
          the Westerosi civil war known as the Dance of the Dragons. Despite its
          many strengths, the show began as a structural oxymoron: too rushed to
          do the patient plotting and character-building that gave its parent
          show such a strong foundation; too slow to sink its teeth into the
          real meat of its story until the final stretch of episodes, which saw
          the death of King Viserys (Paddy Considine) and the formation of
          factions around his two potential heirs.
          <br />
          <br />
          In Season 2, “House of the Dragon” feels like it’s finally the show it
          was always meant to be. What all that runway was leading up to, it
          turns out, is a tragedy of epic proportions, bleaker than even the
          famously violent and cynical “Game of Thrones” could ever dream. In
          the war between two scions of the long-reigning Targaryen clan, there
          are no winners, least of all the realm each contender hopes to rule.
          The new episodes, four of which were screened for critics in advance,
          contain much of what their predecessors lacked, from the development
          of key relationships to the dragon-on-dragon violence promised by the
          title. “House of the Dragon” has been elevated, sharpened, and
          broadened in scope — all in service of a show now as dark figuratively
          as it already was literally.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Showrunner Ryan Condal and co-creator George R.R. Martin, the
              author of the series’ source material, could barely cram all the
              political and personal context for the Dance of the Dragons into a
              full season of primer. But at the start of Season 2, the
              combatants are helpfully sorted into color-coded contingents: the
              Blacks, loyalists to Viserys’ eldest child Rhaenyra (Emma D’Arcy),
              and the Greens, who back Rhaenyra’s half-brother Aegon (Tom
              Glynn-Carney), the progeny of Viserys’ second marriage to
              Rhaenyra’s childhood friend Alicent Hightower (Olivia Cooke). For
              what it’s worth, the show’s sympathies are clearly skewed toward
              the Blacks. Rhaenyra’s succession claim is contested, in part out
              of rank misogyny, and in last season’s finale, she suffered the
              first true loss of the war when Aegon’s sadistic, vindictive
              brother Aemond (Ewan Mitchell) killed her young son Lucerys
              (Elliot Grihault). Yet the thematic gist of “House of the Dragon”
              is that, once the bodies start to fall, sympathy ceases to matter
              in the face of a self-perpetuating cycle of destruction.
              <br />
              <br />
              From the very first shot, Season 2 signals an intention to widen
              its lens beyond the palace intrigue among a single blended family
              in a couple of castles. We open not in King’s Landing or on
              Dragonstone, but at Winterfell, the seat of the Stark family whose
              own dissolution formed the spine of “Game of Thrones.” The point
              of the excursion north isn’t just to highlight historical
              parallels; it’s to indicate that “House of the Dragon” is shifting
              its focus from the intimate dynamics of the Targaryens to their
              disastrous, continent-spanning consequences. “When princes lose
              their temper,” one character warns, “it is often others who
              suffer.”
              <br />
              <br />
              The point is bluntly put, and only reinforced by grim spectacles
              seemingly designed to refute the apocryphal Truffaut quote that
              there’s no such thing as an anti-war film. (Or TV show with the
              budget of a box-office tentpole.) A dispute between two squabbling
              teens cuts directly to a battlefield strewn with corpses; a humble
              family in a blockaded city worries over the spiking price of food.
              These exchanges take place not between our primary antiheroes, but
              minor, even anonymous, characters we may never hear from again.
              Cumulatively, they stand in for the masses who stand to gain
              nothing from two sides armed with the magical equivalent of
              nuclear bombs engaged in mutually assured annihilation.
              <br />
              <br />
              This thread builds on longstanding themes of the “Game of Thrones”
              universe. (Martin’s original “A Song of Ice and Fire” novels made
              clear that armies on all sides, no matter how righteous their
              commanders’ cause, will engage in petty atrocities like rape and
              theft if given the excuse.) There’s still an added sense of
              futility to “House of the Dragon.” Ned Stark may have been naïve,
              but there was a clear-cut morality to his initial search for truth
              that’s less applicable to Rhaenyra, a flagrant philanderer — just
              like Ned’s adversary Cersei Lannister! — who clings to her
              birthright primarily out of personal grievance. And as the war
              ramps up, cooler heads in both camps are gradually sidelined in
              favor of bloodthirsty hard-liners like Aemond and Rhaenyra’s
              uncle/husband Daemon (Matt Smith), whose one-upmanship makes peace
              an increasingly certain impossibility. “Soon, they won’t even
              remember why they started the war in the first place,” Rhaenyra’s
              aunt Rhaenys (Eve Best) laments. One of the even-tempered types on
              the losing side of this fictional history, Rhaenys was once passed
              over for the Iron Throne herself. She’s lived long enough to see
              history repeat itself, and the viewer brings their own knowledge
              of what’s coming generations down the line.
              <br />
              <br />
              That future, of course, includes a horde of ice zombies coming for
              a kingdom left without the dragons who serve as its best defense,
              a near-extinction directly tied to the Dance and its winged
              casualties. At first, I balked at how “House of the Dragon”
              retroactively turned dynasty founder Aegon the Conqueror into a
              prophet passing his apocalyptic dream down through the
              generations. But in Season 2, this device effectively underscores
              the damage war will do. Rhaenyra claims to be acting with the
              prophecy’s predictions in mind; in reality, she’s only
              guaranteeing they come to pass.
              <br />
              <br />
              The oppressive mood can make “House of the Dragon” a trial to
              watch, albeit in a way that’s a testament to its power. (Any show
              that gives you bad dreams, as these episodes did for me, has
              thoroughly bored its way into the subconscious.) There are
              occasionally challenges to the show’s cultivated sense of reality,
              like the patently absurd idea that the 30-year-old Cooke is a
              grandmother. But for the most part, the broad-based empathy “Game
              of Thrones” cultivated for its many protagonists is here deployed
              to explain what could lead otherwise sensible people to murder
              their family members in cold blood, and honestly believe they had
              no other choice. It’s a worldview rarely illustrated at this
              scale. Most blockbusters need a happy ending to bring in the
              crowds. Having made a saga where blood flows freely and incest is
              normalized the biggest draw on TV, “House of the Dragon” feels no
              need to spare our feelings.
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

export default HOTDReview;
