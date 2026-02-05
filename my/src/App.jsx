import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LovePage from "./pages/LovePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love" element={<LovePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
