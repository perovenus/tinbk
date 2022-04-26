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
} from 'react-native';
import {ListItem} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Editmodal = (modalVisible, setModalVisible) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <FontAwesome
                name="close"
                size={30}
                color="black"
                onPress={() => setModalVisible(!modalVisible)}
                style={{top: 10, right: 10}}
              />
              <Image
                style={styles.Avatar}
                source={require('../assets/hutao.jpg')}
              />
              <FontAwesome name="camera" size={30} color="black" />
            </View>
            <View>
              <ListItem bottomDivider>
                <Text>Tên</Text>
                <TextInput style={styles.inputText}>abcdef</TextInput>
              </ListItem>

              <ListItem bottomDivider>
                <Text>Giới tính</Text>
                <TextInput style={styles.inputText}>abcdef</TextInput>
              </ListItem>

              <ListItem bottomDivider>
                <Text>Ngày sinh</Text>
                <TextInput style={styles.inputText}>abcdef</TextInput>
              </ListItem>

              <ListItem bottomDivider>
                <Text>Email</Text>
                <TextInput style={styles.inputText}>abcdef</TextInput>
              </ListItem>

              <ListItem bottomDivider>
                <Text>Điện thoại</Text>
                <TextInput style={styles.inputText}>abcdef</TextInput>
              </ListItem>

              <ListItem bottomDivider>
                <Text>Địa chỉ</Text>
                <TextInput style={styles.inputText}>abcdef</TextInput>
              </ListItem>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Xác nhận</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  Avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  inputText: {
    width: 200,
    height: 30,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#2F80ED',
    fontSize: 15,
  },
});

export default Editmodal;
