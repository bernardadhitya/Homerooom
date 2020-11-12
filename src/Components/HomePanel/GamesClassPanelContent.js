import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import BadgeMedal from '../../Assets/badges/BadgeMedal';

const GamesPanelContent = () => {
  let [fontsLoaded] = useFonts(Fonts);

  const renderAssignmentsPanelCard = (backgroundColor) => {
    return (
      <Layout style={styles.column, {marginRight: 10}} level='3'>
        <Card style={styles.column}>
          <Layout style={{alignItems:'center'}}>
            <BadgeMedal/>
          </Layout>
          <Layout style={{alignItems:'center', marginTop: 10}}>
            <Text style={{fontFamily: 'Bold', fontSize: 14}}>Test</Text>
            <Text style={{fontFamily: 'Regular', fontSize: 14}}>09/11/2020</Text>
          </Layout>
        </Card>
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

export default GamesPanelContent