import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import VectorPageOne from '../../Assets/vector/VectorPageOne';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import IconButtonNext from '../../Assets/icons/IconButtonNext';
import { useNavigation } from '@react-navigation/native';
import CharacterMrTeacherFullBody from '../../Assets/characters/CharacterMrTeacherFullBody';
import CharacterStudentFullBody from '../../Assets/characters/CharacterStudentFullBody';
import { AuthContext } from '../../Helper/AuthProvider';

const PageFive = ({ route }) => {
  const { userName, email, avatar } = route.params;
  const { loginAsStudent, loginAsTeacher } = useContext(AuthContext);
  const [role, setRole] = useState('');
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  const redirectLogin = () => {
    return role === 'teacher' ? loginAsTeacher() : loginAsStudent();
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#BDE7FD'
        }}
      >
        <ScrollView style={{marginHorizontal: 30}}>
          <View style={{marginTop: 64}}>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              One
            </Text>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              more thing!
            </Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>
              We would like to know you better
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 12, marginBottom: 10}}>
              Who are you?
            </Text>
            <View style={styles.row}>
              <View style={styles.column}>
                <TouchableOpacity onPress={() => setRole('teacher')}>
                  <View style={styles.column, {
                    padding: 16,
                    borderRadius: 8,
                    backgroundColor:'#FFFFFF',
                    minHeight: 230,
                    justifyContent: 'center',
                    marginRight: 16,
                    minWidth: 160,
                    alignItems: 'center'
                  }}>
                    <CharacterMrTeacherFullBody/>
                  </View>
                </TouchableOpacity>
                <Text style={{
                  fontFamily: 'SemiBold', fontSize: 16, marginTop: 14, textAlign: 'center'
                }}>
                  Teacher
                </Text>
              </View>
              <View style={styles.column}>
                <TouchableOpacity onPress={() => setRole('student')}>
                  <View style={styles.column, {
                    padding: 16,
                    borderRadius: 8,
                    backgroundColor:'#FFFFFF',
                    minHeight: 230,
                    justifyContent: 'center',
                    minWidth: 160,
                    alignItems: 'center'
                  }}>
                    <CharacterStudentFullBody/>
                  </View>
                </TouchableOpacity>
                <Text style={{
                  fontFamily: 'SemiBold', fontSize: 16, marginTop: 14, textAlign: 'center'
                }}>
                  Student
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity>
              <IconButtonNext onPress={() => redirectLogin()}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
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

export default PageFive;