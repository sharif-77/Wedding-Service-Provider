import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
export const AuthContext=createContext() 



const AuthProvider = ({children}) => { 
    const [user,setUser]=useState(null)
    console.log(user);

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
          });

          return ()=>{
            unSubscribe()
          }

    },[])

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const update = (currentUser,willUpdate)=>{
        return updateProfile(currentUser,willUpdate)

    }
    const logOutUser = ()=>{
        return signOut(auth)
    }

    const authInfo={
       user,
       registerUser,
       logInUser,
       signInWithGoogle,
       update,
       logOutUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;