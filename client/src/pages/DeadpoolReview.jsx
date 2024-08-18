import React from "react";
import Navbar from "../components/Navbar";

function DeadpoolReview() {
  return (
    <div>
      <Navbar />
      <div className="text-white mt-5 flex justify-center">
        <div className="w-10/12 homeIntro flex rounded-lg p-6">
          <img src="/Deadpool.jpg" className="h-48 rounded-lg" />
          <div className="flex flex-col pl-4">
            <div className="text-base font-medium">Deadpool & Wolverine</div>
            <div className="text-sm mt-3 text-zinc-300 font-medium">
              Rating : 7.4
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center glossy mt-6 text-white">
        <div className="w-10/12 mt-5 text-sm text-justify font-mont ">
          The highly anticipated Deadpool & Wolverine marks the 34th entry in
          the Marvel Cinematic Universe (MCU). Directed by Shawn Levy, the film
          stars Ryan Reynolds as Deadpool and sees Hugh Jackman return as
          Wolverine. Together, they bring a unique blend of action, humor, and
          emotional weight, making it a standout in the rapidly growing Marvel
          franchise. For those concerned that Deadpool’s integration into the
          MCU would water down his character—fear not. The film retains the same
          level of irreverence, vulgarity, and violence that fans loved in the
          previous two films, with the MCU’s influence doing nothing to diminish
          its edge. Without giving away any spoilers, the story begins with Wade
          Wilson (Deadpool) living a mundane post-mercenary life. However, his
          peace is disrupted when the Time Variance Authority (TVA) apprehends
          him and forces him into a mission involving multiverse travel. His
          objective? To locate a variant of Wolverine to help stabilize his
          crumbling timeline. This sets the stage for a thrilling, chaotic
          journey filled with multiverse madness and unforgettable character
          moments.
        </div>
      </div>
    </div>
  );
}

export default DeadpoolReview;
