import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import { Characters } from '../../Constants/Characters';

const OnlineClassCard = (props) => {
  const { className, color, avatar, online } = props;
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <Layout style={styles.row} level='3'>
      <Layout style={styles.column} level='3'>
        <View style={{backgroundColor: color, borderRadius: 10, marginTop: 14}}>
          <View style={styles.row}>
            <View>
              { Characters[avatar] }
            </View>
            <View style={styles.center}>
              <Text style={{fontFamily: 'Bold', fontSize: 16}}>{className}</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>Naomi</Text>
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
            {online ? <View style={styles.center}>
              <View style={{
                alignSelf: 'flex-end',
                backgroundColor:'#EF5B54',
                paddingHorizontal: 8,
                paddingTop: 6,
                borderRadius: 4,
                justifyContent: 'center',
                marginRight: 20
              }}>
                <Text style={{
                  fontFamily: 'SemiBold',
                  fontSize: 12,
                  color: '#FFFFFF',
                  
                }}>
                  Online
                </Text>
              </View>
            </View> : <View></View>}
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
    flexDirection: 'row'
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

export default OnlineClassCard