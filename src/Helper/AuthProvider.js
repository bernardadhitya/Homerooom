import React, { useState } from "react";
import { AsyncStorage } from "react-native";

export const AuthContext = React.createContext({
  user: null,
  loginAsStudent: () => {},
  loginAsTeacher: () => {},
  logout: () => {}
});

export const AuthProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        loginAsStudent: () => {
          const fakeStudent = { username: "Bernard", role: 'student' };
          setUser(fakeStudent);
          AsyncStorage.setItem("user", JSON.stringify(fakeStudent));
        },
        loginAsTeacher: () => {
          const fakeTeacher = { username: "Naomi", role: 'teacher' };
          setUser(fakeTeacher);
          AsyncStorage.setItem("user", JSON.stringify(fakeTeacher));
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