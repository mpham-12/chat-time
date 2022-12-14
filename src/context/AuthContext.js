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
  function forgotPassword(email) {
    return methods.sendPasswordResetEmail(auth, email);
  }
  function logout() {
    return methods.signOut(auth);
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
    login,
    logout,
    forgotPassword
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

