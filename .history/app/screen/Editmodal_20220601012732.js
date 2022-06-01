import React, {useState, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import MaskInput, {Masks} from 'react-native-mask-input';
const Editmodal = (modalVisible, setModalVisible, user) => {
  const [image, setImage] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const getuser = () => {
    const user = auth().currentUser;
    firestore()
      .collection('Users')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        setUserInfo(documentSnapshot.data());
      });
  };
  useEffect(() => {
    getuser();
  }, []);
  // const [middleName, setMiddleName] = useState(userInfo.middleName);
  // const [firstName, setFirstName] = useState(userInfo.firstName);
  // const [birthday, setBirthday] = useState(userInfo.birthday);
  // const [address, setAddress] = useState(userInfo.address);
  // const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);
  const pickImage = async () => {
    let result = await launchImageLibrary();
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };
  const uploadImage = async () => {
    const reference = storage().ref(`user_image/${auth().currentUser.uid}.jpg`);
    await reference.putFile(image);
    const url = await reference.getDownloadURL();
    return url;
  };
  const textplaceholder = '#8f8d8d';
  const handleSubmit = async () => {
    firestore()
      .collection('Users')
      .doc(user.uid)
      .update({
        middleName: userInfo ? userInfo.middleName : '',
        firstName: userInfo ? userInfo.firstName : '',
        birthday: userInfo ? userInfo.birthday : '',
        phoneNumber: userInfo ? userInfo.phoneNumber : '',
        address: userInfo ? userInfo.address : '',
        image: image ? await uploadImage() : userInfo.image,
      })
      .then(() => setModalVisible(!modalVisible));
  };
  return (
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
            {image == null ? (
              userInfo ? (
                <Image style={styles.Avatar} source={{uri: userInfo.image}} />
              ) : (
                <Image
                  style={styles.Avatar}
                  source={require('../assets/user.png')}
                />
              )
            ) : (
              <Image style={styles.Avatar} source={{uri: image}} />
            )}
            <TouchableOpacity onPress={pickImage} style={styles.getImageButton}>
              <FontAwesome name="camera" size={30} color="#494949" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Họ tên đệm</Text>
            <TextInput
              style={styles.inputText}
              value={userInfo ? userInfo['middleName'] : ''}
              placeholderTextColor={textplaceholder}
              onChangeText={text =>
                setUserInfo({...userInfo, middleName: text})
              }
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Tên</Text>
            <TextInput
              style={styles.inputText}
              value={userInfo ? userInfo['firstName'] : ''}
              placeholderTextColor={textplaceholder}
              onChangeText={text => setUserInfo({...userInfo, firstName: text})}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Ngày sinh</Text>
            {/* <TextInput
              style={styles.inputText}
              value={userInfo ? userInfo['birthday'] : ''}
              placeholderTextColor={textplaceholder}
              onChangeText={text => setUserInfo({...userInfo, birthday: text})}
              keyboardType="name-phone-pad"
            /> */}
            <MaskInput
              style={styles.inputText}
              value={userInfo ? userInfo['birthday'] : ''}
              onChangeText={text => setUserInfo({...userInfo, birthday: text})}
              mask={Masks.DATE_DDMMYYYY}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Điện thoại</Text>
            <TextInput
              style={styles.inputText}
              value={userInfo ? userInfo['phoneNumber'] : ''}
              placeholderTextColor={textplaceholder}
              onChangeText={text => {
                setUserInfo({...userInfo, phoneNumber: text});
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Địa chỉ</Text>
            <TextInput
              style={styles.inputText}
              value={userInfo ? userInfo['address'] : ''}
              placeholderTextColor={textplaceholder}
              onChangeText={text => setUserInfo({...userInfo, address: text})}
            />
          </View>

          <TouchableOpacity style={styles.confirmButton} onPress={handleSubmit}>
            <Text style={[styles.textstyle, {color: 'white'}]}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
    width: Dimensions.get('window').width - 30,
    height: 470,
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
    fontSize: 15,
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
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#000000',
    fontSize: 16,
    paddingHorizontal: 10,
    color: '#000',
  },
});

export default Editmodal;
