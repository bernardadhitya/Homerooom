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
import HomePanel from '../../Components/HomePanel/HomePanel';
import { Layout } from '@ui-kitten/components';
import { View } from 'react-native';
import IconLogout from '../../Assets/icons/IconLogout';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const Feed = () => {
  const { user: { username }, logout } = useContext(AuthContext);

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
            paddingHorizontal: 20,
          }}
        >
          <Layout
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: "center",
              marginTop: 30,
              marginBottom: 16
            }}
            level='3'
          >
            <Layout style={styles.container} level='3'>
              <TouchableOpacity style={{
                marginRight: 10,
                paddingTop: 14,
                paddingHorizontal: 10,
                backgroundColor: '#FDD444',
                borderRadius: 8
              }}>
                <Text style={{fontSize: 16}}>🦊</Text>
              </TouchableOpacity>
              <View style={{
                paddingTop: 14,
                paddingBottom: 6,
                paddingHorizontal: 10
              }}>
                <Text style={{ fontFamily: 'Medium', fontSize: 16 }}>Hi, {username}!</Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 10
                }}
                onPress={() => {
                  logout();
                }}
              >
                <IconLogout />
              </TouchableOpacity>
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
  const { logout } = useContext(AuthContext);

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