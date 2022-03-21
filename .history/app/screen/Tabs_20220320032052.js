import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo  from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

export default function Tabs() {
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
        height: 70,
        ...styles.shadow
      },
      headerShown: false,
      tabBarShowLabel: false,
    }}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} 
        options={{
          tabBarIcon:({focused}) =>(

            <View style={{alignItems:'center',justifyContent:'center', top : 5}}>


              <Entypo name = "home" style={{color: focused ? 'red': 'gray', width: 30, height: 30, fontSize: 25,}} />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 14}}>
                Trang chủ
              </Text>


            </View>
          ),
        }}
        />
        <Tab.Screen name="Đăng bán" component={SettingsScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center', top : 5}}>


              <FontAwesome5 name = "plus-circle" style={{color: focused ? 'red': 'gray', width: 30, height: 30, fontSize: 25,}} />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 14}}>
                Đăng bán
              </Text>


            </View>
          ),
        }}/>
        <Tab.Screen name="Yêu thích" component={HomeScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center', top : 5}}>


              <FontAwesome5 name = "heart" style={{color: focused ? 'red': 'gray', width: 30, height: 30, fontSize: 25,}} />  

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 14}}>
                Yêu thích
              </Text>


            </View>
          ),
        }}/>
        <Tab.Screen name="Cá nhân" component={SettingsScreen} 
        options={{
          tabBarIcon:({focused}) =>(
            <View style={{alignItems:'center',justifyContent:'center', top : 5}}>


              <Image
                source={require('../assets/hutao.jpg')}
                resizeMode='contain'
                style={{
                  width:25,
                  height: 25,
                  // tintColor: focused ? 'gray' :'red',
                }}
              />

             
              <Text style={{color: focused ? 'red': 'gray', fontSize: 14}}>
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