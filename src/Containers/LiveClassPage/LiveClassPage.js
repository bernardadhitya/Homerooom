import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import OnlineNowContent from '../../Components/LiveClassPanel/OnlineNowContent';
import YourClassesContent from '../../Components/LiveClassPanel/YourClassesContent';

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
          backgroundColor: '#EDF1F7'
        }}
      >
        <ScrollView
          style={{
            marginHorizontal: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 30
            }}
          >
            <View>
              <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Live Class</Text>
            </View>
          </View>
          <Layout style={{marginTop: 20}}level='3'>
            <Text style={{fontFamily: 'Bold', fontSize: 16}}>Online Now</Text>
            <OnlineNowContent/>
          </Layout>
          <Layout style={{marginVertical: 20}}level='3'>
            <Text style={{fontFamily: 'Bold', fontSize: 16}}>Your Classes</Text>
            <YourClassesContent/>
          </Layout>
          <View style={{height: 100}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const LiveClassPage = () => {
    
  return (
    <Stack.Navigator
      initialRouteName="LiveClass"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Live Class"
        component={Feed}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
});

export default LiveClassPage;