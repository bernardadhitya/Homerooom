import React, { useContext, useEffect, useRef, useState } from 'react';
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
import { Layout } from '@ui-kitten/components';
import IconLogout from '../../Assets/icons/IconLogout';
import { AuthContext } from "../../Helper/AuthProvider";
import TeacherClassCard from '../../Components/HomePanel/TeacherClassCard';
import { FloatingAction } from "react-native-floating-action";
import { useMemoOne } from 'use-memo-one';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import CreateClassForm from '../../Components/TeacherHomePanel/CreateClassForm';
import { getClassesByUserId, getUserById } from '../../../firebase';

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
  const { user: { userId, username }, logout } = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);
  const [userData, setUserData] = useState({});
  const [classes, setClasses] = useState([]);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedClassesByUserId = await getClassesByUserId(userId);
      const fetchedUserById = await getUserById(userId);

      sheetRef.current.snapTo(2);

      setClasses(fetchedClassesByUserId);
      setUserData(fetchedUserById);
    }
    fetchData();
  }, [trigger]);

  let sheetRef = useRef(null);
  let fall = useMemoOne(() => new Animated.Value(1), []);

  const renderContent = () => (
    <Layout
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 700
      }}
    >
      <Text style={{fontFamily: 'Bold', fontSize: 21}}>Create Class</Text>
      <CreateClassForm teacherId={userData.userId}/>
    </Layout>
  );

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

  const renderTeacherClassCard = () => {
    if (!userData.classes) return;
    return classes.map((classData, index) => {
      return (
        <TouchableOpacity onPress={() => {
          navigation.navigate("Class", {classId: userData.classes[index]});
        }}>
          <TeacherClassCard classData={classData}/>
        </TouchableOpacity>
      )
    });
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
          snapPoints={[620, 500, -100]}
          renderContent={renderContent}
          borderRadius={16}
        />
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

          { renderTeacherClassCard() }

          <TouchableOpacity 
            style={{ height: 100 }}
            onPress={() => { console.log(trigger); setTrigger(trigger + 1)}}
          >
            
          </TouchableOpacity>
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

export default TeacherHomePage;