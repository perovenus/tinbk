import React from 'react'
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
  Button
  } from 'react-native'
import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

export default function ForgotScreen() {
    const goToSigninScreen = () => {
        Actions.signinScreen()
      }
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/signin-background.jpg')}
    >
        <View 
        style={{
            position: 'absolute',
            top: 15,
            left: 15
        }}>
          <FontAwesome5 onPress={goToSigninScreen} name='angle-left' size={40} color='#fff'/>
        </View>
      <Text 
        style={{
          fontSize: 36,
          color: '#2F80ED',
          marginLeft: 29,
          
        }}>
        Lấy lại mật khẩu
      </Text>
      <Text
        style={{
            fontSize: 20,
            color: '#2F80ED',
            marginLeft: 29,
            width: 314,
            marginTop: 40
        }}>
          Nhập số điện thoại liên kết với tài khoảng của bạn để lấy lại mật khẩu
      </Text>
      <View style={styles.accountInfo}>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity
        style = {{
            display : 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: -80
        }}>
        <View style={styles.loginButton}>
          <Text style={{fontSize:24, color: 'white'}}>Nhận mã OTP</Text>
        </View>
      </TouchableOpacity>
     
      
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: { 
    paddingTop: 210,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  accountInfo:{
    marginHorizontal: 30,
    marginTop: 20,
    height: 155,
  },
  input: {
    width: '100%',
    height: 46,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 15
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 15,
    marginRight: 30,
    fontSize: 14,
    fontWeight: 'bold'
  },
  signinWith: {
    marginLeft: 30,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
  },
  googleImage: {
    width: 30,
    height: 30
  },
  singinWithButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  loginButton: {
    width: 185,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2F80ED',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    marginLeft: 20,
    marginTop: 20,
    position: 'relative',
    bottom: -30,
    display: 'flex',
    flexDirection: 'row',
  },
  signupButton: {
    color: 'white',
    fontSize: 16
  }
})