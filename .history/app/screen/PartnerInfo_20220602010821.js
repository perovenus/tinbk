import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const goBack = () => {
  Actions.pop()
}
const PartnerInfo = (partnerInfo) => {
  return (
    <SafeAreaView style={styles.userinfoscreen}>
      <View style={styles.appbar}>
        <TouchableOpacity onPress={goBack} >
          <View>
            <FontAwesome5
              name='angle-left'
              color='white'
              size={28}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.appbar_left}>
          <Text style={styles.navbarText}>Thông tin người dùng</Text>
        </View>
      </View>
      <ScrollView style={styles.body}>
        <View style={styles.container}>
          {
            partnerInfo.image ?
              <Image
                source={{ uri: partnerInfo.image }}
                style={styles.avatar}
              /> :
              <Image
                source={require('../assets/user.png')}
                style={styles.avatar}
              />
          }

          <View style={styles.info}>
            <Text style={[styles.infoText, { fontWeight: 'bold' }]}>
              {partnerInfo['middleName'] + ' ' + partnerInfo['firstName']}
            </Text>
            <Text style={styles.infoText}>Giới tính: {partnerInfo['gender'] == 'Male' ? 'Nam' : 'Nữ'} </Text>
            <Text style={styles.infoText}>Ngày sinh:</Text>
            <Text style={styles.infoText}>{partnerInfo['birthday']}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <Ionicons name="mail" size={24} color="#444"></Ionicons>
          </View>
          <View>
            <Text style={styles.cardtext}>{partnerInfo.email}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.lefticon}>
            <FontAwesome name="mobile-phone" size={24} color="#444" />
          </View>
          <View>
            <Text style={styles.cardtext}>{partnerInfo['phoneNumber']}</Text>
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
            <Text style={styles.cardtext}>{partnerInfo['address']}</Text>
          </View>
        </View>
        
      </ScrollView>
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
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 20
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
export default PartnerInfo;
