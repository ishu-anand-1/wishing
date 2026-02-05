import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wish from "./pages/wish";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish" element={<Wish />} />
      </Routes>
    </BrowserRouter>
  );
}
