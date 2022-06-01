import React, {useState, useRef} from 'react';
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
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
export default function Signin() {
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
              showToast('Đăng nhập thành công');
              goToHomescreen();
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
      {/* <ScrollView >
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
          <Pressable
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              marginLeft: '58%',
              marginTop: '4%',
              // alignItems: 'center'
            }}
            onPress={goToGetOTPScreen}>
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
      </ScrollView> */}
      <Text
        style={{
          fontSize: 28,
          color: '#2F80ED',
          marginLeft: 30,
          fontWeight: 'bold',
          top: '18%',
        }}>
        Đăng nhập
      </Text>
      <View>
          <View style={{backgroundColor: 'black'}}>
            <Text>djtmecuocsong</Text>
          </View>
      </View>
      <View>
        <Text>djtmecuocsong</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: '100%',
    justifyContent
  },
  accountInfoContainer: {
    width: '100%',
    paddingTop: '35%',
    // backgroundColor: 'black',
  },
  accountInfo: {
    marginHorizontal: 40,
    marginTop: 30,
    // height: 155,
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 16,
    paddingHorizontal: 15,
    color: 'black',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signinWith: {
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
    bottom: 0,
    backgroundColor: 'white',
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
    marginLeft: 30,
    backgroundColor: 'white',
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
    backgroundColor: 'white',
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
  },
  signup: {
    marginBottom: '10%',
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  signupButton: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'gray',
  },
  scrollView: {
    top: '20%',
    width: '100%',
    height: '45%',
    backgroundColor: 'black',
  },
});
