import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);
    const goggleProvider = new GoogleAuthProvider();

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, goggleProvider);
      };
    
      const logOut = () => {
        setLoading(true);
        return signOut(auth);
      };

      const profileUpdate = (updateName, updatePhoto) => {
        return updateProfile(auth.currentUser, {
          displayName: updateName,
          photoURL: updatePhoto,
        });
      };

      useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loogedUser => {
             console.log('logged in user auth state observer',loogedUser);
             setUser(loogedUser)
             setLoading(false);
         })
         return () =>{
            unsubscribe();
         }
       })

    const authInfo = {
        user,
        setUser,
        loading,
        signIn,
        googleSignIn,
        createUser,
        profileUpdate,
        logOut,
      };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;