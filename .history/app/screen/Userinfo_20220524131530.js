import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Editmodal from './Editmodal';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const UserInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({})

  const user = auth().currentUser;

  const handleSignOut = () => {
    auth().signOut().then(() => Actions.signinScreen())
  }
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        setUserInfo(documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [user.uid]);

  return (
    <SafeAreaView style={styles.userinfoscreen}>
      <View style={styles.appbar}>
        <View style={styles.appbar_left}>
          <Text style={styles.navbarText}>Cá nhân</Text>
        </View>
        <View style={styles.appbar_right}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <FontAwesome name="edit" size={34} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.container}>
          {
            userInfo.image ?
              <Image
                source={{uri: userInfo.image}}
                style={styles.avatar}
              /> :
              <Image
                source={require('../assets/user.png')}
                style={styles.avatar}
              />
          }

          <View style={styles.info}>
            <Text style={[styles.infoText, { fontWeight: 'bold' }]}>
              {userInfo['middleName'] + ' ' + userInfo['firstName']}
            </Text>
            <Text style={styles.infoText}>Giới tính: {userInfo['gender'] == 'Male' ? 'Nam':'Nữ'} </Text>
            <Text style={styles.infoText}>Ngày sinh:</Text>
            <Text style={styles.infoText}>{userInfo['birthday']}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <Ionicons name="mail" size={24} color="#444"></Ionicons>
          </View>
          <View>
            <Text style={styles.cardtext}>{user.email}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <FontAwesome name="mobile-phone" size={24} color="#444" />
          </View>
          <View>
            <Text style={styles.cardtext}>{userInfo['phoneNumber']}</Text>
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
            <Text style={styles.cardtext}>{userInfo['address']}</Text>
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
        <TouchableOpacity style={styles.card} onPress={handleSignOut}>
          <View style={styles.lefticon}>
            <FontAwesome name="power-off" size={24} color="red" />
          </View>
          <View>
            <Text style={styles.cardtext}>Đăng xuất</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {Editmodal(modalVisible, setModalVisible, user, userInfo)}
      {/* <Editmodal modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  userinfoscreen: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height - 70,
  },
  appbar: {
    backgroundColor: 'rgba(47,128,237,0.76)',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  appbar_left: {
    // display: 'flex',
    justifyContent: 'center',
    opacity: 1,
    marginLeft: 16,
  },
  appbar_right: {
    // display: 'flex',
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
  body: {
  },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#BBCEE7'
  },
  info: {
    height: 160,
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontFamily: 'Roboto',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 5,
    borderTopWidth: 2,
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
    marginHorizontal: 5,
    borderTopWidth: 2,
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
