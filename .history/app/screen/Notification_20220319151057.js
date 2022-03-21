import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';
import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Notification = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
     <SafeAreaView>
        <View style ={styles.header} >
            <FontAwesome5 name ="angle-left"/>
            <FontAwesome5 name ="pen"/>
        </View>
        <View style ={styles.body}>
            <Text > Đây là body</Text>
        </View>
        <View style ={styles.footer}>
            <Text > Đây là footer</Text>
        </View>
     </SafeAreaView>
   )
}
const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 50,
      backgroundColor: 'rgba(47, 128, 237, 0.75)',
      justifyContent: 'center',
      flexDirection
    },
    body: {
        width: '100%',
        height: '70%',
        backgroundColor: 'green'
    },
    footer: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue'
    },
  });
export default Notification