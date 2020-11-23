import React, { useState, useRef } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Layout } from '@ui-kitten/components';
import AssignmentCard from '../../Components/AssignmentPanel/AssignmentCard';
import AssignmentTabButton from '../../Components/AssignmentPanel/AssignmentTabButton';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import MySubmissionCard from '../../Components/AssignmentPanel/MySubmissionCard';
import { useMemoOne } from 'use-memo-one';
import { Colors } from '../../Constants/Colors';

const Stack = createStackNavigator();

const Feed = () => {
  const [selectedTab, setSelectedTab] = useState('assigned');
  let [fontsLoaded] = useFonts(Fonts);
  const [assignmentDetails, setAssignmentDetails] = useState({});

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);
  
  const AssignedTab = () => {
    return (
      <>
        <TouchableOpacity onPress={() => {
          sheetRef.current.snapTo(0)
        }}
        >
          <AssignmentCard
            className={'Mathematics - Class 1A'}
            teacherName={'Naomi'}
            avatar={0}
            color={Colors.yellow}
            title={'Exercise page 12-13 no. 1-10'}
          />
        </TouchableOpacity>
        <AssignmentCard
          className={'Science - Class 6C'}
          teacherName={'Naomi'}
          avatar={4}
          color={Colors.aqua}
          title={'Do exercise 2A no.1-5'}
        />
      </>
    )
  }

  const SubmittedTab = () => {
    return null
  }
  
  const GradedTab = () => {
    return (
      <TouchableOpacity onPress={() => {
        sheetRef.current.snapTo(0)
      }}
      >
        <AssignmentCard
          className={'Mathematics - Class 1A'}
          teacherName={'Naomi'}
          avatar={0}
          color={Colors.yellow}
          title={'Exercise page 1-2 no. 1-5'}
        />
      </TouchableOpacity>
    )
  }

  const renderSelectedTab = () => {
    const tabsOption = {
      assigned: <AssignedTab/>,
      submitted: <SubmittedTab/>,
      graded: <GradedTab/>
    }
    return tabsOption[selectedTab]
  }

  const renderContent = () => (
    <Layout
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 900
      }}
    >
      <Text style={{fontFamily: 'Bold', fontSize: 21}}>Assignments</Text>
      <AssignmentCard
        className={'Mathematics - Class 1A'}
        teacherName={'Naomi'}
        avatar={0}
        color={Colors.yellow}
        title={'Exercise page 12-13 no. 1-10'}
        detail
      />
      <MySubmissionCard status={selectedTab}/>
    </Layout>
  );

  const renderAssignmentTabButton = (title) => {
    const isActive = selectedTab === title.toLowerCase();
    const active = isActive ? 'active' : 'inactive';
  
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => setSelectedTab(title.toLowerCase())}
      >
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
          initialSnap={2}
          callbackNode={fall}
          snapPoints={[600, 500, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
        <ScrollView style={{marginHorizontal: 20}}>
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
            <Text style={{
              fontFamily: 'Bold',
              fontSize: 16,
              textTransform: 'capitalize'
            }}>
              {selectedTab}
            </Text>
            { renderSelectedTab() }
          </Layout>
          <View style={{height: 100}}></View>
        </ScrollView>
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