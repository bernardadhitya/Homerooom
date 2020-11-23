import React, { useContext } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { Fonts } from "../../Constants/Fonts";
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ScrollView } from 'react-native';
import { Layout } from '@ui-kitten/components';
import { ListOfGames } from '../../Constants/ListOfGames';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { Characters } from '../../Constants/Characters';
import VectorPageTwo from '../../Assets/vector/VectorPageTwo';
import { Colors } from '../../Constants/Colors';
import { AuthContext } from '../../Helper/AuthProvider';

const { Bold } = Fonts;

const Stack = createStackNavigator();

const PlayGamePage = ({ route }) => {
  const { gameName } = route.params
  return (<WebView source={{ uri: ListOfGames[gameName].link }} style={{ marginTop: 20 }} />);
}

const Feed = () => {
  const {user: {username}} = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);
  const navigation = useNavigation();

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
              marginTop: 30,
              marginRight: 10,
              marginLeft: 10,
              marginBottom: 0,
            }}
          >
            <View
              style={{
                marginTop: 0,
                marginRight: 10,
                marginBottom: 0,
              }}
            >
              <Text style={{ fontFamily: 'Bold', fontSize: 21 }}>Games</Text>
            </View>
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
              padding: 10,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}>
              <View style={styles.row}>
                <View style={{ flex: 1 }}>
                  <Text style={{fontFamily: 'Bold', fontSize: 18}}>
                    Hi, {username}
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Text style={{fontSize: 36}}>3</Text>
                  <Text style={{fontFamily: 'Regular', fontSize: 12}}>Badges</Text>
                </View>
                <View style={{padding: 16}}></View>
                <View style={styles.col}>
                  <Text style={{fontSize: 36}}>6</Text>
                  <Text style={{fontFamily: 'Regular', fontSize: 12}}>Available Games</Text>
                </View>
              </View>
            </View>
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
            marginTop: 16
          }} level='3'>
            <View style={{
              backgroundColor: '#ffffff',
              borderRadius: 8,
              padding: 10
            }}>
              <Text style={{fontFamily: 'Bold', fontSize: 14}}>
                Your Recently Earned Badges
              </Text>
              <Text style={{fontFamily: 'Regular', fontSize: 10}}>
                Play more to earn more badges!
              </Text>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Image
                    source={require('../../Assets/badges/BadgeCrown.png')}
                    style={{
                      width: 75,
                      height: 75
                    }}
                  />
                </View>
                <View style={styles.col}>
                  <Image
                    source={require('../../Assets/badges/BadgeDiamond.png')}
                    style={{
                      width: 75,
                      height: 75
                    }}
                  />
                </View>
                <View style={styles.col}>
                  <Image
                    source={require('../../Assets/badges/BadgeCat.png')}
                    style={{
                      width: 75,
                      height: 75
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={() => {navigation.navigate("PlayGame", {gameName: 'gartic'})}}>
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
                    <View style={styles.row, {alignItems: 'center'}}>
                      <Image
                        source={ListOfGames['gartic'].logo}
                        style={ListOfGames['gartic'].style}
                      />
                    </View>
                  </View>
                </Layout>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("PlayGame", {gameName: 'kahoot'})}}>
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
                    <View style={styles.row, {alignItems: 'center'}}>
                      <Image
                        source={ListOfGames['kahoot'].logo}
                        style={ListOfGames['kahoot'].style}
                      />
                    </View>
                  </View>
                </Layout>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("PlayGame", {gameName: 'piano'})}}>
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
                    <View style={styles.row, {alignItems: 'center'}}>
                      <Image
                        source={ListOfGames['piano'].logo}
                        style={ListOfGames['piano'].style}
                      />
                    </View>
                  </View>
                </Layout>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("PlayGame", {gameName: 'outspell'})}}>
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
                    <View style={styles.row, {alignItems: 'center'}}>
                      <Image
                        source={ListOfGames['outspell'].logo}
                        style={ListOfGames['outspell'].style}
                      />
                    </View>
                  </View>
                </Layout>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("PlayGame", {gameName: 'scramble'})}}>
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
                    <View style={styles.row, {alignItems: 'center'}}>
                      <Image
                        source={ListOfGames['scramble'].logo}
                        style={ListOfGames['scramble'].style}
                      />
                    </View>
                  </View>
                </Layout>
              </Layout>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("PlayGame", {gameName: 'fillIns'})}}>
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
                    <View style={styles.row, {alignItems: 'center'}}>
                      <Image
                        source={ListOfGames['fillIns'].logo}
                        style={ListOfGames['fillIns'].style}
                      />
                    </View>
                  </View>
                </Layout>
              </Layout>
            </TouchableOpacity>
          </View>
          <View style={{height: 100}}></View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const GamePage = () => {
  return (
    <Stack.Navigator
      initialRouteName="Game"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Game"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          }
        }}
        component={Feed}
      />
      <Stack.Screen
        name="PlayGame"
        options={{
          headerTitle: "Play Game"
        }}
        name="PlayGame"
        component={PlayGamePage}
      />
    </Stack.Navigator>
  )
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

export default GamePage;