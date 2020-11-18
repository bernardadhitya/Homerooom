import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import IconMenu from '../../Assets/icons/IconMenu';

const TeacherStudentProfileCard = (props) => {
  const {studentData, classData} = props;
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    }}>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={{
            backgroundColor: '#FFF5E3',
            paddingVertical: 4,
            paddingHorizontal: 12,
            marginVertical: 4,
            marginHorizontal: 4,
            borderRadius: 8,
            justifyContent: 'center'
          }}>
            <Text style={{fontSize: 14}}>🦊</Text>
          </View>
          <View style={styles.column, {paddingTop: 8, paddingLeft: 8}}>
            <Text style={{fontFamily: 'Medium', fontSize: 16}}>{studentData.name || ''}</Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>{classData.subject} - {classData.name}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', paddingTop: 8}}>
          <IconMenu/>
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

export default TeacherStudentProfileCard