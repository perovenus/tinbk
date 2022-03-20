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
import { Actions} from 'react-native-router-flux'
import { useState } from 'react/cjs/react.development';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { color } from 'react-native-reanimated';

export default function SignupScreen() {
  const goToSigninScreen = () => {
    Actions.signinScreen()
  }
  
  const [male, setToggleMaleCheckBox] = useState(false)
  const [female, setToggleFemaleCheckBox] = useState(false)

  const handaleMaleCheckBox = (newValue) => {
    if (male == false) {
      setToggleMaleCheckBox(newValue)
      setToggleFemaleCheckBox(!newValue)
    }
  }

  const handleFemaleCheckBox = (newValue) => {
    if (female == false) {
      setToggleFemaleCheckBox(newValue)
      setToggleMaleCheckBox(!newValue)
    }
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/signup-background.jpg')}
    >

      <Text 
        style={{
          fontSize: 36,
          color: '#2F80ED',
          marginLeft: 20,
        }}>
        Đăng ký
      </Text>
      <View style={styles.userInfo}>
        <View
          style={{
            flexDirection:'row',
            justifyContent:'space-between'
          }}
        >
          <View style={[styles.input, {width: '45%'}]}>
            <Text style={{
            fontSize: 15,
            color: '#2F80ED'
            }}>
            Họ và tên đệm
            </Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={[styles.input, {width: '45%'}]}>        
            <Text style={{
            fontSize: 15,
            color: '#2F80ED'
            }}>
            Tên
            </Text>
            <TextInput style={styles.inputText}/>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={{
          fontSize: 15,
          color: '#2F80ED'
          }}>
          Email
          </Text>
          <TextInput style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <Text style={{
          fontSize: 15,
          color: '#2F80ED'
          }}>
          Mật khẩu
          </Text>
          <TextInput style={styles.inputText} secureTextEntry={true} />
        </View>
        <View style={styles.input}>
          <Text style={{
          fontSize: 15,
          color: '#2F80ED'
          }}>
          Nhập lại mật khẩu
          </Text>
          <TextInput style={styles.inputText} secureTextEntry={true}/>
        </View>
      </View>
      {/* <Pressable>
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
      </Pressable> */}
      <View style={styles.genderSelection}>
        <View style={styles.genderCheckBox}>
          <CheckBox
            tintColors={{true: '#2F80ED', false: '#2F80ED'}}
            disabled={false}
            value={male}
            onValueChange={(newValue) => handaleMaleCheckBox(newValue)}
          />
          <Text style={{
            fontSize: 17,
            color: '#2F80ED',
            fontWeight: 'bold'
            }}
          >
            Nam
          </Text>
        </View>
        <View style={styles.genderCheckBox}>
          <CheckBox
            tintColors={{true: '#2F80ED', false: '#2F80ED'}}
            disabled={false}
            value={female}
            onValueChange={(newValue) => handleFemaleCheckBox(newValue)}
          />
          <Text style={{
            fontSize: 17,
            color: '#2F80ED',
            fontWeight: 'bold'
            }}
          >
            Nữ
          </Text>
        </View>
      </View>
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
        <View style={styles.registerButton}>
          <Text style={{fontSize:24, color: 'white'}}>Đăng ký</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.signup}>
        <Text style={styles.signinButton}>Đã có tài khoản?</Text>
        <TouchableOpacity onPress={goToSigninScreen}>
          <Text 
            style={[
              styles.signinButton,
              {
                textDecorationLine:'underline',
                fontWeight: 'bold'
              }
            ]}>
              Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: { 
    paddingTop: 90,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  userInfo:{
    marginHorizontal: 30,
    marginTop: 20,
    height: 325,
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
    fontSize: 15
  },

  genderSelection: {
    flexDirection: 'row',
    width: 175,
    alignSelf: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  genderCheckBox: {
    flexDirection: 'row',
    width: 75,
    alignItems: 'center',
  },
  signinWith: {
    marginLeft: 30,
    marginTop: 20,
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
  registerButton: {
    marginTop: 0,
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
  signinButton: {
    color: 'white',
    fontSize: 16
  }
})