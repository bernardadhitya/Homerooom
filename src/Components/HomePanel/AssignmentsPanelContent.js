import React, { useContext } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import { ScrollView } from 'react-native';
import { Characters } from '../../Constants/Characters';
import { Colors } from '../../Constants/Colors';
import { AuthContext } from '../../Helper/AuthProvider';

const ASSIGNMENTS = [
  {
    title: 'Play “Marry Has a Little Lamb”'
  }
]

const AssignmentsPanelContent = () => {
  const { user: {username} } = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);

  const renderAssignmentsPanelCard = (backgroundColor, title, className, teacherName, avatar) => {
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
              { Characters[avatar] }
            </View>
            <View style={styles.center}>
              <Text style={{
                fontFamily: 'Bold',
                fontSize: 16,
                flexShrink: 1,
                flexDirection: 'row'
              }}>
                {title}
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
              <Text style={{fontFamily: 'Bold', fontSize: 10}}>{className}</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>{teacherName}</Text>
            </View>
          </View>
        </View>
      </Layout>
    )
  }

  const renderPanel = () => {
    return username === 'Bernard' ? (
      <Layout style={styles.row} level='3'>
        <ScrollView horizontal>
          { renderAssignmentsPanelCard(Colors.aqua, 'Do exercise 2A\nno.1-5', 'Science', 'Naomi', 4) }
          { renderAssignmentsPanelCard(Colors.yellow, 'Exercise page\n12-13 no. 1-10', 'Mathematics', 'Naomi', 0) }
          { renderAssignmentsPanelCard(Colors.yellow, 'Exercise page\n1-5', 'Mathematics', 'Naomi', 0) }
        </ScrollView>
      </Layout>
    ) : (
      <View style={{alignItems: 'center', paddingTop: 14}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 14}}>There is no assignments right now</Text>
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

export default AssignmentsPanelContent