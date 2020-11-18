import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { otherGames, gameRecommendations, ListOfGames } from '../../Constants/ListOfGames';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { Characters } from '../../Constants/Characters';
import VectorPageTwo from '../../Assets/vector/VectorPageTwo';
import { Colors } from '../../Constants/Colors';
import { AuthContext } from '../../Helper/AuthProvider';
import IconBack from '../../Assets/icons/IconBack';

const TeacherGamePage = ({route}) => {
  const { classData } = route.params;
  const {user: {username}} = useContext(AuthContext);
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts(Fonts);

  const renderOtherGames = () => {
    if (!classData) return null;
    return otherGames[classData.subject].map((gameName) => {
      return (
        <TouchableOpacity onPress={() => {console.log('clicked')}}>
          <Layout style={styles.row} level='3'>
            <Layout style={styles.column} level='3'>
              <View style={{
                backgroundColor: '#ffffff', borderRadius: 10, padding: 16, marginTop: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 3,
              }}>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <Image
                      source={ListOfGames[gameName].logo}
                      style={ListOfGames[gameName].style}
                    />
                    <Text style={{ fontFamily: 'Bold', fontSize: 21, marginTop: 10}}>{ListOfGames[gameName].name}</Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Image source={require('../../Assets/icons/IconAdd.png')}/>
                  </View>
                </View>
              </View>
            </Layout>
          </Layout>
        </TouchableOpacity>
      )
    })
  }



  const renderGameRecommendation = () => {
    if (!classData) return null;
    return gameRecommendations[classData.subject].map((gameName) => {
      return (
        <TouchableOpacity onPress={() => {console.log('clicked')}}>
          <Layout style={styles.row} level='3'>
            <Layout style={styles.column} level='3'>
              <View style={{
                backgroundColor: '#ffffff', borderRadius: 10, padding: 16, marginTop: 15,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                
                elevation: 3,
              }}>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <Image
                      source={ListOfGames[gameName].logo}
                      style={ListOfGames[gameName].style}
                    />
                    <Text style={{ fontFamily: 'Bold', fontSize: 21, marginTop: 10}}>{ListOfGames[gameName].name}</Text>
                  </View>
                  <View style={{alignItems: 'flex-end'}}>
                    <Image source={require('../../Assets/icons/IconAdd.png')}/>
                  </View>
                </View>
              </View>
            </Layout>
          </Layout>
        </TouchableOpacity>
      )
    })
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return ( 
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView style={{paddingHorizontal: 20}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 30
            }}
          >
            <TouchableOpacity 
              style={{
                paddingTop: 1,
                paddingRight: 18
              }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <IconBack/>
            </TouchableOpacity>
            <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Games</Text>
          </View>
          <View style={styles.column, {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            
            elevation: 3,
          }} level='3'>
            <View style={{
              backgroundColor: Colors.green,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
              <View style={styles.row}>
                <View>
                  <VectorPageTwo height={150}/>
                </View>
              </View>
            </View>
            <View style={{
              backgroundColor: '#FFFFFF',
              padding: 20,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={{fontFamily: 'SemiBold', fontSize: 18}}>
                    Hi, {username}
                  </Text>
                  <Text style={{fontFamily: 'Bold', fontSize: 21}}>
                    Welcome to our Game Hub!
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 24}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 18}}>
              Recommended games for
            </Text>
            <Text style={{fontFamily: 'Bold', fontSize: 21}}>
            "{classData.subject}"
            </Text>
          </View>
          { renderGameRecommendation() }
          <View style={{marginTop: 24}}>
            <Text style={{fontFamily: 'SemiBold', fontSize: 18}}>
              Other games you might be interested
            </Text>
          </View>
            { renderOtherGames() }
        </ScrollView>
      </SafeAreaView>
    )
  }
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

export default TeacherGamePage;