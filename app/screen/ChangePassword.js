import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ChangePassword = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/changepassword.jpg')}>
      <TouchableOpacity style={styles.gobackButton}>
        <View>
          <FontAwesome5 name="angle-left" color="white" size={28} />
        </View>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text
          style={{
            marginTop: 50,
            marginBottom: 10,
            fontSize: 28,
            color: '#2F80ED',
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          Thay đổi mật khẩu
        </Text>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{
              width: 150,
              height: 150,
            }}
            source={require('../assets/tinBK-logo-2.png')}
          />
        </View>
        <View style={styles.accountInfo}>
          <Text
            style={{
              fontSize: 18,
              color: '#2F80ED',
            }}>
            Nhập mật khẩu cũ
          </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.accountInfo}>
          <Text
            style={{
              fontSize: 18,
              color: '#2F80ED',
            }}>
            Nhập mật khẩu mới
          </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.accountInfo}>
          <Text
            style={{
              fontSize: 18,
              color: '#2F80ED',
            }}>
            Xác nhận mật khẩu
          </Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity>
          <View style={[styles.loginButton, styles.elevation]}>
            <Text style={{fontSize: 20, color: 'white'}}>Hoàn thành</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 120,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  containerForm: {
    marginTop: 150,
  },
  accountInfo: {
    marginHorizontal: 30,
    height: 100,
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 20,
    paddingHorizontal: 15,
  },
  loginButton: {
    marginTop: 10,
    width: 160,
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
    marginTop: 21,
  },
});

export default ChangePassword;
