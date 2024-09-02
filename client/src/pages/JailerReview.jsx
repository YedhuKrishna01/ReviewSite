import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";

function JailerReview() {
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
            src="/jailer.jpg"
            className="h-48 tablet:h-56 laptop:h-64 desktop:h-52 tv:h-60 rounded-lg"
          />
          <div className="flex flex-col pl-4">
            <div className="text-base tablet:text-2xl laptop:text-3xl desktop:text-2xl tv:text-3xl font-semibold">
              Jailer
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Acting : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 7.5
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 6.8
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Rewatchability : 7
            </div>
            <div className="text-xs tablet:text-base laptop:text-lg desktop:text-sm tv:text-base mt-3 text-zinc-300 font-medium">
              Overall : 7.1
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 laptop:mt-10 text-white">
        <div className="w-10/12 desktop:w-9/12 mt-5 text-sm tablet:text-lg laptop:text-2xl desktop:text-base tv:text-lg text-justify">
          Tiger Muthuvel Pandiyan (Rajinikanth), a retired jailer, is a family
          man now. He spends his days making YouTube videos with his grandson,
          shopping for vegetables at the local market, and taking part in
          routine household chores. Muthuvel’s son (Vasanth Ravi), a police
          officer, goes missing while on a mission to nab a gang of idol
          thieves. When the news of his death is delivered, Muthuvel’s wife
          (Ramya Krishnan) pins the blame on his honest upbringing for this
          mess. Heartbroken, Muthuvel, ventures out to avenge his son’s death.
          <br />
          <br />
          The 2-hour-40-minute-long film takes time to establish itself. It
          takes over 40 minutes to pick up pace. Unlike every Rajnikanth movie,
          which thrives on a mass introduction scene, this one doesn’t give that
          cathartic experience. This is where it becomes a Nelson movie. But,
          the interval block and the mass scenes in the second half make up for
          it. Director Nelson, whose last big screen outing was Beast, is back
          with his signature style of filmmaking - packed with subtle, dark
          comedy in the first half. In fact, it is Yogi Babu and Rajinikanth’s
          fun banter that saves the first half. Second half takes off well with
          several mass scenes, especially when the story goes back in time to
          show a glimpse of Muthuvel’s past, but quickly loses steam and ends up
          leading towards a dragged, albeit a bit boring and a disappointing
          climax.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              The film, like several Rajinikanth movies in the past, lacks
              logic. The dark comedy works well in the original language (Tamil)
              and for those who are familiar with Nelson's previous films. But
              since it is not everyone’s cup of tea, the jokes may get lost in
              translation in other languages (the film has been released in 5
              languages). Cameos by stars like Shivarajkumar, Mohanlal, Jackie
              Shroff, Tamannaah Bhatia, Sunil and Kishore add to the star value.
              Watch out for the climax that features Shivarajkumar and Mohanlal
              for the much required drama and energy.
              <br />
              <br />
              Rajnikanth is not a hero anymore; he is a superstar and this film
              shows him exactly as that. Fans get to see plenty of
              whistle-worthy Rajini-ism and nothing more. The father-son bond,
              which is essentially the heart of the story, is merely touched
              upon and leaves it to the audience to assume that the father and
              son are very close. There isn’t a single emotional moment between
              the two. It is disappointing to see a talent like Ramya Krishnan
              with nothing much to say or emote in the film. Vasanth Ravi has
              one single expression throughout the film. Vinayakan puts up an
              impressive show with his bloodshot eyes. Composer Anirudh
              Ravichander’s background music elevates the film; the songs
              however, border on average.
              <br />
              <br />
              As Jailer ended, I was left with many thoughts. I thought about
              whether that brief flashback was enough to justify the title. I
              thought about the film seeming so full of promise at the halfway
              mark and bizarrely losing direction from then on. I thought about
              another unforgettable Tamil film from 27 years ago that spoke
              about an incorruptible father dealing with his son, without
              compromising on ‘commercial entertainment’. Above all, I thought
              about how many more films Rajinikanth has in him and whether we
              are making the most of his willingness to submit to filmmakers.
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

export default JailerReview;
