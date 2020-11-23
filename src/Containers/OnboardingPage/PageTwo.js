import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import VectorPageOne from '../../Assets/vector/VectorPageOne';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import IconButtonNext from '../../Assets/icons/IconButtonNext';
import { useNavigation } from '@react-navigation/native';
import VectorPageTwo from '../../Assets/vector/VectorPageTwo';

const PageTwo = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#F2FFD7'
        }}
      >
        <ScrollView style={{marginHorizontal: 20}}>
          <View style={{alignItems: 'center', marginTop: 120}}>
            <VectorPageTwo/>
          </View>
          <View style={{marginTop: 36, paddingHorizontal: 30}}>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              Play games,
            </Text>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              Extra points!
            </Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>
              Play games prepared by your teacher. Extra points, wait for me!
            </Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <TouchableOpacity>
              <IconButtonNext onPress={() => navigation.navigate('PageThree')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PageTwo;