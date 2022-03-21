 import React from 'react';
 import SigninScreen from './app/screen/SigninScreen';
 import SignupScreen from './app/screen/SignupScreen';
 import GetOTPScreen from './app/screen/GetOTPScreen';
 import ConfirmOTPScreen from './app/screen/ConfirmOTPScreen';
 import Notification from './app/screen/Notification'
 import Tabs from './app/screen/Tabs'
 import { Router, Scene } from 'react-native-router-flux'
 
 export default function App(props) {
   return (
    <Router>
      <Scene key='root'>
        <Scene key = "signinScreen" component = {SigninScreen} title = "Signin" initial = {true} hideNavBar={true} />
        <Scene key = "signupScreen" component = {SignupScreen} title = "Signup" hideNavBar={true}/>
        <Scene key = "getOTPScreen" component = {GetOTPScreen} title = "GetOTP" hideNavBar={true}/>
        <Scene key = "confirmOTPScreen" component = {ConfirmOTPScreen} title = "ConfirmOTP" hideNavBar={true}/>
        <Scene key = "Tabs" component = {Tabs} title = "Tabs" initial = {true} hideNavBar={true}/>
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
