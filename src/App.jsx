import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "@pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hesap/giris-kayit" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
