import React from "react";
import { AuthProvider } from "../context/AuthContext";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <main className="flex-grow">{children}</main>
    </AuthProvider>
  );
};

export default MainLayout;
