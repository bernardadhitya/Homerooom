import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import { ScrollView } from 'react-native';

const ASSIGNMENTS = [
  {
    title: 'Play “Marry Has a Little Lamb”'
  }
]

const AssignmentsPanelContent = () => {
  let [fontsLoaded] = useFonts(Fonts);

  const renderAssignmentsPanelCard = (backgroundColor) => {
    return (
      <Layout style={styles.column, {marginRight: 10}} level='3'>
        <View style={{
          backgroundColor: backgroundColor,
          borderRadius: 10,
          paddingRight: 10,
          height: 170
        }}>
          <View style={styles.row}>
            <View style={{flex:1, justifyContent: 'flex-end'}}>
              <CharacterMrTeacher/>
            </View>
            <View style={styles.center}>
              <Text style={{
                fontFamily: 'Bold',
                fontSize: 16,
                flexShrink: 1,
                flexDirection: 'row'
              }}>
                Mathematics
              </Text>
              
              <View>
                <View style={{
                  alignSelf: 'flex-start',
                  backgroundColor:'#FFF5E3',
                  paddingHorizontal: 8,
                  paddingTop: 6,
                  borderRadius: 15,
                  justifyContent: 'center',
                  marginBottom: 4
                }}>
                  <Text style={{
                    fontFamily: 'SemiBold',
                    fontSize: 12,
                    color: '#EF5B54',
                  }}>
                    Due 16/11/2020
                  </Text>
                </View>
              </View>
              <Text style={{fontFamily: 'Bold', fontSize: 10}}>Mathematics</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>Mr Wishnu</Text>
            </View>
          </View>
        </View>
      </Layout>
    )
  }

  return fontsLoaded ? (
    <Layout style={styles.row} level='3'>
      <ScrollView horizontal>
        { renderAssignmentsPanelCard('#98E2DD') }
        { renderAssignmentsPanelCard('#9DCC38') }
        { renderAssignmentsPanelCard('#98E2DD') }
        { renderAssignmentsPanelCard('#9DCC38') }
        { renderAssignmentsPanelCard('#98E2DD') }
      </ScrollView>
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

export default AssignmentsPanelContent