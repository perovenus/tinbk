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

const Notification = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (
     <SafeAreaView>
        <View style ={styles.header}>
            <Text > Đây là header</Text>
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
      backgroundColor: 'red'
    },
    body: {
        width: '100%',
        height: '70%',
        backgroundColor: 'blue'
    },
    footer: {
        width: '100%',
        height: 50,
        backgroundColor: 'red'
    },
  });
export default Notification