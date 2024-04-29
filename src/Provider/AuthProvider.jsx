import React, { createContext, useEffect, useState } from 'react';

import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';


export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image
        })
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const provider = new GoogleAuthProvider();
    const googleLog=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const fbProvider = new FacebookAuthProvider();
    const facebookLog=()=>{
        setLoading(true)
        return signInWithPopup(auth, fbProvider)
    }

    useEffect(()=>{
        const subscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            subscribe()
        }
    },[])

    const authInfo={user,createUser,signIn,logOut,loading,updateUserProfile,googleLog,facebookLog}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;