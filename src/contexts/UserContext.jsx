// UserContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../lib/utils/firebase";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLogged = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    // Clean up the subscription
    return () => isLogged();
  }, []);

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};
