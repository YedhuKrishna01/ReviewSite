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
import TVshowBody from "./pages/TVshows/TVshowBody";

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
        <Route path="/TVshows" element={<TVshowBody />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
