import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View, SafeAreaView, Button } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';

const { Bold } = Fonts;

const TeacherHomePage = ({ navigation, route }) => {
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
        <ScrollView>
          <Text>This is Teacher Home Page</Text>
          <Button
            title="go to assignments"
            onPress={() => {
              navigation.navigate("Assignments");
            }}
          />
          <Button
            title="go to class"
            onPress={() => {
              navigation.navigate("Class");
            }}
          />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default TeacherHomePage;