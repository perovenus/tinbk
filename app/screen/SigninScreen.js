import React from 'react'
import { 
  StyleSheet,
  Button,
  Text, 
  View, 
  Image, 
  TextInput, 
  Pressable, 
  TouchableOpacity, 
  ImageBackground } from 'react-native'
import { Actions} from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SigninScreen() {
  const goToViewImageScreen = () => {
    Actions.viewImageScreen()
  }
  
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/tinBK-background.jpg')}
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
      <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
      <FontAwesome5 name='google' />
      <FontAwesome5 name='facebook-square' />
      <Button title='Đăng nhập'/>
      <Text>Chưa có tài khoản</Text>
      <Text>Đăng ký</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 220
  },
  accountInfo:{
    marginHorizontal: 30,
    marginTop: 20,
    height: 175,
  },
  input: {
    width: '100%',
    height: 50,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 15
  },
  forgotPassword: {

  }
})