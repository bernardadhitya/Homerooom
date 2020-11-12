import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import OnlineClassCard from './OnlineClassCard';

const OnlineNowContent = () => {
  let [fontsLoaded] = useFonts(Fonts);

  return fontsLoaded ? (
    <Layout style={{marginVertical: 10}}>
      <OnlineClassCard online/>
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
});

export default OnlineNowContent;