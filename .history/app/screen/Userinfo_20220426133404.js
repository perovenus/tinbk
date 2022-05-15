import React, {useState} from 'react';
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
import {Actions} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from './Tabs';
import Editmodal from './Editmodal';
const UserInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = {
    name: 'Peroveus',
    gender: 'Nam',
    birthday: '02/05/2001',
  };
  return (
    <SafeAreaView>
      {/* NAVBAR */}
      <View style={styles.appbar}>
        <View style={styles.appbar_left}>
          <Text style={styles.navbarText}>Cá nhân</Text>
        </View>
        <View style={styles.appbar_right}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesome name="edit" size={34} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {/*END NAVBAR*/}
      {/*CONTENT*/}
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image
              source={require('../assets/hutao.jpg')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>Tên: {data['name']}</Text>
            <Text style={styles.infoText}>Giới tính: {data['gender']} </Text>
            <Text style={styles.infoText}>Ngày sinh:</Text>
            <Text style={styles.infoText}>{data['birthday']}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <Ionicons name="mail" size={24} color="#444"></Ionicons>
          </View>
          <View>
            <Text style={styles.cardtext}>han.cao509@hcmut.edu.vn</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <FontAwesome name="mobile-phone" size={24} color="#444" />
          </View>
          <View>
            <Text style={styles.cardtext}>0349362424</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <Ionicons
              name="ios-location-sharp"
              size={24}
              color="#444"></Ionicons>
          </View>
          <View>
            <Text style={styles.cardtext}>KTX khu A đại học quốc gia</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.cardbonus}>
          <View style={styles.bonus}>
            <View style={styles.lefticon}>
              <FontAwesome name="shopping-cart" size={24} color="#444" />
            </View>
            <View>
              <Text style={styles.cardtext}>Sản phẩm của tôi</Text>
            </View>
          </View>
          <View>
            <FontAwesome name="angle-right" size={24} color="#444" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardbonus}>
          <View style={styles.bonus}>
            <View style={styles.lefticon}>
              <FontAwesome name="lock" size={24} color="#444" />
            </View>
            <View>
              <Text style={styles.cardtext}>Đổi mật khẩu</Text>
            </View>
          </View>
          <View>
            <FontAwesome name="angle-right" size={24} color="#444" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.lefticon}>
            <FontAwesome name="power-off" size={24} color="red" />
          </View>
          <View>
            <Text style={styles.cardtext}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.lefticon}>
            <FontAwesome name="power-off" size={24} color="red" />
          </View>
          <View>
            <Text>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.lefticon}>
            <FontAwesome name="power-off" size={24} color="red" />
          </View>
          <View>
            <Text>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'rgba(47,128,237,0.76)',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    position: 'relative',
  },
  appbar_left: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 1,
    marginLeft: 16,
  },
  appbar_right: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 1,
    marginRight: 16,
  },
  navbarText: {
    color: 'white',
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  avatar: {
    flex: 1,
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    height: 160,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bonus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardbonus: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lefticon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  cardtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Roboto',
  },
});
export default UserInfo;
