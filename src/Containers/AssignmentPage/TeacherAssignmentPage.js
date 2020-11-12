import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const TeacherAssignmentPage = () => {
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
          <Text>This is Teacher Assignment Page</Text>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default TeacherAssignmentPage;