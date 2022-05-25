import react from 'react';
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

export default function Signin() {
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
