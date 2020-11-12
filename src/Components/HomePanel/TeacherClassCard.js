import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';

const TeacherClassCard = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{
      backgroundColor: '#FDD444',
      borderRadius: 10,
      marginVertical: 10
    }}>
      <View style={styles.row}>
        <View>
          <CharacterMrTeacher/>
        </View>
        <View style={styles.center}>
          <Text style={{fontFamily: 'Bold', fontSize: 16}}>Mathematics</Text>
          <Text style={{fontFamily: 'Regular', fontSize: 10}}>Mr Wishnu</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <View style={{
              padding: 4,
              borderRadius: 20,
              backgroundColor:'#FFF5E3',
              
            }}>
              <Text>🦊</Text>
            </View>
            <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
              <Text>🐶</Text>
            </View>
            <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
              <Text>🐵</Text>
            </View>
            <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
              <Text>+21</Text>
            </View>
          </View>
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

export default TeacherClassCard