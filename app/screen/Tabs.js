import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Home from './Home';
import UserInfo from './Userinfo';
import Notification from './Notification';
import UploadProduct from './UploadProduct';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer style={{backgroundColor: 'black'}}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#DC4B4B',
          tabBarInactiveTintColor: '#757575',
          tabBarStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            zIndex: 4,
            height: 65,
            ...styles.shadow,
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          
        }}>
        <Tab.Screen
          name="Trang chủ"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 5,
                }}>
                <Entypo
                  name="home"
                  size={24}
                  style={{color: focused ? '#2F80ED' : '#757575'}}
                />

                <Text style={{color: focused ? '#2F80ED' : 'gray', fontSize: 12}}>
                  Trang chủ
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Đăng bán"
          component={UploadProduct}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 5,
                }}>
                <FontAwesome5
                  name="plus-circle"
                  size={24}
                  style={{color: focused ? '#2F80ED' : '#757575'}}
                />

                <Text style={{color: focused ? '#2F80ED' : 'gray', fontSize: 12}}>
                  Đăng bán
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Yêu thích"
          component={Notification}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 5,
                }}>
                <FontAwesome5
                  name="bell"
                  size={24}
                  style={{color: focused ? '#2F80ED' : '#757575'}}
                  solid
                />

                <Text style={{color: focused ? '#2F80ED' : 'gray', fontSize: 12}}>
                  Thông báo
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cá nhân"
          component={UserInfo}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 5,
                }}>
                <FontAwesome5
                  name="user"
                  size={24}
                  style={{color: focused ? '#2F80ED' : '#757575'}}
                  solid
                />

                <Text style={{color: focused ? '#2F80ED' : 'gray', fontSize: 12}}>
                  Cá nhân
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
