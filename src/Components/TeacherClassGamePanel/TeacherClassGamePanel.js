import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { getClassById } from '../../../firebase';
import { TouchableOpacity } from 'react-native';
import { Characters } from '../../Constants/Characters';
import { ListOfGames } from '../../Constants/ListOfGames';

const TeacherClassGamePanel = (props) => {
  const { classId } = props;
  const [className, setClassName] = useState('');
  const [classGames, setClassGames] = useState([]);
  let [fontsLoaded] = useFonts(Fonts);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedClassData = await getClassById(classId);
      const { name, games } = fetchedClassData;
      setClassName(name);
      setClassGames(games);
    };
    fetchData();
  }, []);

  const renderGameCards = () => {
    return classGames.map((game) => { 
      return (
        <Layout style={styles.row} level='3'>
          <Layout style={styles.column} level='3'>
            <View style={{backgroundColor: '#ffffff', borderRadius: 10, padding: 16, marginTop: 15}}>
              <View style={styles.row, {alignItems: 'center'}}>
                <Image
                  source={ListOfGames[game].logo}
                  style={ListOfGames[game].style}
                />
              </View>
            </View>
          </Layout>
        </Layout>
      )
    })
  }

  return fontsLoaded ? (
    <View>
      <Text style={{fontFamily: 'Bold', fontSize: 18, paddingTop: 10}}>Games in this class</Text>
      { renderGameCards() }
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

export default TeacherClassGamePanel