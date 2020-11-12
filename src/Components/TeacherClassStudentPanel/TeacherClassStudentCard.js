import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import IconMenu from '../../Assets/icons/IconMenu';

const TeacherClassStudentCard = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
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
        <View style={styles.row}>
          <View style={{
            backgroundColor: '#FFF5E3',
            padding: 8,
            borderRadius: 8
          }}>
            <Text>🦊</Text>
          </View>
          <View style={{paddingTop: 8, paddingLeft: 8}}>
            <Text style={{fontFamily: 'Medium', fontSize: 16}}>Patrick</Text>
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

export default TeacherClassStudentCard