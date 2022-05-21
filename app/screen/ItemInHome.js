import { faAlignJustify, faDiceSix } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ItemInHome = ({item}) => {
  return (
    // <View style={styles.itemInHome}>
      <TouchableOpacity style={styles.itemInHome}>
        <View style={styles.container}>
          <Image
            resizeMode='contain'
            source={require('../assets/ppl.jpg')} 
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buybutton}>
          <FontAwesome5 name='shopping-cart' size={24} color='rgba(47,128,237,0.85)'/>
        </TouchableOpacity>
      </TouchableOpacity>
    // </View>
  )
}

export default ItemInHome;

const styles = StyleSheet.create({
  itemInHome: {
    width: 165,
    height: 200,
    borderRadius: 10,
    elevation: 1, 
    marginLeft: (Dimensions.get('window').width - 165*2) / 3,
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