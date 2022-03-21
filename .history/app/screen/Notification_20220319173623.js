import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
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
              <FontAwesome5 name ="ellipsis-v" style ={styles.iconStyle} />
            </View>


        </View>


        <View style ={styles.body}>
            <Text > Đây là body</Text>
        </View>


        <View style ={styles.footer}>


          <View style={styles.iconfooter}>
            <FontAwesome5 name = "home" style ={styles.iconfooterstyle}/>
            <Text tyle ={styles.textfooter}> Trang chủ</Text>
          </View>


          {/* <View style={styles.iconfooter}>
            <FontAwesome5 name = "plus-circle" style ={styles.iconfooterstyle}/>
            <Text>Đăng bán</Text>
          </View>


          <View style={styles.iconfooter}>
            <FontAwesome5 name = "heart" style ={styles.iconfooterstyle}/>
            <Text>Yêu thích</Text>
          </View>


          <View style={styles.iconfooter}>
            <Image
            style ={{width: 35, height: 35, borderRadius: 17.5}}
            source={require('../assets/hutao.jpg')}
            />
            <Text>Cá nhân</Text>
          </View>  */}


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
        height: '80%',
        backgroundColor: 'white'
    },
    footer: {
        width: '100%',
        height: 72,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTop: 'solid',
        borderWidth: 1,
    },
    iconfooter:{
      height: 72,
      width: '25%',
      flexDirection: 'column',
      backgroundColor:'blue',
      textAlign: "center",
    },
    iconfooterstyle:{
      color: '#757575',
      backgroundColor: 'black',
      textAlign: "center",
      fontSize: 35,
    },
    iconStyle:{
      color: 'white',
      fontSize: 32,
      paddingLeft: 9
    },
    textfooter:{
      fontSize: 30,
    }
  });
export default Notification