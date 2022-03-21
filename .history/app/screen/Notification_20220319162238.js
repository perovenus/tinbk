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
              <Text style={{color:'white', fontSize: 30, marginLeft: 10}}>Cá nhân</Text>
            </View>
            <View style ={styles.endheader}>
              <FontAwesome5 name ="pen" style ={styles.iconStyle} />
            </View>
        </View>
        <View style ={styles.body}>
            <Text > Đây là body</Text>
        </View>
        <View style ={styles.footer}>
           <View style={{backgroundColor:'red',width:'25%'}}><Text>Trang chủ</Text></View>
           <View style={{backgroundColor:'yellow',width:'25%'}}><Text>Đăng bán</Text></View>
           <View style={{backgroundColor:'white',width:'25%'}}><Text>Yêu thích</Text></View>
           <View style={{backgroundColor:'blue',width:'25%'}}><Text>Cá nhân</Text></View>
        </View>
     </SafeAreaView>
   )
}
const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 66,
      backgroundColor: 'rgba(47, 128, 237, 0.75)',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    startheader :{
      width: 200,
      paddingTop: 15,
      flexDirection: 'row',
    },
    endheader:{
      width: 50 ,
      paddingTop:  15,
    },
    body: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white'
    },
    footer: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        flexDirection: 'row',
    },
    iconfooter:{

    },
    iconStyle:{
      color: 'white',
      fontSize: 36,
      paddingLeft: 7
    },
  });
export default Notification