import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const Feed = () => {
  let [fontsLoaded] = useFonts(Fonts);
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 30,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 0,
          }}
        >
          <View
            style={{
              marginTop: 0,
              marginRight: 10,
              marginBottom: 0,
              marginLeft: 10,
            }}
          >
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Assignment</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const AssignmentPage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Assignments"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Assignments"
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
  )
}

export default AssignmentPage;