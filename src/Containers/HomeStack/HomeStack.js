import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Center from "../../Components/Center/Center";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import { AuthContext } from "../../Helper/AuthProvider";
import faker from "faker";
import { addProductRoutes } from "../../addProductRoutes";

const Stack = createStackNavigator();

function Feed({ navigation }) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

const HomeStack = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          }
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;