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
import Fontisto from 'react-native-vector-icons/Fontisto'
import Tabs from './Tabs'
const UserInfo = () => {
   return (
     <SafeAreaView>

        <View style ={styles.header} >


            <View style ={styles.startheader}>
              <Text style={{color:'white', fontSize: 30, marginLeft: 10}}>Cá nhân</Text>
            </View>


            <View style ={styles.endheader}>
              <Feather name ="edit" style ={styles.iconStyle} />
            </View>


        </View>

        <ScrollView style={{height:"100%", width:"100%"}}>


        <View style ={styles.body}>
            <View style={{backgroundColor:'green', width:'50%', height: 200, justifyContent: 'center',alignItems:'center'}}> 
                <Image
                    source={require('../assets/hutao.jpg')}
                    style={{
                        width:'80%',
                        height:'80%',
                        borderRadius:80,
                    }}
                />
            </View>
            <View style={{width:'50%', height: 200, flexDirection:'row', flexWrap:'wrap',alignContent:'center'}}>
                <Text style={{width:'40%', height: 30, marginTop: 60, textAlign:'center', justifyContent:'center'}}>Tên </Text>
                <Text style={{width:'60%',  justifyContent:'center', paddingTop: 20,marginTop: 40,}}>Perovenus</Text>

                <Text style={{width:'40%', height: 30, textAlign:'center', justifyContent:'center'}}>Giới tính </Text>
                <Text style={{width:'60%',  justifyContent:'center'}}>Nam</Text>

                <Text style={{width:'40%', height: 30,  textAlign:'center', justifyContent:'center'}}>Ngày sinh </Text>
                <Text style={{width:'60%',  justifyContent:'center'}}>02/05/2001</Text>
            </View>
        </View>


        <View style={{backgroundColor:"white", height:70, width:"100%", flexDirection:'row'}}>
          <Fontisto name="email" style={{fontSize:32}}/>
          <Text style={{width:"60%", paddingLeft}}>email</Text>
        </View>


        <View style={{backgroundColor:"blue", height:70, width:"100%"}}>
                    <Text>phone</Text>
        </View>


        <View style={{backgroundColor:"gray", height:70, width:"100%"}}>
                    <Text>address</Text>
        </View>


        <View style={{backgroundColor:"yellow", height:70, width:"100%"}}>
                    <Text>help</Text>
        </View>


        <View style={{backgroundColor:"purple", height:70, width:"100%"}}>
                    <Text>history</Text>
        </View>


        <View style={{backgroundColor:"yellow", height:70, width:"100%"}}>
                    <Text>sECURITY</Text>
        </View>


        <View style={{backgroundColor:"blue", height:250, width:"100%"}}>
                    <Text>lOGOUT</Text>
        </View>
        
        </ScrollView>

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
        height: 200,
        backgroundColor: 'green',
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