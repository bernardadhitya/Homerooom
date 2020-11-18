import React, { useState, useEffect, useContext } from "react";
import {
  createStackNavigator,
  StackNavigationProp
} from "@react-navigation/stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { ActivityIndicator, AsyncStorage } from "react-native";
import Center from "../Center/Center";
import { AuthContext } from "../../Helper/AuthProvider";
import PrivateRouter from "./PrivateRouter";
import AuthenticationRouter from "./AuthenticationRouter";
import TeacherRouter from "./TeacherRouter";

export const Routes = () => {
  const { user, loginAsStudent, loginAsTeacher } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  console.disableYellowBox = true;

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          // decode it
          const userJson = JSON.parse(userString);
          const { role } = userJson;

          if(role === 'student'){
            loginAsStudent();
          } else if (role === 'teacher'){
            loginAsTeacher();
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  const renderRouter = () => {
    const routers = {
      student: <PrivateRouter />,
      teacher: <TeacherRouter />
    }

    return user ? routers[user.role] : <AuthenticationRouter />
  }

  return (
    <NavigationContainer>
      { renderRouter() }
    </NavigationContainer>
  );
};