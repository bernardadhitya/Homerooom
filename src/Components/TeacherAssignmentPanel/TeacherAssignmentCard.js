import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import IconMenu from '../../Assets/icons/IconMenu';

const TeacherAssignmentCard = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <View style={{
      marginTop: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    }}>
      <View style={{
        backgroundColor: '#FDD444',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
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
      <View style={{
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      }}>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={{fontFamily: 'Bold', fontSize: 12}}>Exercise page 12-13 no. 1-10</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <IconMenu/>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={{fontSize: 36}}>10</Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>Submitted</Text>
          </View>
          <View style={{padding: 16}}></View>
          <View style={styles.col}>
            <Text style={{fontSize: 36}}>5</Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>Graded</Text>
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

export default TeacherAssignmentCard