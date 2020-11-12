import React, { useState, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import IconBack from '../../Assets/icons/IconBack';
import TeacherClassCard from '../../Components/HomePanel/TeacherClassCard';
import AssignmentTabButton from '../../Components/AssignmentPanel/AssignmentTabButton';
import TeacherClassAssignmentPanel from '../../Components/TeacherClassAssignmentPanel/TeacherClassAssignmentPanel';
import TeacherClassStudentPanel from '../../Components/TeacherClassStudentPanel/TeacherClassStudentPanel';
import { FloatingAction } from 'react-native-floating-action';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import BottomSheet from 'reanimated-bottom-sheet';
import { Layout } from '@ui-kitten/components';
import CreateAssignmentForm from '../../Components/TeacherClassAssignmentPanel/CreateAssignmentForm';
import AddStudentForm from '../../Components/TeacherClassStudentPanel/AddStudentForm';

const actions = [
  {
    text: "Create",
    icon: require("../../Assets/icons/IconAdd.png"),
    name: "ButtonCreate",
    position: 1
  }
];

const TeacherClassPage = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('assignments');
  let [fontsLoaded] = useFonts(Fonts);
  
  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => {
    const forms = {
      assignments: <CreateAssignmentForm/>,
      students: <AddStudentForm/>
    }
    return (
      <Layout
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 700
        }}
      >
        {forms[selectedTab] || <View><Text>Test</Text></View>}
      </Layout>
    )
  };

  const renderTeacherClassTabButton = (title) => {
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

  const renderTeacherClassPanel = () => {
    const panels = {
      assignments: <TeacherClassAssignmentPanel/>,
      students: <TeacherClassStudentPanel/>
    }
    return panels[selectedTab] || <Text>{selectedTab}</Text>
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
        }}
      >
        <BottomSheet
          ref={sheetRef}
          initialSnap={2}
          callbackNode={fall}
          snapPoints={[620, 500, -100]}
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
            <TouchableOpacity 
              style={{
                paddingTop: 1,
                paddingRight: 18
              }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <IconBack/>
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Class</Text>
          </View>
          <View>
            <TeacherClassCard/>
          </View>
          <View style={{
            backgroundColor: '#EAEAEA',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            { renderTeacherClassTabButton('Assignments') }
            { renderTeacherClassTabButton('Students') }
            { renderTeacherClassTabButton('Games') }
          </View>
          <View>
            {renderTeacherClassPanel()}
          </View>
        </ScrollView>
        <FloatingAction
          actions={actions}
          onPressItem={() => sheetRef.current.snapTo(0)}
          overrideWithAction={true}
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
        {renderShadow()}
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
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  layout: {
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    justifyContent: 'center',
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  }
});

export default TeacherClassPage;