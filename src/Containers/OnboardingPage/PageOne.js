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

const PageOne = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFF4CD'
        }}
      >
        <ScrollView style={{marginHorizontal: 20}}>
          <View style={{alignItems: 'center', marginTop: 48}}>
            <VectorPageOne/>
          </View>
          <View style={{marginTop: 36, paddingHorizontal: 30}}>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              Be in class,
              anywhere
            </Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>
              Use Live Class featureto attend class via online streaming. Closing gaps made by distance!
            </Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <TouchableOpacity>
              <IconButtonNext onPress={() => navigation.navigate('PageTwo')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PageOne;