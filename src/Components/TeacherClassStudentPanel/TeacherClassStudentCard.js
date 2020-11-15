import React, { useEffect, useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import IconMenu from '../../Assets/icons/IconMenu';
import { getUserById } from '../../../firebase';
import { Avatars } from '../../Constants/Avatars';

const TeacherClassStudentCard = (props) => {
  const { studentId } = props;
  const [userData, setUserData] = useState({});
  let [fontsLoaded] = useFonts(Fonts);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUserById = await getUserById(studentId);
      setUserData(fetchedUserById);
    };
    fetchData();
  }, []);

  return fontsLoaded ? (
    <View style={{
      backgroundColor: '#FFFFFF',
      padding: 10,
      borderRadius: 8,
      marginTop: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    }}>
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={{
            backgroundColor: '#FFF5E3',
            padding: 8,
            borderRadius: 8
          }}>
            <Text>{Avatars[userData.avatar] || ''}</Text>
          </View>
          <View style={{paddingTop: 8, paddingLeft: 8}}>
            <Text style={{fontFamily: 'Medium', fontSize: 16}}>{userData.name || ''}</Text>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', paddingTop: 8}}>
          <IconMenu/>
        </View>
      </View>
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

export default TeacherClassStudentCard