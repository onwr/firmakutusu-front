import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: "Ali ATALAN",
    firma: {
      firmaAd:
        "Ayyıldız Tünel Ekipmanları İmalatı Mühendislik San. ve Tic. A.Ş.",
    },
    email: "john@example.com",
    avatar: "/images/icons/nav/default-avatar.svg",
  });

  const logout = () => {
    setIsLogin(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
