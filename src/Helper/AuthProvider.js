import React, { useState } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          //set user credential to context
          const fakeUser = { username: "Bernard" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
          //logs out user
          setUser(null);
          AsyncStorage.removeItem("user");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};