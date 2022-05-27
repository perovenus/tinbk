import { faAlignJustify, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Actions } from 'react-native-router-flux'
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ItemInHome = ({item}) => {
  const gotoProductInfo = (i) => {
    Actions.ProductScreen(i)
  }
  
  const user = auth().currentUser
  const sendMessage = () => {
    fetch('https://644d-2405-4802-b268-c940-f83f-4f2a-9ddc-207b.ngrok.io/notifications', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        buyerId: user.uid,
        book: item
      })
    })
    

  }
  return (
    // <View style={styles.itemInHome}>
      <TouchableOpacity
      onPress={() => gotoProductInfo(item)}
      style={styles.itemInHome}>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={{uri : item.image}} 
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.name}>{item.bookName}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buybutton} onPress={sendMessage}>
          <FontAwesome5 name='shopping-cart' size={24} color='rgba(47,128,237,0.85)'/>
        </TouchableOpacity>
      </TouchableOpacity>
    // </View>
  )
}

export default ItemInHome;

const styles = StyleSheet.create({
  itemInHome: {
    width: '44%',
    height: Dimensions.get('window').height*0.25,
    minHeight: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DADADA',
    // elevation: 1, 
    // marginLeft: (Dimensions.get('window').width - 165*2) / 3,
    marginLeft: '4%',
    marginVertical: 5,
  },
  container: {
    height: '100%',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 115,
    alignSelf: 'center',
    marginTop: 10,
  },
  details: {
    // width: '65%',
    // height: '90%',
    height: 65,
    justifyContent: 'flex-end'
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgb(36, 36, 36)',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303030',
    // bottom: 5,
  },
  buybutton: {
    position: 'absolute',
    left: 125,
    top: 165,
  }
})
