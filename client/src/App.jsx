import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeadpoolReview from "./pages/DeadpoolReview";
import ItendswithusReview from "./pages/ItendswithusReview";
import BadboysReview from "./pages/BadboysReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeadpoolReview" element={<DeadpoolReview />} />
        <Route path="/ItendswithusReview" element={<ItendswithusReview />} />
        <Route path="/BadboysReview" element={<BadboysReview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
