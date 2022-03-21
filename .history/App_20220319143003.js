/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import SigninScreen from './app/screen/SigninScreen';
 import ViewImageScreen from './app/screen/ViewImageScreen';
 import UploadProduct from './app/screen/UploadProduct';
 import WelcomeScreen from './app/screen/WelcomeScreen';
 import { Router, Scene } from 'react-native-router-flux'
 
 export default function App(props) {
   return (
    <Router>
      <Scene key='root'>
        <Scene key = "uploadProduct" component = {uploadProduct} title = "Home" initial = {true} hideNavBar={true} />
        <Scene key = "viewImageScreen" component = {ViewImageScreen} title = "About" hideNavBar={true}/>
      </Scene>
    </Router>
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