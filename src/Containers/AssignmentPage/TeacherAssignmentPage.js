import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import IconBack from '../../Assets/icons/IconBack';
import { useNavigation } from '@react-navigation/native';
import TeacherAssignmentCard from '../../Components/TeacherAssignmentPanel/TeacherAssignmentCard';
import AssignmentTabButton from '../../Components/AssignmentPanel/AssignmentTabButton';
import TeacherClassStudentCard from '../../Components/TeacherClassStudentPanel/TeacherClassStudentCard';

const TeacherAssignmentPage = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('submitted');
  let [fontsLoaded] = useFonts(Fonts);

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
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1
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
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Assignments</Text>
          </View>
          <View>
            <TeacherAssignmentCard/>
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
            <TouchableOpacity>
              <TeacherClassStudentCard/>
            </TouchableOpacity>
            <TouchableOpacity>
              <TeacherClassStudentCard/>
            </TouchableOpacity>
            <TouchableOpacity>
              <TeacherClassStudentCard/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default TeacherAssignmentPage;