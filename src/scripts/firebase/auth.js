import React, { useEffect, useState } from "react";
import firebase from "firebase";
import LoadingComponent from "../../components/loading-component";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setPending(false);
    });
  }, []);
  if (pending) {
    return <LoadingComponent />;
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
