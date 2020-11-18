import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Input, Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import IconImageAttachment from '../../Assets/icons/IconImageAttachment';
import { TouchableOpacity } from 'react-native';
import { getSubmissionByUserIdAndAssignmentId } from '../../../firebase';

const TeacherAssignmentSubmissionPanel = (props) => {
  const {assignmentId, studentId, status} = props;
  const [studentScore, setStudentScore] = useState('');
  const [teacherNote, setTeacherNote] = useState('');
  const [submissionData, setSubmissionData] = useState({});
  let [fontsLoaded] = useFonts(Fonts);

  useEffect(() => {
    const fetchData = async () => {
      console.log('----- called! -----');
      const fetchedSubmissionData = await getSubmissionByUserIdAndAssignmentId(studentId, assignmentId);
      console.log('submissionData:', fetchedSubmissionData);
      setSubmissionData(fetchedSubmissionData);
    };
    fetchData();
  }, []);
  

  return fontsLoaded ? (
    <Layout>
      <Text style={{fontFamily: 'Bold', fontSize: 21}}>Student Submission</Text>
      <View style={{
        backgroundColor: '#FFFFFF',
        padding: 10,
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
          <View style={styles.col, {marginTop: 10}}>
            <Text style={{fontFamily: 'Medium', fontSize: 12}}>
              Patrick's Submission
            </Text>
          </View>
          <View style={{flex: 1, marginTop: 10}}>
            <Text style={{
              fontFamily: 'Medium',
              fontSize: 12,
              textAlign: 'right',
              color: '#9CCB38',
              textTransform: 'capitalize'
            }}>
              {status}
            </Text>
          </View>
        </View>
        <Card style={{marginVertical: 10}}>
          <Layout style={styles.row}>
            <Layout style={styles.column, {marginRight: 35}}>
              <IconImageAttachment/>
            </Layout>
            <Layout style={styles.column}>
              <Text style={{fontFamily: 'Medium', fontSize: 10}}>Exercise-result.jpg</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 8}}>2.4 MB</Text>
            </Layout>
          </Layout>
        </Card>
      </View>
      <View style={{marginVertical: 16}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Score</Text>
        <Input
          disabled={status==='graded'}
          placeholder='0-10'
          value={studentScore}
          onChangeText={score => setStudentScore(score)}
        />
      </View>
      <View style={{marginVertical: 16}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Teacher's Note</Text>
        <Input
          disabled={status==='graded'}
          multiline={true}
          textStyle={{ minHeight: 128 }}
          placeholder='Insert your note here'
          value={teacherNote}
          onChangeText={note => setTeacherNote(note)}
        />
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

export default TeacherAssignmentSubmissionPanel