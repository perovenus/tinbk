import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  BackHandler,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const ChangePassword = () => {
  const goToUserInfo = () => {
    Actions.pop();
  };

  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const showToastErr = message => {
    Toast.show({
      type: 'error',
      text1: message,
    });
  };
  const [old_pass, setOld_pass] = useState('');
  const [new_pass, setNew_pass] = useState('');
  const [renew_pass, setRenew_pass] = useState('');

  const printText = async () => {
    console.log(old_pass);
    console.log(new_pass);
    console.log(renew_pass);
    const user = auth().currentUser;
    const cred = await auth.EmailAuthProvider.credential(user.email, old_pass);
    try {
      if (new_pass != renew_pass) {
        showToastErr('Mật khẩu mới không khớp !!, Mời bạn nhập lại');
      } else {
        await user.reauthenticateWithCredential(cred);
        await user.updatePassword(new_pass);
        showToast('Cập nhật thành công');
        goToUserInfo();
      }
    } catch (e) {
      // console.log(e.code, e.message)
      showToastErr('Sai mật khẩu !!, Mời bạn nhập lại');
      // Could be incorrect credentials
    }
  };
  useEffect(() => {
    const backAction = () => {
      Actions.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/changepassword.jpg')}>
     
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 120,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  containerForm: {
    marginTop: 150,
  },
  accountInfo: {
    marginHorizontal: 30,
    height: 100,
  },
  input: {
    width: '100%',
    height: 44,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  loginButton: {
    marginTop: 10,
    width: 160,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2F90ED',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  elevation: {
    elevation: 10,
    shadowColor: '#52006A',
  },
  gobackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 21,
  },
});

export default ChangePassword;
