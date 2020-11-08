import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { AuthContext } from "../../Helper/AuthProvider";
import IconNotification from "../../Assets/icons/IconNotification";

const { Bold } = Fonts;

const Stack = createStackNavigator();

const Feed = () => {
  const { user: { username } } = useContext(AuthContext);

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
            <Text style={{ fontFamily: 'Medium', fontSize: 14 }}>Hi, {username}!</Text>
          </View>
          <View>
            <IconNotification />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const HomePage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Home"
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

export default HomePage;