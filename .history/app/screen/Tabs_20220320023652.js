import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
          
        }}
        />
        <Tab.Screen name="Đăng bán" component={SettingsScreen} />
        <Tab.Screen name="Yêu thích" component={HomeScreen} />
        <Tab.Screen name="Cá nhân" component={SettingsScreen} />
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