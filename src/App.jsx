import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignIn from "@pages/SignIn";
import Home from "./pages/Home";
import Loader from "./layout/Loader";
import FirmaAra from "./pages/FirmaAra";
import FirmaProfil from "./pages/FirmaProfil";
import Paketler from "./pages/Paketler";
import Hakkimizda from "./pages/Hakkimizda";
import Blog from "./pages/Blog";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path="/hesap/giris-kayit" element={<SignIn />} />
            <Route path="/" element={<Home />} />
            <Route path="/firma-ara" element={<FirmaAra />} />
            <Route path="/firma-profil" element={<FirmaProfil />} />
            <Route path="/paketler" element={<Paketler />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
