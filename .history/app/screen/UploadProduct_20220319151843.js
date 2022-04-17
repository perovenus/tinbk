import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Actions, Router, Scene} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ViewImageScreen from './ViewImageScreen';

export default function UploadProduct() {
  const goToViewImageScreen = () => {
    Actions.viewImageScreen();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/upload-background.jpg')}>
        <Text style={styles.Title}>Đăng ký gửi bán</Text>
        <Text style={{
            left: 40,
            top: -50,
            color: '#2F80ED',
            fontWeight: '400',
            fontSize: 18,
        }}>Tên sách</Text>
         <View style={styles.accountInfo}>
        <Text style={{
          fontSize: 15,
          color: '#2F80ED'
        }}>
          Tài khoản
        </Text>
        <TextInput style={styles.input} />
        <Text style={styles.smallTitle}>Số lượng</Text>
        <Text style={styles.smallTitle}>Giá</Text>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  Title: {
    position: 'absolute',
    color: 'white',
    left: 89,
    top: 22,
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 33,
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
});
