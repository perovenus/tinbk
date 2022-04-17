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
        <Text
          style={{
            position: 'absolute',
            left: 40,
            top: 305,
            color: '#2F80ED',
            fontWeight: '400',
            fontSize: 18,
          }}>
          Tên sách
        </Text>
        <TextInput
          style={{
            position: 'absolute',
            width: '80%',
            height: 40,
            left: 40,
            top: 330,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#2F80ED',
            fontSize: 18,
          }}
        />
        <Text
          style={{
            position: 'absolute',

            left: 40,
            top: 380,
            color: '#2F80ED',
            fontWeight: '400',
            fontSize: 18,
          }}>
          Số lượng
        </Text>
        <TextInput
          style={{
            position: 'absolute',
            width: '25%',
            height: 40,
            left: 40,
            top: 405,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#2F80ED',
            fontSize: 18,
          }}
        />
        <Text
          style={{
            position: 'absolute',
            left: 163,
            top: 380,
            color: '#2F80ED',
            fontWeight: '400',
            fontSize: 18,
          }}>
          Giá
        </Text>
        <TextInput
          style={{
            position: 'absolute',
            width: '35%',
            height: 40,
            left: 163,
            top: 405,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#2F80ED',
            fontSize: 18,
          }}
        />
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
});
