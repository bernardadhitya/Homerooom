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
import VectorPageThree from '../../Assets/vector/VectorPageThree';

const PageThree = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#FFE9E5'
        }}
      >
        <ScrollView style={{marginHorizontal: 20}}>
          <View style={{alignItems: 'center', marginTop: 48}}>
            <VectorPageThree/>
          </View>
          <View style={{marginTop: 36, paddingLeft: 30}}>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
            Your tasks,
            </Text>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
            in one place
            </Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>
              Submit assignments and get notified in one place!
            </Text>
          </View>
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <TouchableOpacity>
              <IconButtonNext onPress={() => navigation.navigate('PageFour')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default PageThree;