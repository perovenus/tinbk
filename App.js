/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import SigninScreen from './app/screen/SigninScreen';
 import SignupScreen from './app/screen/SignupScreen';
 import ForgotScreen from './app/screen/Forgot_passwordScreen';
 import { Router, Scene } from 'react-native-router-flux'
 
 export default function App(props) {
   return (
    <Router>
      <Scene key='root'>
        <Scene key = "signinScreen" component = {SigninScreen} title = "Signin" initial = {true} hideNavBar={true} />
        <Scene key = "signupScreen" component = {SignupScreen} title = "Signup" hideNavBar={true}/>
        <Scene key = "forgotScreen" component = {ForgotScreen} title = "Forgot" hideNavBar={true}/>
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
