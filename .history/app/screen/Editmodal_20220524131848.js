import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';

const Editmodal = (modalVisible, setModalVisible, user, userInfo) => {

  const [image, setImage] = useState(null);
  const [middleName, setMiddleName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const pickImage = async () => {
    let result = await launchImageLibrary();
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };
  const uploadImage = async () => {
    let img = image.split('/');
    const reference = storage().ref(`user_image/${auth().currentUser.uid}.jpg`);
    await reference.putFile(image);
    const url = await reference.getDownloadURL();
    return url;
  };

  const handleSubmit = async () => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        middleName: middleName == '' ? userInfo['middleName'] : middleName,
        firstName: firstName == '' ? userInfo['firstName'] : firstName,
        birthday: birthday == '' ? userInfo['birthday'] : birthday,
        phoneNumber: phoneNumber == '' ? userInfo['phoneNumber'] : phoneNumber,
        address: address == '' ? userInfo['address'] : address,
        image: image ? await uploadImage() : '',
      })
      .then(() => setModalVisible(!modalVisible));
  };

  return (
    console.log(userInfo),
    (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.closeButton}>
              <FontAwesome name="close" size={30} color="black" />
            </TouchableOpacity>
            <View>
              {image ? (con) : ()}
              <TouchableOpacity
                onPress={pickImage}
                style={styles.getImageButton}>
                <FontAwesome name="camera" size={30} color="#494949" />
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>H??? t??n ?????m</Text>
              <TextInput
                style={styles.inputText}
                placeholder={userInfo['middleName']}
                onChangeText={text => setMiddleName(text)}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>T??n</Text>
              <TextInput
                style={styles.inputText}
                placeholder={userInfo['firstName']}
                onChangeText={text => setFirstName(text)}
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>Ng??y sinh</Text>
              <TextInput
                style={styles.inputText}
                placeholder={userInfo['birthday']}
                onChangeText={text => setBirthday(text)}
                keyboardType="name-phone-pad"
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>??i???n tho???i</Text>
              <TextInput
                style={styles.inputText}
                placeholder={userInfo['phoneNumber']}
                onChangeText={text => {
                  setPhoneNumber(text);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.container}>
              <Text style={styles.textstyle}>?????a ch???</Text>
              <TextInput
                style={styles.inputText}
                placeholder={userInfo['address']}
                onChangeText={text => setAddress(text)}
              />
            </View>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleSubmit}>
              <Text style={[styles.textstyle, {color: 'white'}]}>X??c nh???n</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.53)',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get('window').width,
    height: 425,
  },
  closeButton: {
    position: 'absolute',
    alignSelf: 'flex-end',
    top: 10,
    right: 20,
  },
  getImageButton: {
    position: 'absolute',
    top: 95,
    left: 95,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textstyle: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 16,
  },
  confirmButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2F80ED',
    marginTop: 10,
    width: 130,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  Avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#BBCEE7',
    marginBottom: 10,
  },
  inputText: {
    width: '70%',
    height: 34,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000000',
    fontSize: 13,
    paddingHorizontal: 10,
  },
});

export default Editmodal;
