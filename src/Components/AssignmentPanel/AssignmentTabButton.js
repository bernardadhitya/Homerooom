import React from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';

const AssignmentTabButton = (props) => {
  const {active, title} = props;
  let [fontsLoaded] = useFonts(Fonts);

  const buttonStyles = {
    active: {
      color: '#63C7FD',
      hasBackgroundColor: true
    },
    inactive: {
      color: '#7F7F7F',
      hasBackgroundColor: false
    }
  }

  return fontsLoaded ? (
    <View
      style={{
        backgroundColor: buttonStyles[active].hasBackgroundColor ? '#FFFFFF' : null,
        paddingTop: 8,
        paddingHorizontal: 8,
        margin: 8,
        borderRadius: 8,
      }}
    >
      <Text style={{
        fontFamily: 'Medium',
        fontSize: 14,
        color: buttonStyles[active].color
      }}>
        {title}
      </Text>
    </View>
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

export default AssignmentTabButton