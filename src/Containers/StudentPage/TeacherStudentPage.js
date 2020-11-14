import React from 'react';
import { Text, SafeAreaView } from 'react-native';
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

const TeacherStudentPage = () => {
  const navigation = useNavigation();
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
            <TeacherStudentProfileCard/>
          </View>
          <View style={{marginVertical: 10}}>
            <TeacherStudentAttendanceCard/>
          </View>
          <View style={{margiinVertical: 10}}>
            <TeacherStudentAssignmentCard/>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default TeacherStudentPage;