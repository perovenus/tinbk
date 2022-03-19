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

export default function SigninScreen() {
  const goToViewImageScreen = () => {
    Actions.viewImageScreen();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.jpg')}>
        <Text style={styles.loginTitle}>Đăng nhập</Text>
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
  loginTitle: {
    position: 'absolute',
    width: '411px',
    height: '823px',
    left: '-26px',
    top: '-83px',
    background: '#FFFFFF',
    boxShadow: '10px 10px 40px rgba(0, 0, 0, 0.3)',
    borderRadius: '30px',
  },
});
