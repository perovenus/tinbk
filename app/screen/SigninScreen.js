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
  Pressable
  } from 'react-native'
import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SigninScreen() {
  const goToSignupScreen = () => {
    Actions.signupScreen()
  }

  const goToGetOTPScreen = () => {
    Actions.getOTPScreen()
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/signin-background.jpg')}
    >
      <Text 
        style={{
          fontSize: 36,
          color: '#2F80ED',
          marginLeft: 20,
        }}>
        Đăng nhập
      </Text>
      <View style={styles.accountInfo}>
        <Text style={{
          fontSize: 15,
          color: '#2F80ED'
        }}>
          Tài khoản
        </Text>
        <TextInput style={styles.input} />
      
        <Text style={{
          marginTop: 25,
          fontSize: 15,
          color: '#2F80ED'
        }}>
          Mật khẩu
        </Text>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <Pressable onPress={goToGetOTPScreen}>
        {({pressed}) => (
          <Text
            style={[
              {textDecorationLine: pressed ? 'underline' : 'none'},
              {color: pressed ? '#6c5ce7' : '#2F80ED'},
              styles.forgotPassword
            ]}>
            Quên mật khẩu?
          </Text>
        )}
      </Pressable>
      <View style={styles.signinWith}>
        <View style={[styles.singinWithButton, styles.elevation]}>
          <Image 
            style={styles.googleImage}
            source={require('../assets/google.png')} />
        </View>
        <View style={[styles.singinWithButton, styles.elevation]}>
          <FontAwesome5 name='facebook-square' size={30} color='#395185'/>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.loginButton}>
          <Text style={{fontSize:24, color: 'white'}}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text style={styles.signupButton}>Chưa có tài khoản?</Text>
        <TouchableOpacity onPress={goToSignupScreen}>
          <Text 
            style={[
              styles.signupButton,
              {
                textDecorationLine:'underline',
                fontWeight: 'bold'
              }
            ]}>
              Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
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
    height: 40,
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
    marginTop: 45,
    width: 145,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2F80ED',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20
  },
  signup: {
    marginLeft: 20,
    marginTop: 20,
  },
  signupButton: {
    color: 'white',
    fontSize: 16
  }
})