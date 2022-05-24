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
  console.log
  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const handleStart = () => {
    const user = auth().currentUser;
    if (user != null) {
      showToast('Chào mừng trở lại');
      console.log(user.email);
      return <Tabs />;
    } else {
      return <Signin />;
    }
  };
  return handleStart();
}
