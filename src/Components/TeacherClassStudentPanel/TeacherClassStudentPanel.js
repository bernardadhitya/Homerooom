import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import TeacherClassStudentCard from './TeacherClassStudentCard';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TeacherClassStudentPanel = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <Layout level='3'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Student')}
      >
        <TeacherClassStudentCard/>
      </TouchableOpacity>
      <TeacherClassStudentCard/>
      <TeacherClassStudentCard/>
      <TeacherClassStudentCard/>
      <TeacherClassStudentCard/>
    </Layout>
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

export default TeacherClassStudentPanel