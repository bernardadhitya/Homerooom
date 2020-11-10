import React, { useState, useRef } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Layout } from 'react-native-ui-kitten';
import AssignmentCard from '../../Components/AssignmentPanel/AssignmentCard';
import AssignmentTabButton from '../../Components/AssignmentPanel/AssignmentTabButton';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const AssignedTab = () => {
  return (
    <Layout style={{marginTop: 20}}level='3'>
      <Text style={{fontFamily: 'Bold', fontSize: 16}}>Assigned</Text>
      <AssignedPanelContent />
    </Layout>
  )
}

const SubmittedTab = () => {
  return (
    <Layout style={{marginTop: 20}}level='3'>
      <Text style={{fontFamily: 'Bold', fontSize: 16}}>Submitted</Text>
      <AssignedPanelContent />
    </Layout>
  )
}

const GradedTab = () => {
  return (
    <Layout style={{marginTop: 20}}level='3'>
      <Text style={{fontFamily: 'Bold', fontSize: 16}}>Graded</Text>
      <AssignedPanelContent />
    </Layout>
  )
}

const Feed = () => {
  const [selectedTab, setSelectedTab] = useState('Assigned');
  let [fontsLoaded] = useFonts(Fonts);

  let sheetRef = useRef(null);
  let fall = new Animated.Value(1);
  
  const renderContent = () => (
    <Layout
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 650,
      }}
    >
      <Text style={{fontFamily: 'Bold', fontSize: 21}}>Assignments</Text>
      <AssignmentCard detail/>
    </Layout>
  );

  const renderAssignmentTabButton = (title) => {
    const isActive = selectedTab === title;
    const active = isActive ? 'active' : 'inactive';
  
    return (
      <TouchableOpacity onPress={() => setSelectedTab(title)}>
        <AssignmentTabButton active={active} title={title}/>
      </TouchableOpacity>
    )
  }

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    })

    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
  }

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
        <BottomSheet
          ref={sheetRef}
          snapPoints={[500, -100, -100]}
          borderRadius={16}
          renderContent={renderContent}
          initialSnap={2}
          callbackNode={fall}
        />
        <Animated.ScrollView
          style={{
            marginHorizontal: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
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
              <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Assignments</Text>
            </View>
          </View>
          <View style={{
            backgroundColor: '#EAEAEA',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            { renderAssignmentTabButton('Assigned') }
            { renderAssignmentTabButton('Submitted') }
            { renderAssignmentTabButton('Graded') }
          </View>
          <Layout style={{marginTop: 20}}level='3'>
            <Text style={{fontFamily: 'Bold', fontSize: 16}}>{selectedTab}</Text>
            <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
              <AssignmentCard/>
            </TouchableOpacity>
            <AssignmentCard/>
            <AssignmentCard/>
          </Layout>
          <View style={{height: 100}}></View>
        </Animated.ScrollView>
        {renderShadow()}
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
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  }
});
export default AssignmentPage;