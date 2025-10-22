import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser=(email,password)=>{
      setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
    const googleSignIn=()=>{
      return signInWithPopup(auth,googleProvider)
    }

 const logOut = () => {
  setLoading(true)
    return signOut(auth);
  }

  const updateUser=(upDatedData)=>{
    return updateProfile(auth.currentUser,upDatedData)
  }
      useEffect(() => {
    const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscrib();
    };
  }, []);
  const authData = {
    user,
    createUser,
    signInUser,
    googleSignIn,
    logOut,
    setLoading,
    loading,
    updateUser,
    setUser,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
