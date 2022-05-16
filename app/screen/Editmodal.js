import React, {useState} from 'react';
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
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Editmodal = (modalVisible, setModalVisible) => {
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
            <FontAwesome
              name="close"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <View>
            <Image
              style={styles.Avatar}
              source={require('../assets/hutao.jpg')}
            />
            <TouchableOpacity style={styles.getImageButton}>
              <FontAwesome
                name="camera" 
                size={30} 
                color="#494949" />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Tên</Text>
            <TextInput style={styles.inputText}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Giới tính</Text>
            <TextInput style={styles.inputText}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Ngày sinh</Text>
            <TextInput style={styles.inputText}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Email</Text>
            <TextInput style={styles.inputText}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Điện thoại</Text>
            <TextInput style={styles.inputText}/>
          </View>
          <View style={styles.container}>
            <Text style={styles.textstyle}>Địa chỉ</Text>
            <TextInput style={styles.inputText}/>
          </View>

          <TouchableOpacity 
            style={styles.confirmButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={[styles.textstyle, {color: 'white'}]}>Xác nhận</Text>
          </TouchableOpacity>

          {/* <Pressable
            style={styles.confirmButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={[styles.textstyle, {color: 'white'}]}>Xác nhận</Text>
          </Pressable> */}
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
    backgroundColor: 'rgba(0,0,0,0.53)'
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
    height: 475,
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
    left: 95
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
    fontSize: 16
  },
  confirmButton: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2F80ED',
    marginTop: 10,
    width: 130,
    alignItems: 'center'
  },
  // textStyle: {
  //   color: 'white',
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
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
