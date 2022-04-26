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
  TouchableHighlight
  } from 'react-native'
import { Actions} from 'react-native-router-flux'
import { useState } from 'react/cjs/react.development';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { TouchableHighlight } from 'react-native-gesture-handler';
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
      <TouchableOpacity onPress={goToSigninScreen} style={styles.gobackButton}>
        <View>
          <FontAwesome5
            name='angle-left'
            color='white'
            size={28} 
          />
        </View>
      </TouchableOpacity>
      <View style={styles.userInfoContainer}>
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
      <TouchableOpacity style={styles.registerButton}>
        <Text style={{fontSize:24, color: 'white'}}>Đăng ký</Text>
      </TouchableOpacity>
      <View style={styles.signin}>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end'
  },
  userInfoContainer: {
    position: 'absolute',
    top: '13%',
    width: '100%',
  },
  userInfo:{
    marginHorizontal: 30,
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
    fontSize: 15
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
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 110,
    bottom: '15%',
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
    width: 145,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#2F80ED',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 20,
    bottom: 65,
  },
  signin: {
    marginLeft: 20,
    flexDirection: 'row',
    width: 210,
    justifyContent: 'space-between'
  },
  signinButton: {
    color: 'white',
    fontSize: 16,
    bottom: 40
  },
  gobackButton: {
    position: 'absolute',
    top: 21,
    left: 20,
  }
})