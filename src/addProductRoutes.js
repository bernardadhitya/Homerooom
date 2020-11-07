import React, { useState, useRef, useEffect } from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import Center from "./Components/Center/Center";
import { StackNavigationState, TypedNavigator } from "@react-navigation/native";

function Product({ route, navigation }) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name
          })
        }
      />
    </Center>
  );
}

function apiCall(x) {
  return x;
}

function EditProduct({ route, navigation }) {
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    // api call with new form state
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}

export const addProductRoutes = (Stack) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // submit the form
                if (route.params.submit) {
                  route.params.submit.current();
                }
              }}
              style={{ paddingRight: 8 }}
            >
              <Text
                style={{
                  color: "red"
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          )
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`
        })}
        name="Product"
        component={Product}
      />
    </>
  );
};