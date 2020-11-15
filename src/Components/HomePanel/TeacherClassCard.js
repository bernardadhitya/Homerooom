import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import { Colors } from '../../Constants/Colors';

const TeacherClassCard = (props) => {
  let [fontsLoaded] = useFonts(Fonts);
  const {avatar, color, name, students, subject, teacher_id: teacherId} = props.classData;

  const renderStudentsAvatar = () => {
    const defaultAvatars = ['🦊', '🐶', '🐵'];
    if (!students) return; 
    if (students.length < 4){
      return defaultAvatars.slice(0, students.length).map((defaultAvatar) => (
        <View style={{
          padding: 4,
          borderRadius: 20,
          backgroundColor:'#FFF5E3',
          
        }}>
          <Text>{defaultAvatar}</Text>
        </View>
      ))
    } else {
      return (
        <>
          <View style={{padding: 4,borderRadius: 20,backgroundColor:'#FFF5E3',}}>
            <Text>🦊</Text>
          </View>
          <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
            <Text>🐶</Text>
          </View>
          <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
            <Text>🐵</Text>
          </View>
          <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
            <Text>+{students.length - 3}</Text>
          </View>
        </>
      )
    }
  }

  return fontsLoaded ? (
    <View style={{
      backgroundColor: Colors[color],
      borderRadius: 10,
      marginVertical: 10
    }}>
      <View style={styles.row}>
        <View>
          <CharacterMrTeacher/>
        </View>
        <View style={styles.center}>
          <Text style={{fontFamily: 'Bold', fontSize: 16}}>{subject} - {name}</Text>
          <Text style={{fontFamily: 'Regular', fontSize: 10}}>Mr Wishnu</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {renderStudentsAvatar()}
          </View>
        </View>
      </View>
    </View>
  ) : <AppLoading/>;
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
}
});

export default TeacherClassCard