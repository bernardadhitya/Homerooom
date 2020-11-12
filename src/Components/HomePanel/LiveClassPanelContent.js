import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';

const LiveClassPanelContent = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <Layout style={styles.row} level='3'>
      <Layout style={styles.column} level='3'>
        <View style={{backgroundColor: '#FDD444', borderRadius: 10}}>
          <View style={styles.row}>
            <View>
              <CharacterMrTeacher/>
            </View>
            <View style={styles.center}>
              <Text style={{fontFamily: 'Bold', fontSize: 16}}>Mathematics</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>Mr Wishnu</Text>
            </View>
            <View style={styles.center}>
              <View style={{
                alignSelf: 'flex-start',
                backgroundColor:'#FFF5E3',
                paddingHorizontal: 8,
                paddingTop: 6,
                borderRadius: 15,
                justifyContent: 'center',
                marginLeft: 20
              }}>
                <Text style={{
                  fontFamily: 'SemiBold',
                  fontSize: 12,
                  color: '#EF5B54',
                  
                }}>
                  09.00AM
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Layout>
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

export default LiveClassPanelContent