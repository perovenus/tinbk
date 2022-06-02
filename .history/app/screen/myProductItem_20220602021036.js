import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
} from 'react-native';

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
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Bạn có muốn </Text>
                  <Pressable
                    style={[styles.buttonmodal, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Xác nhận</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buybutton}
          onPress={() => setModalVisible(true)}>
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
  modalView: {
    width: '80%',
    height: '20%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#2F80ED',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
