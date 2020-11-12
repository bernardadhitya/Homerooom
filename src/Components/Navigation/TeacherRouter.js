import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeacherHomePage from "../../Containers/HomePage/TeacherHomePage";
import TeacherClassPage from "../../Containers/LiveClassPage/TeacherClassPage";
import TeacherAssignmentPage from "../../Containers/AssignmentPage/TeacherAssignmentPage";

const Stack = createStackNavigator();

const TeacherRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        options={{
          headerTitle: "Home"
        }}
        name="Home"
        component={TeacherHomePage}
      />
      <Stack.Screen
        options={{
          headerTitle: "Class"
        }}
        name="Class"
        component={TeacherClassPage}
      />
      <Stack.Screen
        options={{
          headerTitle: "Assignments"
        }}
        name="Assignments"
        component={TeacherAssignmentPage}
      />
    </Stack.Navigator>
  )
}

export default TeacherRouter;