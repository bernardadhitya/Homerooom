import React, { useContext } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import { Characters } from '../../Constants/Characters';
import { AuthContext } from '../../Helper/AuthProvider';
import { Colors } from '../../Constants/Colors';

const LiveClassPanelContent = () => {
  const {user: {username}} = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);

  const renderPanel = () => {
    return username === 'Bernard' ? (
      <Layout style={styles.row} level='3'>
      <Layout style={styles.column} level='3'>
        <View style={{backgroundColor: '#FDD444', borderRadius: 10}}>
          <View style={styles.row}>
            <View>
              { Characters[0] }
            </View>
            <View style={styles.center}>
              <Text style={{fontFamily: 'Bold', fontSize: 16}}>Mathematics</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>Naomi</Text>
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
    ) : (
      <View style={{alignItems: 'center', paddingTop: 14}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 14}}>There is no class online right now</Text>
      </View>
    )
  }

  return fontsLoaded ? renderPanel() : <AppLoading/>;
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