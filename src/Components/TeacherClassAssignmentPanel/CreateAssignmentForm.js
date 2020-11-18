import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Input, Datepicker } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { createAssignment } from '../../../firebase';

const CreateAssignmentForm = (props) => {
  const { classData: { classId } } = props;
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [instruction, setInstruction] = useState('');
  const [date, setDate] = useState(new Date());

  let [fontsLoaded] = useFonts(Fonts);

  const clearState = () => {
    setAssignmentTitle('');
    setInstruction('');
    setDate(new Date());
  }

  const submitCreateAssignmentForm = async () => {
    const newAssignment = {
      title: assignmentTitle,
      instructions: instruction,
      dueDate: date
    }
    clearState();
    return await createAssignment(newAssignment, classId);
  }

  return fontsLoaded ? (
    <Layout>
      <Text style={{fontFamily: 'Bold', fontSize: 21}}>Create Assignment</Text>
      <View style={{marginVertical: 10}}>
        <Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Assignment Title</Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12, color: '#EF5B54'}}>*</Text>
        </Text>
        <Input
          placeholder='Example: Mathematics, Science, etc'
          value={assignmentTitle}
          onChangeText={value => setAssignmentTitle(value)}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Instructions</Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12, color: '#EF5B54'}}>*</Text>
        </Text>
        <Input
          multiline={true}
          textStyle={{ minHeight: 128 }}
          placeholder='Insert your instruction here'
          value={instruction}
          onChangeText={value => setInstruction(value)}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Add Students</Text>
        <Datepicker
          date={date}
          onSelect={nextDate => setDate(nextDate)}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Attachment</Text>
        <TouchableOpacity onPress={() => console.log('pressed')}>
          <View style={styles.center, {
            marginTop: 12,
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 4,
            borderColor: '#63C7FD',
            borderRadius: 8,
            borderWidth: 1
          }}>
            <Text style={{fontFamily: 'Medium', fontSize: 12, color: '#63C7FD'}}>+Add attachment</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => submitCreateAssignmentForm() }>
        <View style={styles.center, {
          marginTop: 12,
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 4,
          backgroundColor: '#63C7FD',
          borderRadius: 8
        }}>
          <Text style={{fontFamily: 'Medium', fontSize: 12, color: '#FFFFFF'}}>Finalize</Text>
        </View>
      </TouchableOpacity>
    </Layout>
  ) : <AppLoading/>;
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  layout: {
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    justifyContent: 'center',
  }
});

export default CreateAssignmentForm