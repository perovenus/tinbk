import React from 'react'
import { 
  StyleSheet,
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground,
  Dimensions,
  Pressable
  } from 'react-native'
import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ConfirmOTPScreen() {
    const goToGetOTPScreen = () => {
        Actions.getOTPScreen()
    }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/getotp-background.jpg')}
    >
      <TouchableOpacity onPress={goToGetOTPScreen} style={styles.gobackButton}>
        <View>
          <FontAwesome5
            name='angle-left'
            color='white'
            size={28} 
          />
        </View>
      </TouchableOpacity>  
      <Text 
        style={{
          fontSize: 36,
          color: '#2F80ED',
          marginLeft: 30,
        }}>
        Nhập mã OTP
      </Text>
      <View style={styles.accountInfo}>
        <Text style={{
          fontSize: 20,
          color: '#2F80ED'
        }}>
          Chúng tôi đã gửi mã OTP, vui lòng đợi và kiểm tra mail của bạn
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
      
      </View>
      <TouchableOpacity>
        <View style={[styles.loginButton, styles.elevation]}>
          <Text style={{fontSize:24, color: 'white'}}>Xác nhận</Text>
        </View>
      </TouchableOpacity>
      <Pressable>
        {({pressed}) => (
          <Text
            style={[
              {textDecorationLine: pressed ? 'underline' : 'none'},
              {color: pressed ? '#6c5ce7' : '#7f8c8d'},
              styles.resendotp
            ]}>
            Gửi lại mã
          </Text>
        )}
      </Pressable>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: { 
    paddingTop: 150,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  accountInfo:{
    marginHorizontal: 30,
    marginTop: 35,
    height: 125,
  },
  input: {
    width: 50,
    height: 50,
    marginTop: 35,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 15
  },
  loginButton: {
    marginTop: 35,
    width: 145,
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
    marginTop: 21
  },
  resendotp: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold'
  }
})