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
        login: (role) => {
          //set user credential to context
          const fakeUsers = {
            student: { username: "Bernard", role: 'student' },
            teacher: { username: "Naomi", role: 'teacher' }
          };
          setUser(fakeUsers[role]);
          AsyncStorage.setItem("user", JSON.stringify(fakeUsers[role]));
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