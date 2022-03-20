import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo  from 'react-native-vector-icons/Entypo';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={{backgroundColor:'black'}}>
      <Tab.Navigator
       screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:{
        backgroundColor:"white",
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        borderRadius: 15,
        height: 80,
        ...styles.shadow
      },
      headerShown: false,
      tabBarShowLabel: false,
    }}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} 
        options={{
          tabBarIcon:({focused}) =>(

            <View style={{alignItems:'center',justifyContent:'center', top : 10}}>


              <Entypo name = "home" style={{color: focused ? 'red': 'gray', width: 30, height: 30, fontSize: 25,}} />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 12}}>
                Trang chủ
              </Text>


            </View>
          ),
        }}
        />
        <Tab.Screen name="Đăng bán" component={SettingsScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center', top : 10}}>


              <FontAwesome5 name = "home" style={{color: focused ? 'red': 'gray', width: 30, height: 30, fontSize: 25,}} />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 12}}>
                Đăng bán
              </Text>


            </View>
          ),
        }}/>
        <Tab.Screen name="Yêu thích" component={HomeScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center', top : 10}}>


              <Image
                source={require('../assets/hutao.jpg')}
                resizeMode='contain'
                style={{
                  width:25,
                  height: 25,
                  // tintColor: focused ? 'gray' :'red',
                }}
              />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 12}}>
                Yêu thích
              </Text>


            </View>
          ),
        }}/>
        <Tab.Screen name="Cá nhân" component={SettingsScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center', top : 10}}>


              <Image
                source={require('../assets/hutao.jpg')}
                resizeMode='contain'
                style={{
                  width:25,
                  height: 25,
                  // tintColor: focused ? 'gray' :'red',
                }}
              />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 12}}>
                Cá nhân
              </Text>


            </View>
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#7F5DF0",
    shadowOffset:{
      width: 0,
      height: 10,
    },
    shadowOpacity: .25,
    shadowRadius: 3.5,
    elevation: 5
  }
})