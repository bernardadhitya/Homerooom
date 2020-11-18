import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';
import IconImageAttachment from '../../Assets/icons/IconImageAttachment';
import { Characters } from '../../Constants/Characters';

const AssignmentCard = (props) => {
  const {title, color, avatar, teacherName, className, detail} = props;
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
          backgroundColor: color,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
          <View style={styles.row}>
            <View>
              { Characters[avatar] }
            </View>
            <View style={styles.center}>
              <Text style={{fontFamily: 'Bold', fontSize: 16}}>{className}</Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>{teacherName}</Text>
              <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <View style={{
                  padding: 4,
                  borderRadius: 20,
                  backgroundColor:'#FFF5E3',
                }}>
                  <Text>🦊</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 20
        }}>
          <Text style={{fontFamily: 'Bold', fontSize: 18}}>
            {title}
          </Text>
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
          { detail ? <View>
            <Text style={{fontFamily: 'Regular', fontSize: 12, paddingVertical: 3}}>
              Do this exercise
            </Text>
            <Text style={{fontFamily: 'SemiBold', fontSize: 12, paddingVertical: 3}}>Attachments</Text>
            <Card>
              <Layout style={styles.row}>
                <Layout style={styles.column, {marginRight: 35}}>
                  <IconImageAttachment />
                </Layout>
                <Layout style={styles.column}>
                  <Text style={{fontFamily: 'Medium', fontSize: 10}}>Texbook pg.12-13</Text>
                  <Text style={{fontFamily: 'Regular', fontSize: 8}}>0.8 MB</Text>
                </Layout>
              </Layout>
            </Card>
          </View> : null}
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

export default AssignmentCard