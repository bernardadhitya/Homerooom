import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Layout } from 'react-native-ui-kitten';
import IconLogout from '../../Assets/icons/IconLogout';
import { AuthContext } from "../../Helper/AuthProvider";
import TeacherClassCard from '../../Components/HomePanel/TeacherClassCard';
import { FloatingAction } from "react-native-floating-action";

const { Bold } = Fonts;

const actions = [
  {
    text: "Create Class",
    icon: require("../../Assets/icons/IconAdd.png"),
    name: "ButtonCreateClass",
    position: 1
  }
];

const TeacherHomePage = ({ navigation, route }) => {
  const { user: { username }, logout } = useContext(AuthContext);

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
        <ScrollView
          style={{
            paddingHorizontal: 20
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
          <Text style={{fontFamily: 'Bold', fontSize: 16}}>Your Classes</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Class");
          }}>
            <TeacherClassCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Class");
          }}>
            <TeacherClassCard />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Class");
          }}>
            <TeacherClassCard />
          </TouchableOpacity>
          <Button
            title="go to assignments"
            onPress={() => {
              navigation.navigate("Assignments");
            }}
          />
        </ScrollView>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
          overrideWithAction='true'
          color='#FFFFFF'
          shadow={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
          }}
        />
      </SafeAreaView>
    )
  }
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

export default TeacherHomePage;