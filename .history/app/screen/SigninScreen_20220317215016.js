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
    <View style={styles.signinScreen}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/background.jpg')}>
        <Image
          style={styles.logo}
          source={require('../assets/tinBK-logo.png')}
        />
        <View style={styles.signin}>
          <Text style={{fontSize: 30}}>Sign in</Text>
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <Pressable onPress={goToViewImageScreen}>
            {({pressed}) => (
              <Text
                style={[
                  {textDecorationLine: pressed ? 'underline' : 'none'},
                  {color: pressed ? '#6c5ce7' : '#3498db'},
                  {left: '65%'},
                ]}>
                Forgot password?
              </Text>
            )}
          </Pressable>
          <Button title="Sign in" />
        </View>
        <Text style={{marginTop: 15, fontSize: 20}}>Or</Text>
        <View style={styles.loginWith}>
          <TouchableOpacity onPress={() => alert('Login with facebook')}>
            <FontAwesome5 name="facebook" size={50} color="#3498db" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Login with google')}>
            <FontAwesome5 name="google" size={50} color="#3498db" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  signinScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
 
});
