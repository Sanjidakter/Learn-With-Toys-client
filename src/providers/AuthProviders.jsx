import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";

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

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          console.log("current user in auth provider", currentUser);
          setLoading(false);
          if (currentUser && currentUser.email) {
            const loggedUser = {
              email: currentUser.email
          }
            fetch("https://car-doctor-server-delta-lilac.vercel.app/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(loggedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("jwt response", data);
                // Warning: Local storage is not the best (second best place) to store access token
                localStorage.setItem("car-access-token", data.token);
                //
              });
          }
          else{
            localStorage.removeItem('car-access-token');
          }
        });
        return () => {
          return unsubscribe();
        };
      }, []);

    const authInfo = {
        user,
        loading,
        signIn,
        googleSignIn,
        createUser,
        logOut,
      };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;