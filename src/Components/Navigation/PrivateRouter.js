import React from "react";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import IconGames from "../../Assets/icons/IconGames";
import IconHome from "../../Assets/icons/IconHome";
import IconAssignments from "../../Assets/icons/IconAssignments";
import IconLiveClass from "../../Assets/icons/IconLiveClass";
import AssignmentPage from "../../Containers/AssignmentPage/AssignmentPage";
import HomePage from "../../Containers/HomePage/HomePage";
import LiveClassPage from "../../Containers/LiveClassPage/LiveClassPage";
import GamePage from "../../Containers/GamesPage/GamePage";

const Tabs = AnimatedTabBarNavigator();

const PrivateRouter = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "#323232"
      }}

      appearence={{
        floating: true,
        activeTabBackgrounds: ['#FFF4CD', '#FFE9E5', '#E5FCFB', '#F2FFD7'],
        activeColors: ['#D9AB0A', '#EF5B54', '#56BBB4', '#9DCC39'],
        shadow: true
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomePage}
        options={{ tabBarIcon: () => (<IconHome color='#D9AB0A'/>) }}
      />
      <Tabs.Screen
        name="Live Class"
        component={LiveClassPage}
        options={{ tabBarIcon: () => (<IconLiveClass color='#EF5B54'/>) }}
      />
      <Tabs.Screen
        name="Assignments"
        component={AssignmentPage}
        options={{ tabBarIcon: () => (<IconAssignments color='#56BBB4'/>) }}
      />
      <Tabs.Screen
        name="Games"
        component={GamePage}
        options={{ tabBarIcon: () => (<IconGames color='#9DCC39'/>) }}
      />
    </Tabs.Navigator>
  );
};

export default PrivateRouter;