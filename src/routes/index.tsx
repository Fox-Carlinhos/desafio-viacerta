import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Consultation } from "../pages/Consultation";
import { Register } from "../pages/Register";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Consultation />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
