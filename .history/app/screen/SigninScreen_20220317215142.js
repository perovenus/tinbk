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
        <Text style={styles.text}>Elements</Text>
        <Text style={styles.text}>in Front of</Text>
        <Text style={styles.text}>Background</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});