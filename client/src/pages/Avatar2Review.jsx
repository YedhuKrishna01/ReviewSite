import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Avatar2Review() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/avatar2.jpg" className="h-48 mt-1 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-semibold">
              Avatar: The Way of Water
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Acting : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Filmmaking/VFX : 9.5
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Plot/Screenplay : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Rewatchability : 8
            </div>
            <div className="text-xs mt-3 text-zinc-300 font-medium">
              Overall : 8.37
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify">
          A worthy sequel to the 2009 film Avatar, James Cameron takes us back
          to the stunning world of Pandora, where human turned Na'vi Jake Sully
          (Sam Worthington) and Na'vi princess Ney'tiri (Zoe Saldaña) must do
          everything it takes to protect their children from the ‘sky people’
          (humans from earth).
          <br />
          <br />
          “The way of water connects all things. The sea is our home before our
          birth and after we die.” Beyond the 3D visual spectacle that Avatar
          is, something we trust James Cameron to deliver, the franchise’s
          beauty lies in its underlying spiritual arc and ode to continuity of
          life. Life finds a way. It evolves no matter the surroundings as love
          is transformative.
          <br />
          <br />
          {/* Normally invisible but can be expanded if needed */}
          {isExpanded && (
            <>
              Humans call the Na’vi ‘hostiles and insurgents’, when it is they
              who forcefully infiltrate and occupy their land. Despite its
              magical, fictional setting, Avatar is not devoid of
              socio-political themes. It addresses race, civilisation, takes a
              strong anti-military stand and makes a plea for environment
              conservation through its simple story of parents and children. A
              spectacular climax revolves around parents protecting their
              children and vice versa.
              <br />
              <br />
              From lush jungles to the gorgeous reefs… the action shifts from
              forests to the sea this time around and it’s equally meditative
              and hypnotic. For over three hours you find yourself immersed in
              the enchanting world of an oceanic clan (Metkayina) or the reef
              people who give Sully and his family a refuge from humans. The
              sequel scores high on action and emotion. One is not compromised
              for the other. ‘Happiness is simple. The Sullys stay together.
              This is our biggest weakness and our greatest strength,” says Jake
              Sully and the story embodies that spirit. The tale isn’t unique
              per se but the storytelling and visual excellence are otherworldly
              epic. Mounted on a massive scale, not once do you find yourself
              wanting to return to the real world.
              <br />
              <br />
              While the predecessor set the bar high for visual effects 13 years
              ago, the new film takes it a step further. Like the previous film,
              the director does not use 3D as a gimmick but uses it artfully to
              accentuate audience immersion in the world and story. Avatar: The
              Way of Water deserves be watched in IMAX 3D. It is the greatest
              immersive cinema experience of the year — world building at its
              finest.
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

export default Avatar2Review;
