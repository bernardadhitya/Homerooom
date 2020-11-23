import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { Colors } from '../../Constants/Colors';

const LiveClassVideoCallPage = (props) => {
  const { route } = props;
  const { classData } = route.params;
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  let [fontsLoaded] = useFonts(Fonts);

  console.log('classData:', classData);

  const renderStudentsAvatar = () => {
    if(!classData.students) return;
    const { students } = classData;
    const defaultAvatars = ['🦊', '🐶', '🐵'];
    if (students.length < 4){
      return defaultAvatars.slice(0, students.length).map((defaultAvatar) => (
        <View style={{
          padding: 4,
          borderRadius: 20,
          backgroundColor:'#FFF5E3',
          
        }}>
          <Text>{defaultAvatar}</Text>
        </View>
      ))
    } else {
      return (
        <>
          <View style={{padding: 4,borderRadius: 20,backgroundColor:'#FFF5E3'}}>
            <Text>🦊</Text>
          </View>
          <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
            <Text>🐶</Text>
          </View>
          <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
            <Text>🐵</Text>
          </View>
          <View style={{padding: 4, borderRadius: 20, backgroundColor:'#FFF5E3'}}>
            <Text>+{students.length - 3}</Text>
          </View>
        </>
      )
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          backgroundColor: '#ffffff',
          height: 150,
          alignItems: 'center',
          paddingTop: 35
        }}>
          <Text style={{fontFamily: 'Bold', fontSize: 16}}>
            {classData.subject} - {classData.name}
          </Text>
          { renderStudentsAvatar() }
          <Text style={{fontFamily: 'Medium', fontSize: 12, color: Colors.red, marginTop: 10}}>Class is now live, but noone else has entered the call</Text>
        </View>
        <Camera style={{ flex: 1 }} type={type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
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
  },
  shadowContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  }
});

export default LiveClassVideoCallPage;
