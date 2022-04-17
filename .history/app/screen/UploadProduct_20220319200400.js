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
import {ScrollView} from 'react-native-gesture-handler';
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
        <View style={styles.forms}>
          <Text
            style={{
              position: 'absolute',
              left: 0,
              top: 208,
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
              left: 0,
              top: 233,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
          <Text
            style={{
              position: 'absolute',

              left: 0,
              top: 283,
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
              left: 0,
              top: 308,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: 123,
              top: 283,
              color: '#2F80ED',
              fontWeight: '400',
              fontSize: 18,
            }}>
            Giá
          </Text>
          <TextInput
            style={{
              position: 'absolute',
              width: '44%',
              height: 40,
              left: 123,
              top: 308,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: 0,
              top: 370,
              color: '#2F80ED',
              fontWeight: '400',
              fontSize: 18,
            }}>
            Độ mới
          </Text>
          <TextInput
            style={{
              position: 'absolute',
              width: '55%',
              height: 40,
              left: 86,
              top: 370,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: 0,
              top: 431,
              color: '#2F80ED',
              fontWeight: '400',
              fontSize: 18,
            }}>
            Thể loại
          </Text>
          <TextInput
            style={{
              position: 'absolute',
              width: '55%',
              height: 40,
              left: 86,
              top: 431,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: 0,
              top: 484,
              color: '#2F80ED',
              fontWeight: '400',
              fontSize: 18,
            }}>
            Khu vực
          </Text>
          <TextInput
            style={{
              position: 'absolute',
              width: '80%',
              height: 40,
              left: 0,
              top: 509,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: 0,
              top: 559,
              color: '#2F80ED',
              fontWeight: '400',
              fontSize: 18,
            }}>
            Ghi chú
          </Text>
          <TextInput
            style={{
              position: 'absolute',
              width: '80%',
              height: 160,
              left: 0,
              top: 584,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#2F80ED',
              fontSize: 18,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    maxWidth: '100%',
    alignContent: 'center',
  },
  forms: {
    position: 'absolute',
    width: 338,
    height: 549,
    left: 40,
    top: 97,
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
