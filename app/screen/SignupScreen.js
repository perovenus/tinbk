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
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export default function SignupScreen() {
  const goToSigninScreen = () => {
    Actions.signinScreen();
  };

  const [male, setToggleMaleCheckBox] = useState(false);
  const [female, setToggleFemaleCheckBox] = useState(false);

  const firstNameRef = useRef(null);
  const middleNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [middleName, setMiddleName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const handaleMaleCheckBox = newValue => {
    if (male == false) {
      setToggleMaleCheckBox(newValue);
      setToggleFemaleCheckBox(!newValue);
    }
  };

  const handleFemaleCheckBox = newValue => {
    if (female == false) {
      setToggleFemaleCheckBox(newValue);
      setToggleMaleCheckBox(!newValue);
    }
  };

  const handleSignUpInfo = () => {
    if (middleName == '') {
      middleNameRef.current.focus();
      showToast('Bạn chưa nhập Họ và tên đệm');
    } else if (firstName == '') {
      firstName.current.focus();
      showToast('Bạn chưa nhập Tên');
    } else if (email == '') {
      emailRef.current.focus();
      showToast('Bạn chưa nhập Email');
    } else if (password == '') {
      passwordRef.current.focus();
      showToast('Bạn chưa nhập mật khẩu');
    } else if (confirmPassword == '') {
      confirmPasswordRef.current.focus();
      showToast('Bạn cần xác nhận mật khẩu');
    } else if (password != confirmPassword) {
      confirmPasswordRef.current.focus();
      showToast('Xác nhận mật khẩu chưa đúng');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
          const user = auth().currentUser;
          if (user != null) {
            user.sendEmailVerification();
            showToast('Tạo tài khoản thành công');
            firestore()
              .collection('Users')
              .doc(user.uid)
              .set({
                middleName: middleName,
                firstName: firstName,
                gender: male == true ? 'Male' : 'Female',
                email: user.email,
                phoneNumber: '',
                birthday: '',
                address: '',
              })
              .then(() => {
                console.log('User added!');
              });
            firestore()
              .collection('Notifications')
              .doc(user.uid)
              .set({
                notifications: [],
              })
              .then(() => {
                console.log('Notification added!');
              });
            auth()
              .signOut()
              .then(() => {
                goToSigninScreen();
              });
          }
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    }
  };

  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/signup-background.jpg')}>
        <TouchableOpacity
          onPress={goToSigninScreen}
          style={styles.gobackButton}>
          <View>
            <FontAwesome5 name="angle-left" color="white" size={28} />
          </View>
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <Text
            style={{
              fontSize: 28,
              color: '#2F80ED',
              marginLeft: 30,
              fontWeight: 'bold',
            }}>
            Đăng ký
          </Text>
          <View style={styles.userInfo}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={[styles.input, {width: '60%'}]}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2F80ED',
                  }}>
                  Họ và tên đệm
                </Text>
                <TextInput
                  ref={middleNameRef}
                  style={styles.inputText}
                  onChangeText={text => setMiddleName(text)}
                />
              </View>
              <View style={[styles.input, {width: '30%'}]}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#2F80ED',
                  }}>
                  Tên
                </Text>
                <TextInput
                  ref={firstNameRef}
                  style={styles.inputText}
                  onChangeText={text => setFirstName(text)}
                />
              </View>
            </View>
            <View style={styles.input}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#2F80ED',
                }}>
                Email
              </Text>
              <TextInput
                ref={emailRef}
                style={styles.inputText}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.input}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#2F80ED',
                }}>
                Mật khẩu
              </Text>
              <TextInput
                ref={passwordRef}
                style={styles.inputText}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={styles.input}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#2F80ED',
                }}>
                Nhập lại mật khẩu
              </Text>
              <TextInput
                ref={confirmPasswordRef}
                style={styles.inputText}
                secureTextEntry={true}
                onChangeText={text => setConfirmPassword(text)}
              />
            </View>
          </View>
          <View style={styles.genderSelection}>
            <View style={styles.genderCheckBox}>
              <CheckBox
                tintColors={{true: '#2F80ED', false: '#2F80ED'}}
                disabled={false}
                value={male}
                onValueChange={newValue => handaleMaleCheckBox(newValue)}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#2F80ED',
                  fontWeight: 'bold',
                }}>
                Nam
              </Text>
            </View>
            <View style={styles.genderCheckBox}>
              <CheckBox
                tintColors={{true: '#2F80ED', false: '#2F80ED'}}
                disabled={false}
                value={female}
                onValueChange={newValue => handleFemaleCheckBox(newValue)}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#2F80ED',
                  fontWeight: 'bold',
                }}>
                Nữ
              </Text>
            </View>
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
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleSignUpInfo}>
          <Text style={{fontSize: 24, color: 'white'}}>Đăng ký</Text>
        </TouchableOpacity>
        <View style={styles.signin}>
          <Text style={styles.signinButton}>Đã có tài khoản?</Text>
          <TouchableOpacity onPress={goToSigninScreen}>
            <Text
              style={[
                styles.signinButton,
                {
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                },
              ]}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.registerButton} onPress={handleSignUpInfo}>
        <Text style={{ fontSize: 24, color: 'white' }}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={styles.signin}>
        <Text style={styles.signinButton}>Đã có tài khoản?</Text>
        <TouchableOpacity onPress={goToSigninScreen}>
          <Text
            style={[
              styles.signinButton,
              {
                textDecorationLine: 'underline',
                fontWeight: 'bold'
              }
            ]}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View> */}
      </ImageBackground>
      {/* <TouchableOpacity style={styles.registerButton} onPress={handleSignUpInfo}>
        <Text style={{fontSize: 24, color: 'white'}}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={styles.signin}>
        <Text style={styles.signinButton}>Đã có tài khoản?</Text>
        <TouchableOpacity onPress={goToSigninScreen}>
          <Text
            style={[
              styles.signinButton,
              {
                textDecorationLine: 'underline',
                fontWeight: 'bold'
              }
            ]}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  userInfoContainer: {
    width: '100%',
    position: 'absolute',
    top: '15%',
  },
  userInfo: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
  },
  inputText: {
    width: '100%',
    height: 40,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 14,
    paddingHorizontal: 15,
    color: '#000',
  },

  genderSelection: {
    flexDirection: 'row',
    width: 175,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  genderCheckBox: {
    flexDirection: 'row',
    width: 75,
    alignItems: 'center',
  },
  signinWith: {
    marginLeft: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: 25,
    // bottom: '15%',
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
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  registerButton: {
    width: 145,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2F80ED',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    right: '4%',
    bottom: '8%',
    alignSelf: 'flex-end',
  },
  signin: {
    flexDirection: 'row',
    width: 220,
    justifyContent: 'space-between',
    left: '2%',
    bottom: '5%',
  },
  signinButton: {
    color: 'white',
    fontSize: 15,
  },
  gobackButton: {
    position: 'absolute',
    top: 21,
    left: 20,
  },
});
