import React, { useEffect, useState, useRef } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import IconBack from '../../Assets/icons/IconBack';
import TeacherStudentProfileCard from '../../Components/TeacherStudentPanel/TeacherStudentProfileCard';
import { useNavigation } from '@react-navigation/native';
import TeacherStudentAttendanceCard from '../../Components/TeacherStudentPanel/TeacherStudentAttendanceCard';
import TeacherStudentAssignmentCard from '../../Components/TeacherStudentPanel/TeacherStudentAssignmentCard';
import { getClassById, getUserById } from '../../../firebase';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useMemoOne } from 'use-memo-one';
import { Card, Layout } from '@ui-kitten/components';
import { Colors } from '../../Constants/Colors';
import { Image } from 'react-native';

const TeacherStudentPage = ({route}) => {
  const { studentId, classId } = route.params;
  const [userData, setUserData] = useState({});
  const [classData, setClassData] = useState({});
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserById = await getUserById(studentId);
      const fetchedClassById = await getClassById(classId);
      setUserData(fetchedUserById);
      setClassData(fetchedClassById);
    };
    fetchData();
  }, []);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);
  
  const renderContent = () => {
    return (
      <Layout
        style={{
          backgroundColor: 'white',
          padding: 16,
          height: 700
        }}
      >
        <Text style={{fontFamily: 'Bold', fontSize: 21}}>Give Badge</Text>
        <Text style={{fontFamily: 'Medium', fontSize: 14, paddingBottom: 20}}>Pick the badge you want to give to {userData.name}</Text>
        <View style={styles.row}>
          <Card>
            <Image
              source={require('../../Assets/badges/BadgeCrown.png')}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </Card>
          <View style={{width: 10}}></View>
          <Card>
            <Image
              source={require('../../Assets/badges/BadgeDiamond.png')}
              style={{
                width: 60,
                height: 60
              }}
            />
          </Card>
          <View style={{width: 10}}></View>
          <Card>
            <Image
              source={require('../../Assets/badges/BadgeCat.png')}
              style={{
                width: 60,
                height: 60
              }}
            />
          </Card>
        </View>
        <View style={{height: 10}}></View>
        <View style={styles.row}>
          <Card>
            <Image
              source={require('../../Assets/badges/BadgeBomb.png')}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </Card>
          <View style={{width: 10}}></View>
          <Card>
            <Image
              source={require('../../Assets/badges/BadgeFire.png')}
              style={{
                width: 60,
                height: 60
              }}
            />
          </Card>
          <View style={{width: 10}}></View>
          <Card>
            <Image
              source={require('../../Assets/badges/BadgeStar.png')}
              style={{
                width: 60,
                height: 60
              }}
            />
          </Card>
        </View>
        <TouchableOpacity 
            style={{
              backgroundColor: Colors.blue,
              paddingTop: 15,
              paddingBottom: 5,
              alignItems: 'center',
              borderRadius: 8,
              marginTop: 20
            }}
            onPress={() => { sheetRef.current.snapTo(2) }}
          >
            <Text
              style={{
                fontFamily: 'Medium',
                color: '#ffffff'
              }}
            >
              Give Badge
            </Text>
          </TouchableOpacity>
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
          snapPoints={[400, 400, -100]}
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
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Student</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <TeacherStudentProfileCard classData={classData} studentData={userData}/>
          </View>
          <View style={{marginVertical: 10}}>
            <TeacherStudentAttendanceCard/>
          </View>
          <View style={{margiinVertical: 10}}>
            <TeacherStudentAssignmentCard/>
          </View>
          <TouchableOpacity 
            style={{
              backgroundColor: Colors.blue,
              paddingTop: 15,
              paddingBottom: 5,
              alignItems: 'center',
              borderRadius: 8,
              marginTop: 20
            }}
            onPress={() => { sheetRef.current.snapTo(0) }}
          >
            <Text
              style={{
                fontFamily: 'Medium',
                color: '#ffffff'
              }}
            >
              + Give Badge
            </Text>
          </TouchableOpacity>
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

export default TeacherStudentPage;