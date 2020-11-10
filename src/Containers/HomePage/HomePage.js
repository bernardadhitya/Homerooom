import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { AuthContext } from "../../Helper/AuthProvider";
import IconNotification from "../../Assets/icons/IconNotification";
import HomePanel from '../../Components/HomePanel/HomePanel';
import { Layout } from 'react-native-ui-kitten';
import { View } from 'react-native';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const Feed = () => {
  const { user: { username } } = useContext(AuthContext);

  let [fontsLoaded] = useFonts(Fonts);
  
  if(!fontsLoaded){
    return <AppLoading/>
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#EDF1F7'
        }}
      >
        <ScrollView
          style={{
            marginHorizontal: 20,
          }}
        >
          <Layout
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: "center",
              marginTop: 30,
              marginBottom: 0
            }}
            level='3'
          >
            <Layout style={{ flex: 1 }} level='3'>
              <Text style={{ fontFamily: 'Medium', fontSize: 14 }}>Hi, {username}!</Text>
            </Layout>
            <Layout
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
              level='3'
            >
              <IconNotification />
            </Layout>
          </Layout>
          <Layout style={styles.layout} level='3'>
            <HomePanel type='LiveClass'/>
          </Layout>
          <Layout style={styles.layout} level='3'>
            <HomePanel type='Assignments'/>
          </Layout>
          <Layout style={styles.layout} level='3'>
            <HomePanel type='Games'/>
          </Layout>
          <View style={{height: 100}}></View>
        </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
});

export default HomePage;