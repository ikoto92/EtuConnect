import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Annonces from "./pages/Annonces";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/annonces" element={<Annonces />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
