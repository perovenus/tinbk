//  import React from 'react';
//  import SigninScreen from './app/screen/SigninScreen';
//  import ViewImageScreen from './app/screen/ViewImageScreen';
//  import WelcomeScreen from './app/screen/WelcomeScreen';
//  import Notification from './app/screen/Notification'
//  import Tabs from './app/screen/Tabs'
//  import { Router, Scene } from 'react-native-router-flux'
 
//  export default function App(props) {
//    return (
//     <Router>
//       <Scene key='root'>
//         <Scene key = "signinScreen" component = {SigninScreen} title = "Home" initial = {false} hideNavBar={true} />
//         <Scene key = "signinScreen" component = {SigninScreen} title = "Home" />
//         <Scene key = "viewImageScreen" component = {ViewImageScreen} title = "About" />
//         <Scene key = "Tabs" component = {Tabs} title = "Tabs" initial = {true} hideNavBar={true}/>
//       </Scene>
//     </Router>
//    );
//  }
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// import React, { Component } from 'react';
// import { AppRegistry, View } from 'react-native';
// import Routes from './app/screen/Router';

// class reactTutorialApp extends Component {
//    render() {
//       return (
//          <Routes />
//       )
//    }
// }
// export default reactTutorialApp
// AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
