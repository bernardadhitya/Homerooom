import React, { useState, useRef, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import IconBack from '../../Assets/icons/IconBack';
import { useNavigation } from '@react-navigation/native';
import TeacherAssignmentCard from '../../Components/TeacherAssignmentPanel/TeacherAssignmentCard';
import AssignmentTabButton from '../../Components/AssignmentPanel/AssignmentTabButton';
import TeacherClassStudentCard from '../../Components/TeacherClassStudentPanel/TeacherClassStudentCard';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import BottomSheet from 'reanimated-bottom-sheet';
import { Layout } from '@ui-kitten/components';
import TeacherAssignmentSubmissionPanel from './TeacherAssignmentSubmissionPanel';
import { getClassById } from '../../../firebase';

const TeacherAssignmentPage = ({route}) => {
  const { classId, assignment } = route.params;
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('submitted');
  let [fontsLoaded] = useFonts(Fonts);
  const [assignmentData, setAssignmentData] = useState({});
  const [classData, setClassData] = useState({});
  const [studentData, setStudentData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const fetchedClassById = await getClassById(classId);
      setClassData(fetchedClassById);
      setAssignmentData(assignment);
    };
    fetchData();
  }, []);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => {
    console.log('assignmentId', assignment.assignment_id)
    console.log('studentId', studentData)
    return (
      <Layout
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 700
        }}
      >
        <TeacherAssignmentSubmissionPanel
          status={selectedTab}
          assignmentId={assignment.assignment_id}
          studentId={studentData}
        />
      </Layout>
    )
  };

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
  
  const renderStudentSubmissionCards = () => {
    const { students } = assignment;

    return students[selectedTab].map((studentId) => (
      <TouchableOpacity
        onPress={() => {
          setStudentData(studentId);
          sheetRef.current.snapTo(0);
        }}
      >
        <TeacherClassStudentCard studentId={studentId}/>
      </TouchableOpacity>
    ))
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1
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
        <ScrollView style={{paddingHorizontal: 20}}>
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
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Assignments</Text>
          </View>
          <View>
            <TeacherAssignmentCard classData={classData} assignmentData={assignment}/>
          </View>
          <View style={{
            marginTop: 16,
            backgroundColor: '#EAEAEA',
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            { renderTeacherClassTabButton('Submitted') }
            { renderTeacherClassTabButton('Graded') }
          </View>
          <View>
            { renderStudentSubmissionCards() }
          </View>
        </ScrollView>
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

export default TeacherAssignmentPage;