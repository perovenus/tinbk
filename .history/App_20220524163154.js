import React, {useState, useEffect} from 'react';
import SigninScreen from './app/screen/SigninScreen';
import SignupScreen from './app/screen/SignupScreen';
import GetOTPScreen from './app/screen/GetOTPScreen';
import ConfirmOTPScreen from './app/screen/ConfirmOTPScreen';
import ProductScreen from './app/screen/ProductInfo';
import IntroductionScreen from './app/screen/Intro';
import Notification from './app/screen/Notification';
import UploadProduct from './app/screen/UploadProduct';
import ProductList from './app/screen/ProductList';
import Tabs from './app/screen/Tabs';
import {Router, Scene} from 'react-native-router-flux';
import Toast, {BaseToast} from 'react-native-toast-message';
import {LogBox, AsyncStorage} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App(props) {
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
      <BaseToast
        {...props}
        style={{borderLeftColor: '#2f80ed'}}
        contentContainerStyle={{paddingHorizontal: 15}}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
      />
    ),
  };
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);
  if (isFirstLaunch == null) {
  } else if (isFirstLaunch) {
    setIsFirstLaunch(true);
  } else {
    setIsFirstLaunch(false);
  }
  return (
    <>
      <Router>
        <Scene key="root">
          {isFirstLaunch == true ? (
              <Scene
                key="intro"
                component={IntroductionScreen}
                hideNavBar={true}
              />
          ) : (
            None
          )}
          <Scene
            key="signupScreen"
            component={SignupScreen}
            title="Signup"
            hideNavBar={true}
          />
          <Scene
            key="getOTPScreen"
            component={GetOTPScreen}
            title="GetOTP"
            hideNavBar={true}
          />
          <Scene
            key="confirmOTPScreen"
            component={ConfirmOTPScreen}
            title="ConfirmOTP"
            hideNavBar={true}
          />
          <Scene
            key="ProductList"
            component={ProductList}
            title="ProductList"
            hideNavBar={true}
          />
          <Scene key="Tabs" component={Tabs} title="Tabs" hideNavBar={true} />
        </Scene>
      </Router>
      <Toast config={toastConfig} />
    </>
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
