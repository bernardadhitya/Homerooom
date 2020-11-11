import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Layout } from 'react-native-ui-kitten';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import IconImageAttachment from '../../Assets/icons/IconImageAttachment';
import { TouchableOpacity } from 'react-native';
import MySubmissionCardContent from './MySubmissionCardContent';

const MySubmissionCard = (props) => {
  const {detail, status} = props;
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
                My Submission
              </Text>
            </View>
            <View style={{flex: 1}}>
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
          <MySubmissionCardContent status={status}/>
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