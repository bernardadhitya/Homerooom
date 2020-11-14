import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import IconMenu from '../../Assets/icons/IconMenu';

const TeacherStudentAssignmentCard = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{
      backgroundColor: '#FFFFFF',
      padding: 20,
      borderRadius: 8,
      marginTop: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    }}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={{fontFamily: 'Medium', fontSize: 12}}>Assignments</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.col}>
          <Text style={{fontSize: 36}}>10</Text>
          <Text style={{fontFamily: 'Regular', fontSize: 12}}>Submitted</Text>
        </View>
        <View style={{padding: 16}}></View>
        <View style={styles.col}>
          <Text style={{fontSize: 36}}>5</Text>
          <Text style={{fontFamily: 'Regular', fontSize: 12}}>Graded</Text>
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

export default TeacherStudentAssignmentCard