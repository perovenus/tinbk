import React, {useSate} from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import Tabs from './Tabs'
const UserInfo = () => {
   return (
     <SafeAreaView>

        <View style ={styles.header} >


            <View style ={styles.startheader}>
              <FontAwesome5 name ="angle-left" style ={styles.iconStyle}/>
              <Text style={{color:'white', fontSize: 30, marginLeft: 10}}>Cá nhân</Text>
            </View>


            <View style ={styles.endheader}>
              <Feather name ="edit" style ={styles.iconStyle} />
            </View>


        </View>


        <View style ={styles.body}>
            <View style={{backgroundColor:'white', width:'50%', height: 200, justifyContent: 'center',alignItems:'center'}}> 
                <Image
                    source={require('../assets/hutao.jpg')}
                    style={{
                        width:'80%',
                        height:'80%',
                        borderRadius:80,
                    }}
                />
            </View>
            <View style={{backgroundColor:'blue', width:'50%', height: 200, flexDirection:'row', flexWrap:'wrap'}}>
                <Text style={{width:'20%', height: 50, marginTop}}>Tên: </Text>
                <Text style={{backgroundColor:'red', width:'80%', height: 50}}>Nickname</Text>
                <Text style={{width:'20%', height: 50}}>Giới tính </Text>
                <Text style={{backgroundColor:'gray', width:'80%'}}>Gender</Text>
                <Text style={{width:'20%', height: 50}}>Tên: </Text>
                <Text style={{backgroundColor:'green',  width:'80%'}}>Birthday</Text>
            </View>
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
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    footer: {
        width: '100%',
        height: 72,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    iconfooter:{
      height: 72,
      width: '25%',
      flexDirection: 'column',
      backgroundColor:'white',
      textAlign: "center",
      backgroundColor: 'black'
    },
    iconfooterstyle:{
      color: '#757575',
      textAlign: "center",
      fontSize: 35,
    },
    iconStyle:{
      color: 'white',
      fontSize: 32,
      paddingLeft: 9
    },
    textfooter:{
      color: '#4D4D4D',
      fontWeight: 'bold',
      textAlign: 'center',
      frontFamily:'inter',
    },
    imgfooter: {
      width: 35, 
      height: 35, 
      justifyContent: 'space-between',
      textAlign: "center",
      // borderRadius: 17.5,
      backgroundColor: 'black'
    }
  });
export default UserInfo