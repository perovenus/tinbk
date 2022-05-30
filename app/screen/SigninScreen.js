import React from 'react';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import Tabs from './Tabs';
import Signin from './Signin';
export default function SigninScreen() {
  console.log('SigninScreen');
  
  const showmessage = message => {
    console.log(message);
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const handleStart = () => {
    const user = auth().currentUser;
    if (user != null) {
      showmessage('Đăng nhập thành công');
      return <Tabs />;
    } else {
      return <Signin />;
    }
  };
  return handleStart();
}
