import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import TeacherClassAssignmentCard from './TeacherClassAssignmentCard';
import { FloatingAction } from 'react-native-floating-action';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const actions = [
  {
    text: "Create Class",
    icon: require("../../Assets/icons/IconAdd.png"),
    name: "ButtonCreateClass",
    position: 1
  }
];

const TeacherClassAssignmentPanel = (props) => {
  const { classId, assignments } = props;
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  const renderTeacherClassAssignmentCards = () => {
    if (!assignments) return;
    return assignments.map((assignment) => (
      <TouchableOpacity
        onPress={() => {navigation.navigate('Assignments', {
          classId: classId,
          assignment: assignment
        })}}
      >
        <TeacherClassAssignmentCard assignment={assignment}/>
      </TouchableOpacity>
    ))
  }

  return fontsLoaded ? (
    <Layout level='3'>
      { renderTeacherClassAssignmentCards() }
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

export default TeacherClassAssignmentPanel