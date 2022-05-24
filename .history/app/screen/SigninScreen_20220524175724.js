import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import Tabs from './Tabs';
import Signin from './Signin';
export default function SigninScreen() {
  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const handleStart = () => {
    const user = auth().currentUser;
    if (user != null) {
      
      return <Tabs />;
    } else {
      return <Signin />;
    }
  };
  return handleStart();
}

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'flex-end',
    position: 'absolute',
    // justifyContent: 'space-between'
    // justifyContent: 'center',
  },
  accountInfoContainer: {
    position: 'absolute',
    width: '100%',
    top: '30%',
  },
  accountInfo: {
    marginHorizontal: 40,
    marginTop: 30,
    // height: 155,
    // backgroundColor: 'red'
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 40,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signinWith: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
    bottom: '20%',
  },
  googleImage: {
    width: 30,
    height: 30,
  },
  singinWithButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 30,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  loginButton: {
    width: 145,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2F80ED',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: '4%',
    bottom: '8%',
  },
  signup: {
    marginLeft: '5%',
    flexDirection: 'row',
    bottom: '10%',
    width: 210,
    justifyContent: 'space-between',
  },
  signupButton: {
    color: 'white',
    fontSize: 16,
  },
});
