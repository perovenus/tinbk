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

export default function SigninScreen() {
  const goToSignupScreen = () => {
    Actions.signupScreen();
  };
  const goToGetOTPScreen = () => {
    Actions.getOTPScreen();
  };
  const goToHomescreen = () => {
    Actions.Tabs();
  };

  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const handleStart = () => {
    const user = auth().currentUser
    if(user != null) {
        showToast('Chào mừng quay trở lại')
        goToHomeScreen()
    }
    else {
      goToSigninScreen()
    }
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = () => {
    if (email != '' && password != '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => {
          if (error) {
            showToast('Email hoặc  mật khẩu không đúng');
          }
        })
        .then(() => {
          const user = auth().currentUser;
          console.log(user.password);
          if (user != null) {
            if (user.emailVerified == true) {
              goToHomescreen();
              showToast('Đăng nhập thành công');
            } else {
              auth()
                .signOut()
                .then(() => showToast('Email chưa được xác nhận'));
            }
          }
        });
    } else {
      if (email == '') {
        emailRef.current.focus();
      } else if (password == '') {
        passwordRef.current.focus();
      }
      showToast('Bạn hãy nhập tài khoản của mình');
    }
  };
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/signin-background.jpg')}>
      <View style={styles.accountInfoContainer}>
        <Text
          style={{
            fontSize: 28,
            color: '#2F80ED',
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          Đăng nhập
        </Text>
        <View style={styles.accountInfo}>
          <Text
            style={{
              fontSize: 18,
              color: '#2F80ED',
            }}>
            Email
          </Text>
          <TextInput
            ref={emailRef}
            style={styles.input}
            onChangeText={text => setEmail(text)}
          />

          <Text
            style={{
              marginTop: 30,
              fontSize: 15,
              color: '#2F80ED',
              fontSize: 18,
            }}>
            Mật khẩu
          </Text>
          <TextInput
            ref={passwordRef}
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <Pressable onPress={goToGetOTPScreen}>
          {({pressed}) => (
            <Text
              style={[
                {textDecorationLine: pressed ? 'underline' : 'none'},
                {color: pressed ? '#6c5ce7' : '#2F80ED'},
                styles.forgotPassword,
              ]}>
              Quên mật khẩu?
            </Text>
          )}
        </Pressable>
      </View>
      <View style={styles.signinWith}>
        <View style={[styles.singinWithButton, styles.elevation]}>
          <Image
            style={styles.googleImage}
            source={require('../assets/google.png')}
          />
        </View>
        <View style={[styles.singinWithButton, styles.elevation]}>
          <FontAwesome5 name="facebook-square" size={30} color="#395185" />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
        <Text style={{fontSize: 24, color: 'white'}}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text style={styles.signupButton}>Chưa có tài khoản? </Text>
        <TouchableOpacity onPress={goToSignupScreen}>
          <Text
            style={[
              styles.signupButton,
              {
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              },
            ]}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
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
