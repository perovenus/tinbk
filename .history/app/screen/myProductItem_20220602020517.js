import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';

import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MyProductItem = ({item}) => {
  const [hide, setHide] = useState(true);
  const removeItem = id => {
    firestore()
      .collection('Books')
      .doc(id)
      .delete()
      .then(() => {
        console.log('Book deleted!');
        setHide(false);
      });
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    hide && (
      <View>
        <TouchableOpacity>
          <View style={styles.container}>
            <Image
              resizeMode="contain"
              source={{uri: item.image}}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text numberOfLines={2} style={styles.name}>
                {item.bookName}
              </Text>
              <Text style={styles.price}>{item.price} đồng</Text>
              <Text style={styles.location}>{item.bookRegion}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buybutton}
          onPress={() => removeItem(item.id)}>
          <FontAwesome5 name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    )
  );
};

export default MyProductItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: '100%',
    height: 140,
    marginTop: 2,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '30%',
    height: '80%',
  },
  details: {
    width: '60%',
    height: '90%',
    marginLeft: '5%',
  },
  name: {
    fontSize: 17,
    fontWeight: '400',
    color: 'rgb(36, 36, 36)',
  },
  price: {
    fontSize: 20,
    fontWeight: '500',
    color: '#303030',
    // marginTop: 5,
  },
  location: {
    fontSize: 15,
    // marginTop: 40,
    color: '#5A5A5A',
  },
  buybutton: {
    position: 'absolute',
    top: '75%',
    left: '86%',
  },
});
