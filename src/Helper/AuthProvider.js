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
          const fakeStudent = { 
            userId: 'arwM0bzRmcUljhivBrPu',
            username: "Bernard",
            role: 'student'
          };
          setUser(fakeStudent);
          AsyncStorage.setItem("user", JSON.stringify(fakeStudent));
        },
        loginAsTeacher: () => {
          const fakeTeacher = {
            userId: 'XEtwJg8K0yfvRIgLiKXO',
            username: "Naomi",
            role: 'teacher'
          };
          setUser(fakeTeacher);
          AsyncStorage.setItem("user", JSON.stringify(fakeTeacher));
        },
        register: (userData) => {
          const { userName } = userData;
          const newUser = {
            userId: 'WjitTbcn26lWeBUsj2Lk',
            username: userName,
            role: 'student'
          };
          setUser(newUser);
          AsyncStorage.setItem("user", JSON.stringify(newUser));
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