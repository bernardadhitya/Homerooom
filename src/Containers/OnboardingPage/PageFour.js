import React, { useState } from 'react';
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
import { Input } from '@ui-kitten/components';
import ButtonDogAvatar from '../../Assets/button/ButtonDogAvatar';
import ButtonCatAvatar from '../../Assets/button/ButtonCatAvatar';
import ButtonRatAvatar from '../../Assets/button/ButtonRatAvatar';
import ButtonHamsterAvatar from '../../Assets/button/ButtonHamsterAvatar';
import ButtonRabbitAvatar from '../../Assets/button/ButtonRabbitAvatar';
import ButtonFoxAvatar from '../../Assets/button/ButtonFoxAvatar';
import ButtonBearAvatar from '../../Assets/button/ButtonBearAvatar';
import ButtonPandaAvatar from '../../Assets/button/ButtonPandaAvatar';
import ButtonTigerAvatar from '../../Assets/button/ButtonTigerAvatar';
import ButtonLionAvatar from '../../Assets/button/ButtonLionAvatar';
import ButtonPenguinAvatar from '../../Assets/button/ButtonPenguinAvatar';
import ButtonMonkeyAvatar from '../../Assets/button/ButtonMonkeyAvatar';

const PageFour = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#E5FCFB'
        }}
      >
        <ScrollView style={{marginHorizontal: 30}}>
          <View style={{marginTop: 64}}>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              Before
            </Text>
            <Text style={{fontFamily: 'Bold', fontSize: 36}}>
              we start...
            </Text>
            <Text style={{fontFamily: 'Regular', fontSize: 12}}>
              We would like to know you better
            </Text>
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>
              What's your name?
            </Text>
            <Input
              placeholder={'Insert your name here'}
              value={userName}
              onChangeText={value => setUserName(value)}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>
              What's your email?
            </Text>
            <Input
              placeholder={'Insert your email here'}
              value={email}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>
              Pick your avatar
            </Text>
            <View style={styles.row}>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐶')}>
                <ButtonDogAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐱')}>
                <ButtonCatAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐭')}>
                <ButtonRatAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐹')}>
                <ButtonHamsterAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐰')}>
                <ButtonRabbitAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🦊')}>
                <ButtonFoxAvatar/>
              </TouchableOpacity> 
            </View>
            <View style={styles.row}>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐻')}>
                <ButtonBearAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐼')}>
                <ButtonPandaAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐯')}>
                <ButtonTigerAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🦁')}>
                <ButtonLionAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐧')}>
                <ButtonPenguinAvatar/>
              </TouchableOpacity>
              <TouchableOpacity style={{padding: 4}} onPress={() => setAvatar('🐵')}>
                <ButtonMonkeyAvatar/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity>
              <IconButtonNext
                onPress={() => navigation.navigate('PageFive', {
                  userName, email, avatar
                })}
              />
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

export default PageFour;