import { useFonts } from '@use-expo/font';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import IconAssignments from '../../Assets/icons/IconAssignments';
import IconGames from '../../Assets/icons/IconGames';
import IconLiveClass from '../../Assets/icons/IconLiveClass';
import { Fonts } from '../../Constants/Fonts';
import AssignmentsPanelContent from './AssignmentsPanelContent';
import GamesPanelContent from './GamesClassPanelContent';
import LiveClassPanelContent from './LiveClassPanelContent';

const HomePanel = (props) => {
  const { type } = props;
  let [fontsLoaded] = useFonts(Fonts);

  const panelHeaders = {
    LiveClass: {
      icon: <IconLiveClass color="#EF5B54"/>,
      title: "Your Next Class",
      subtitle: "Don’t be late for class!",
      content: <LiveClassPanelContent/>
    },
    Assignments: {
      icon: <IconAssignments color="#56BBB4"/>,
      title: "Your Assignments",
      subtitle: "You have 3 assignments waiting for you",
      content: <AssignmentsPanelContent/>
    },
    Games: {
      icon: <IconGames color="#9DCC39"/>,
      title: "Your Achievements",
      subtitle: "Good job, champ! Keep up the good work!",
      content: <GamesPanelContent/>
    }
  }

  return (
    <Layout
      style={styles.column}
      level='3'
    >
      <Layout
        style={styles.row}
        level='3'
      >
        <Layout
          style={{
            marginRight: 15
          }}
          level='3'
        >
          {panelHeaders[type].icon}
        </Layout>
        <Layout level='3'>
          <Text style={{
            fontFamily: 'Bold',
            fontSize: 16
          }}>
            {panelHeaders[type].title}
          </Text>
          <Text style={{
            fontFamily: 'Regular',
            fontSize: 10,
            marginBottom: 10
          }}>
            {panelHeaders[type].subtitle}
          </Text>
        </Layout>
        <Layout
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
          level='3'
        >
          <Text style={{
            fontFamily: 'Medium',
            fontSize: 16,
            color: '#63C7FD',
            justifyContent: 'center'
          }}>
            View All
          </Text>
        </Layout>
      </Layout>
      <Layout level='3'>
        {panelHeaders[type].content}
      </Layout>
    </Layout>
  )
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
});

export default HomePanel;