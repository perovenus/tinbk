import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  BackHandler,
  Image,
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
const ChangePassword = () => {
  const goToUserInfo = () => {
    Actions.pop();
  };

  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };
  const showToastErr = message => {
    Toast.show({
      type: 'error',
      text1: message,
    });
  };
  const [old_pass, setOld_pass] = useState('');
  const [new_pass, setNew_pass] = useState('');
  const [renew_pass, setRenew_pass] = useState('');

  const printText = async () => {
    console.log(old_pass);
    console.log(new_pass);
    console.log(renew_pass);
    if (old_pass == '' || new_pass == '' || renew_pass == '') {
      showToastErr('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    const user = auth().currentUser;
    const cred = await auth.EmailAuthProvider.credential(user.email, old_pass);
    try {
      if (new_pass != renew_pass) {
        showToastErr('Mật khẩu mới không khớp !!, Mời bạn nhập lại');
      } else {
        await user.reauthenticateWithCredential(cred);
        await user.updatePassword(new_pass);
        showToast('Cập nhật thành công');
        goToUserInfo();
      }
    } catch (e) {
      // console.log(e.code, e.message)
      showToastErr('Sai mật khẩu !!, Mời bạn nhập lại');
      // Could be incorrect credentials
    }
  };
  useEffect(() => {
    const backAction = () => {
      Actions.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/changepassword.jpg')}>
      <ScrollView>
        <TouchableOpacity style={styles.gobackButton} onPress={goToUserInfo}>
          <View>
            <FontAwesome5 name="angle-left" color="white" size={28} />
          </View>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text
            style={{
              marginTop: '25%',
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
                width: 140,
                height: 140,
              }}
              source={require('../assets/tinBK-logo-2.png')}
            />
          </View>
          <View style={styles.accountInfo}>
            <Text
              style={{
                fontSize: 16,
                color: '#2F80ED',
              }}>
              Nhập mật khẩu cũ
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setOld_pass(text);
              }}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.accountInfo}>
            <Text
              style={{
                fontSize: 16,
                color: '#2F80ED',
              }}>
              Nhập mật khẩu mới
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setNew_pass(text);
              }}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.accountInfo}>
            <Text
              style={{
                fontSize: 16,
                color: '#2F80ED',
              }}>
              Xác nhận mật khẩu
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setRenew_pass(text);
              }}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity onPress={printText}>
            <View style={[styles.loginButton, styles.elevation]}>
              <Text style={{fontSize: 20, color: 'white'}}>Hoàn thành</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 45,
  },
  background: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: '100%',
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
    height: 44,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 18,
    paddingHorizontal: 15,
    color: '#000',
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
