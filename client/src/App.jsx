import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeadpoolReview from "./pages/DeadpoolReview";
import ItendswithusReview from "./pages/ItendswithusReview";
import BadboysReview from "./pages/BadboysReview";
import ThebeastwithinReview from "./pages/ThebeastwithinReview";
import LonglegsReview from "./pages/LonglegsReview";
import InsideoutReview from "./pages/InsideoutReview";
import AadujeevithamReview from "./pages/AadujeevithamReview.jsx";
import TarrotReview from "./pages/TarrotReview.jsx";
import ShaitaanReview from "./pages/ShaitaanReview.jsx";
import SingleInSeoulReview from "./pages/SingleinseoulReview.jsx";
import KingdomofthePlanetoftheApesReview from "./pages/KingdomofthePlanetoftheApes.jsx";
import TheInternReview from "./pages/TheInternReview.jsx";
import DearZindagiReview from "./pages/DearZindagiReview.jsx";
import ASongfromtheDarkReview from "./pages/ASongfromtheDarkReview.jsx";
import GiftedReview from "./pages/GiftedReview.jsx";
import JailerReview from "./pages/JailerReview.jsx";
import TopGunMaverickReview from "./pages/TopGunMaverickReview.jsx";
import Avatar2Review from "./pages/Avatar2Review.jsx";
import TVshowBody from "./pages/TVshows/TVshowBody";
import HOTDReview from "./pages/TVshows/HOTDReview.jsx";
import BlackOutReview from "./pages/TVshows/BlackOutReview.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeadpoolReview" element={<DeadpoolReview />} />
        <Route path="/ItendswithusReview" element={<ItendswithusReview />} />
        <Route path="/BadboysReview" element={<BadboysReview />} />
        <Route
          path="/ThebeastwithinReview"
          element={<ThebeastwithinReview />}
        />
        <Route path="/LonglegsReview" element={<LonglegsReview />} />
        <Route path="/InsideoutReview" element={<InsideoutReview />} />
        <Route path="/AadujeevithamReview" element={<AadujeevithamReview />} />
        <Route path="/TarrotReview" element={<TarrotReview />} />
        <Route path="/ShaitaanReview" element={<ShaitaanReview />} />
        <Route path="/SingleInSeoulReview" element={<SingleInSeoulReview />} />
        <Route
          path="/KingdomofthePlanetoftheApesReview"
          element={<KingdomofthePlanetoftheApesReview />}
        />
        <Route path="/TheInternReview" element={<TheInternReview />} />
        <Route path="/DearZindagiReview" element={<DearZindagiReview />} />
        <Route
          path="/ASongfromtheDarkReview"
          element={<ASongfromtheDarkReview />}
        />
        <Route path="/GiftedReview" element={<GiftedReview />} />
        <Route path="/JailerReview" element={<JailerReview />} />
        <Route
          path="/TopGunMaverickReview"
          element={<TopGunMaverickReview />}
        />
        <Route path="/Avatar2Review" element={<Avatar2Review />} />
        <Route path="/TVshows" element={<TVshowBody />} />
        <Route path="/HOTDReview" element={<HOTDReview />} />
        <Route path="/BlackOutReview" element={<BlackOutReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
