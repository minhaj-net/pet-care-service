import React, { createContext } from "react";
import { app } from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider()

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
    const googleSignIn=()=>{
      return signInWithPopup(auth,googleProvider)
    }
  const authData = {
    createUser,
    signInUser,
    googleSignIn,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
