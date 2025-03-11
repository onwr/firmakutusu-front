import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SignIn from "@pages/SignIn";
import Home from "./pages/Home";
import Loader from "./layout/Loader";
import FirmaAra from "./pages/FirmaAra";
import FirmaProfil from "./pages/FirmaProfil";
import Paketler from "./pages/Paketler";
import Hakkimizda from "./pages/Hakkimizda";
import Blog from "./pages/Blog";
import Destek from "./pages/Destek";
import Sponsorluk from "./pages/Sponsorluk";
import Dogrulama from "./pages/auth/Dogrulama";
import { AuthProvider, useAuth } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import Profil from "./pages/panel/Profil";

const ProtectedRoute = ({ children }) => {
  const { loading, isLogin, user } = useAuth();

  if (loading) return null;
  if (!isLogin || !user) return <Navigate to="/hesap/giris-kayit" replace />;

  return children;
};

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
        <AuthProvider>
          <MainLayout>
            <BrowserRouter>
              <Routes>
                <Route path="/hesap/giris-kayit" element={<SignIn />} />
                <Route
                  path="/hesap/dogrula"
                  element={
                    <ProtectedRoute>
                      <Dogrulama />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/hesap/profil"
                  element={
                    <ProtectedRoute>
                      <Profil />
                    </ProtectedRoute>
                  }
                />
                <Route path="/" element={<Home />} />
                <Route path="/firma-ara" element={<FirmaAra />} />
                <Route path="/firma-profil" element={<FirmaProfil />} />
                <Route path="/paketler" element={<Paketler />} />
                <Route path="/hakkimizda" element={<Hakkimizda />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/destek" element={<Destek />} />
                <Route path="/sponsorluk" element={<Sponsorluk />} />
              </Routes>
            </BrowserRouter>
          </MainLayout>
        </AuthProvider>
      )}
    </>
  );
};

export default App;
