import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToAbout = () => {
      Actions.about()
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


      <Tabs/>


   </SafeAreaView>
   )
}
export default Home