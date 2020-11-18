import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Select, SelectItem } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { addStudentToClassById, getAllStudents } from '../../../firebase';

const data = [
  'Bernard',
  'Kim',
  'Beatrice',
  'Jasmine'
];

const AddStudentForm = (props) => {
  const { classData: classId } = props;
  const [selectedStudents, setSelectedStudents] = useState([]);
  let [fontsLoaded] = useFonts(Fonts);
  const [allStudents, setAllStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAllStudents = await getAllStudents();
      console.log(fetchedAllStudents);
      setAllStudents(fetchedAllStudents);
    };
    fetchData();
  }, []);

  const clearStates = () => {
    setSelectedStudents([]);
  }

  const submitAddStudentForm = async () => {
    const selectedStudentsId = selectedStudents.map(({row}) => (allStudents[row].user_id));
    clearStates();
    return await addStudentToClassById(selectedStudentsId, classId);
    //return await createClass(newClass);
  }

  const displayValue = () => {
    const selectedStudentsName = selectedStudents.map(({row}) => (allStudents[row].name));
    return <Text>{selectedStudentsName.join(', ')}</Text>;
  };

  const renderStudentsOption = (title) => {
    return(
      <SelectItem title={title}/>
    )
  };

  return fontsLoaded ? (
    <Layout>
      <Text style={{fontFamily: 'Bold', fontSize: 21}}>Add Students</Text>
      <View style={{marginVertical: 10}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Add Students</Text>
        <Select
          multiSelect={true}
          value={displayValue}
          selectedIndex={selectedStudents}
          onSelect={index => setSelectedStudents(index)}
        >
          {allStudents.map(student => renderStudentsOption(student.name))}
        </Select>
      </View>
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={styles.center, {
          marginTop: 12,
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 4,
          backgroundColor: '#63C7FD',
          borderRadius: 8
        }}>
          <Text style={{fontFamily: 'Medium', fontSize: 12, color: '#FFFFFF'}}>
            + Add Student
          </Text>
        </View>
      </TouchableOpacity>
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

export default AddStudentForm