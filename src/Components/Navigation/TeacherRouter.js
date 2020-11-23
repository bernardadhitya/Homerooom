import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TeacherHomePage from "../../Containers/HomePage/TeacherHomePage";
import TeacherClassPage from "../../Containers/LiveClassPage/TeacherClassPage";
import TeacherAssignmentPage from "../../Containers/AssignmentPage/TeacherAssignmentPage";
import TeacherStudentPage from "../../Containers/StudentPage/TeacherStudentPage";
import LiveClassVideoCallPage from "../../Containers/LiveClassPage/LiveClassVideoCallPage";
import TeacherGamePage from "../../Containers/GamesPage/TeacherGamePage";

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
      <Stack.Screen
        options={{
          headerTitle: "Student"
        }}
        name="Student"
        component={TeacherStudentPage}
      />
      <Stack.Screen
        options={{
          headerTitle: "LiveClass"
        }}
        name="LiveClass"
        component={LiveClassVideoCallPage}
      />
      <Stack.Screen
        options={{
          headerTitle: "Game"
        }}
        name="Game"
        component={TeacherGamePage}
      />
    </Stack.Navigator>
  )
}

export default TeacherRouter;