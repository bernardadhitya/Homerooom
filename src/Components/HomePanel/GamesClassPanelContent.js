import React, { useContext } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { ScrollView } from 'react-native';
import BadgeMedal from '../../Assets/badges/BadgeMedal';
import { AuthContext } from '../../Helper/AuthProvider';

const GamesPanelContent = () => {
  const { user: { username }} = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);

  const renderAssignmentsPanelCard = (backgroundColor, sourceImg, title) => {
    return (
      <Layout style={styles.column, {marginRight: 10}} level='3'>
        <Card style={styles.column}>
          <Layout style={{alignItems:'center'}}>
          <Image
            source={sourceImg}
            style={{
              width: 75,
              height: 75
            }}
          />
          </Layout>
          <Layout style={{alignItems:'center', marginTop: 10}}>
            <Text style={{fontFamily: 'Bold', fontSize: 14}}>{title}</Text>
            <Text style={{fontFamily: 'Regular', fontSize: 14}}>09/11/2020</Text>
          </Layout>
        </Card>
      </Layout>
    )
  }

  const renderPanel = () => {
    return username === 'Bernard' ? (
      <Layout style={styles.row} level='3'>
        <ScrollView horizontal>
          { renderAssignmentsPanelCard(
              '#98E2DD',
              require('../../Assets/badges/BadgeCrown.png'),
              'Crown'
            )
          }
          { renderAssignmentsPanelCard(
              '#98E2DD',
              require('../../Assets/badges/BadgeDiamond.png'),
              'Diamond'
            )
          }
          { renderAssignmentsPanelCard(
              '#98E2DD',
              require('../../Assets/badges/BadgeCat.png'),
              'Elastic!'
            )
          }
        </ScrollView>
      </Layout>
    ) : (
      <View style={{alignItems: 'center', paddingTop: 14}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 14}}>There is no achievements right now</Text>
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

export default GamesPanelContent