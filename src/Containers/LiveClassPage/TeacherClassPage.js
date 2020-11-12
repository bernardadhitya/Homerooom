import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import IconLogout from '../../Assets/icons/IconLogout';
import IconBack from '../../Assets/icons/IconBack';
import TeacherClassCard from '../../Components/HomePanel/TeacherClassCard';
import AssignmentTabButton from '../../Components/AssignmentPanel/AssignmentTabButton';
import TeacherClassAssignmentPanel from '../../Components/TeacherClassAssignmentPanel/TeacherClassAssignmentPanel';
import TeacherClassStudentPanel from '../../Components/TeacherClassStudentPanel/TeacherClassStudentPanel';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const TeacherClassPage = ({navigation, route}) => {
  const [selectedTab, setSelectedTab] = useState('assignments');
  let [fontsLoaded] = useFonts(Fonts);
  
  const renderTeacherClassTabButton = (title) => {
    const isActive = selectedTab === title.toLowerCase();
    const active = isActive ? 'active' : 'inactive';
  
    return (
      <TouchableOpacity onPress={() => setSelectedTab(title.toLowerCase())}>
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
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
      </SafeAreaView>
    )
  }
}

export default TeacherClassPage;