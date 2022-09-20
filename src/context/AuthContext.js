import React from "react";
import { useContext, useState, useEffect } from "react";
import { auth, methods } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return methods.createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return methods.signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

