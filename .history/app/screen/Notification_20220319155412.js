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
            <View style ={styles.startheader}>
              <FontAwesome5 name ="angle-left" style ={styles.iconStyle}/>
            </View>
            <View style ={styles.endheader}>
              <FontAwesome5 name ="pen" style ={styles.iconStyle} />
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
      height: 66,
      backgroundColor: 'rgba(47, 128, 237, 0.75)',
      paddingLeft : 10,
      paddingRight: 10,
      flexDirection: 'row',
    },
    startheader :{
      width: '20%',
      backgroundColor: 'black',
      paddingTop: 15
    },
    endheader:{
      backgroundColor: 'gray',
      paddingTop:  15,
      marginHorizontal : 10
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
    iconStyle:{
      color: 'white',
      fontSize: 36
    },
  });
export default Notification