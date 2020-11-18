import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import TeacherClassStudentCard from './TeacherClassStudentCard';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUsersByUserId } from '../../../firebase';

const TeacherClassStudentPanel = (props) => {
  const { students, classId } = props;
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedStudentsData = await getUsersByUserId(students);
      setStudentsData(fetchedStudentsData);
    }
    fetchData();
  }, []);

  const renderStudentCards = () => {
    if (!students) return;
    return students.map((studentId) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Student', {
            studentId: studentId,
            classId: classId
          })}
        >
          <TeacherClassStudentCard studentId={studentId}/>
        </TouchableOpacity>
      )
    )
  }

  return fontsLoaded ? (
    <Layout level='3'>
      { renderStudentCards() }
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