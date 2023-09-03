import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const isLoggedIn = () => {
    const isLog = localStorage.getItem("isSignedIn", true);
    console.log("isLog", isLog)

    return isLog
  }

  const signIn = () => {
    localStorage.setItem("isSignedIn", true);
    setIsSignedIn(true);
  };

  const signOut = () => {
    localStorage.removeItem("isSignedIn");
    setIsSignedIn(false);
  };

  const contextValue = {
    isSignedIn,
    signIn,
    signOut,
    isLoggedIn
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
