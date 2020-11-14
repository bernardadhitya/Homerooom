import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../../Helper/AuthProvider";
import Center from "../Center/Center";
import { Button, Text } from "react-native";
import PageOne from "../../Containers/OnboardingPage/PageOne";
import PageTwo from "../../Containers/OnboardingPage/PageTwo";
import PageThree from "../../Containers/OnboardingPage/PageThree";
import PageFour from "../../Containers/OnboardingPage/PageFour";
import PageFive from "../../Containers/OnboardingPage/PageFive";

const Stack = createStackNavigator();

function Login({ navigation }) {
  const { loginAsStudent, loginAsTeacher } = useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="log me in as student"
        onPress={() => {
          loginAsStudent();
        }}
      />
      <Button
        title="log me in as teacher"
        onPress={() => {
          loginAsTeacher();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate("PageOne");
        }}
      />
    </Center>
  );
}

function Register({ navigation, route }) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      />
    </Center>
  );
}

const AuthenticationRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{
          headerTitle: "Sign In"
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "Register"
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageOne"
        }}
        name="PageOne"
        component={PageOne}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageTwo"
        }}
        name="PageTwo"
        component={PageTwo}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageThree"
        }}
        name="PageThree"
        component={PageThree}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageFour"
        }}
        name="PageFour"
        component={PageFour}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageFive"
        }}
        name="PageFive"
        component={PageFive}
      />
    </Stack.Navigator>
  );
};

export default AuthenticationRouter;