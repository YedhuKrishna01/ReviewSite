import React, { useState } from "react";
import Navbar from "../../components/Navbar";

function BlackOutReview() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/blackout.jpg" className="h-44  rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">Black Out</div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 7
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
              Overall : 7
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          “Black Out” is a gripping South Korean drama that premiered in August
          2024. The series follows a man who, after serving a 10-year prison
          sentence for a crime he doesn’t remember committing, returns to his
          hometown to uncover the truth about his past.
          <br />
          <br />
          The drama has received positive reviews for its intense storyline and
          strong performances, particularly by Byun Yo-han, who plays the lead
          role1. The show blends elements of crime, mystery, and thriller,
          keeping viewers on the edge of their seats as the protagonist delves
          into the dark secrets of his past. It should also be noted that this
          show is based on the novel "Snow White Must Die" by German writer Nele
          Neuhaus published on 2010.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Director Byun’s transition to television has sparked considerable
              interest, with many curious to see how her cinematic style
              translates to the smaller screen. The series boasts a strong
              ensemble cast, including Byun Yo Han, Go Joon, Go Bo Gyeol and Kim
              Bora, alongside seasoned veterans Bae Jong Ok, Kwon Hae Hyo, Jo
              Jae Yoon, and Kim Mi Kyung. The director has expressed immense
              trust in her actors, highlighting their collaborative spirit and
              dedication to the project.
              <br />
              <br />
              As a veteran film director stepping into drama, Byun noted, “The
              filming pace is much faster in dramas. Unlike movies, it’s crucial
              to weave together the endless narrative intersections to maintain
              strong connections between episodes."
              <br />
              <br />
              Byun Young-joo’s meticulous and emotionally charged directing
              style has generated unprecedented interest in Black Out. He aims
              to depict the distorted relationships among villagers harboring
              secrets and the unraveling of their lives as more truths come to
              light.
              <br />
              <br />
              All in all, this is a dream project to the director and it's quite
              evident that she have given her best output throughout the entire
              series. The series also has a decent rewatchability to it due to
              the engaging way it progresses.
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

export default BlackOutReview;
