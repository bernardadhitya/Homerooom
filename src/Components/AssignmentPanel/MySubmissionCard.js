import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Layout } from 'react-native-ui-kitten';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import IconImageAttachment from '../../Assets/icons/IconImageAttachment';
import { TouchableOpacity } from 'react-native';

const MySubmissionCard = (props) => {
  const {detail} = props;
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={styles.row, {marginVertical: 10}} level='3'>
      <View style={styles.column, {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
      }} level='3'>
        <View style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 20
        }}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={{fontFamily: 'Medium', fontSize: 12}}>
                Play “Marry Has a Little Lamb”
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{
                fontFamily: 'Medium',
                fontSize: 12,
                textAlign: 'right',
                color: '#9CCB38'
              }}>
                Assigned
              </Text>
            </View>
          </View>
          <View style={styles.col}>
            <Text style={{fontFamily: 'Regular', fontSize: 10, color: '#EF5B54'}}>
              Don’t forget to submit your assignment before due date!
            </Text>
          </View>
          <TouchableOpacity onPress={() => console.log('pressed')}>
            <View style={styles.center, {
              marginTop: 16,
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 4,
              borderColor: '#63C7FD',
              borderWidth: 1,
              borderRadius: 8
            }}>
              <Text style={{fontFamily: 'Medium', fontSize: 12, color: '#63C7FD'}}>+ Add Submission</Text>
            </View>
          </TouchableOpacity>
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
        </View>
      </View>
    </View>
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

export default MySubmissionCard