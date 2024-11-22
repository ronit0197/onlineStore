import React, { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../Database/Firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    // Listen to user auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);

    // Register user
    const register = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user
    const login = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Logout user
    const logout = async () => {
        return signOut(auth);
    };

    // Value to share across components
    const value = {
        currentUser,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};
