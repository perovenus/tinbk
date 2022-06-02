import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function GetOTPScreen() {
  const goToSigninScreen = () => {
    Actions.signinScreen();
  };
  const goToConfirmOTPScreen = () => {
    Actions.confirmOTPScreen();
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/getotp-background.jpg')}>
      <TouchableOpacity onPress={goToSigninScreen} style={styles.gobackButton}>
        <View>
          <FontAwesome5 name="angle-left" color="white" size={28} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 80,
            fontSize: 28,
            color: '#2F80ED',
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          Lấy lại mật khẩu
        </Text>
        <View style={styles.accountInfo}>
          <Text
            style={{
              fontSize: 18,
              color: '#2F80ED',
            }}>
            Hãy nhập Email mà bạn dùng để đăng ký tài khoản trước đó
          </Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity onPress={goToConfirmOTPScreen}>
          <View style={[styles.loginButton]}>
            <Text style={{fontSize: 20, color: 'white'}}>Nhận mã OTP</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  background: {
    paddingTop: 150,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  accountInfo: {
    marginHorizontal: 30,
    marginTop: 30,
    height: 125,
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 35,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 20,
    paddingHorizontal:15,
  },
  loginButton: {
    marginTop: 35,
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
