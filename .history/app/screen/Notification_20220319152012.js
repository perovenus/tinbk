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
            <View style ={styles.Blue}>
              <FontAwesome5 name ="angle-left" style ={{}}/>
            </View>
            <View style ={styles.Green}>
              <FontAwesome5 name ="pen"  />
            </View>
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
      flexDirection: 'row'
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
    Blue:{
      width: '50%',
      backgroundColor: 'blue',
      fontSize: 32
    },
    Green: {
      width: '50%',
      backgroundColor: 'yellow',
      fontSize: 32
    },
  });
export default Notification