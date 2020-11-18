import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import OnlineClassCard from './OnlineClassCard';
import { Colors } from '../../Constants/Colors';

const YourClassesContent = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <Layout>
      <OnlineClassCard className={'Mathematics - Class 1A'} color={Colors.yellow} avatar={0}/>
      <OnlineClassCard className={'Science - Class 6C'} color={Colors.aqua} avatar={4}/>
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

export default YourClassesContent