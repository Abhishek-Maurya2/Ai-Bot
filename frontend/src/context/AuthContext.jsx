import React, { createContext, useContext, useEffect, useState } from "react";
import {
  loginUser,
  signupUser,
  checkAuthStatus,
  logoutUser,
} from "../helpers/api-communicator";
// import {
// import { AuthProvider } from './AuthContext';
// import { checkAuthStatus } from './../helpers/api-communicator';
// checkAuthStatus,
//   loginUser,
//   logoutUser,
//   signupUser,
// } from "../helpers/api-communicator";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // fetch if the user's cookies are valid then skip login
//     async function checkStatus() {
//       const data = await checkAuthStatus();
//       if (data) {
//         setUser({ email: data.email, name: data.name });
//         setIsLoggedIn(true);
//       }
//     }
//     checkStatus();
//   }, []);

//   const login = async (email, password) => {
//     const data = await loginUser(email, password);
//     if (data) {
//       setUser({ email: data.email, name: data.name });
//       setIsLoggedIn(true);
//     }
//   };

//   const signup = async (name, email, password) => {
//     const data = await signupUser(name, email, password);
//     if (data) {
//       setUser({ email: data.email, name: data.name });
//       setIsLoggedIn(true);
//     }
//   };

//   const logout = async () => {
//     await logoutUser();
//     setUser(null);
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn,
//         user,
//         login,
//         signup,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // fetch if the user's cookies are valid then skip login
    async function checkStatus() {
      const data = await checkAuthStatus();
      if (data) {
        setUser({ email: data.email, name: data.name });
        setIsLoggedIn(true);
      }
    }
    checkStatus();
  }, []);

  const login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
      window.location.href = "/dashboard";
    }
  };
  const logout = async () => {
    await logoutUser();
    setUser(null);
    setIsLoggedIn(false);
    window.location.href = "/";
  };
  const signup = async (name, email, password) => {
    const data = await signupUser(name, email, password);
    if (data) {
      setUser({ email: data.email, name: data.name });
      setIsLoggedIn(true);
    }
  };

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
