import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const creatUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
       setLoading(true);
       return signInWithEmailAndPassword(email, password);
    }


    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( () =>{
    const unsubscrib =    onAuthStateChanged(auth, curretUser =>{
           setUser(curretUser);
           console.log('current user', curretUser);
           setLoading(false);
        });
        return () => {
            return unsubscrib();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;