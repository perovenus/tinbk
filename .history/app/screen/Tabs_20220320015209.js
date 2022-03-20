import * as React from 'react';
import { Text, View,  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
      screenOptions={
       headerStyle:{
         
       }
      }
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Đăng bán" component={SettingsScreen} />
        <Tab.Screen name="Yêu thích" component={HomeScreen} />
        <Tab.Screen name="Cá nhân" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// ({ route }) => ({
//   tabBarIcon: ({ focused, color, size }) => {
//     let iconName;
//     if (route.name === 'Trang chủ') {
//       iconName = focused? 'home': 'home';
//     } else if (route.name === 'Đăng bán') {
//       iconName = focused ? 'plus-circle' : 'plus-circle';
//     }else if (route.name === 'Yêu thích') {
//       iconName = focused ? 'heart' : 'heart';
//     }else if (route.name === 'Cá nhân') {
//       iconName = focused ? 'user-circle' : 'user-circle';
//     }

//     // You can return any component that you like here!
//     return <FontAwesome5 name={iconName} size={size} color={color} />;
//   },
//   tabBarActiveTintColor: 'tomato',
//   tabBarInactiveTintColor: 'black',
//   backgroundColor: 'black'
// })