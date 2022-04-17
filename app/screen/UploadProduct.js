import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TextArea,
  Button,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  TouchableHighlight,
  Modal,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import UploadImageComponent from './UploadImageComponent';
import Tab from './Tab';

const domoi = ['Sách mới', 'Sách 99%', 'Sách cũ'];
const theloai = ['Giáo trình', 'Tiểu thuyết', 'Truyện tranh', 'Sách bài tập'];
const khuvuc = ['ĐHBK cơ sở 2', 'ĐHBK cơ sở 1', 'KTX khu A', 'KTX khu B'];

export default function UploadProduct() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/upload-background.jpg')}>
        <Text style={styles.header}>Đăng ký gửi bán</Text>
        <ScrollView style={styles.scrollview}>
          <View style={styles.viewimage}>
            <Image
              style={styles.image}
              source={require('../assets/chair.jpg')}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.text}>Tên sách</Text>
            <TextInput style={styles.textinput} value={{}} placeholder="" />
            <View style={styles.soluongvagia}>
              <View style={styles.soluong}>
                <Text style={styles.text}>Số lượng</Text>
                <TextInput
                  style={styles.textinput}
                  keyboardType="numeric"
                  value={{}}
                  placeholder=""
                />
              </View>
              <View style={styles.gia}>
                <Text style={styles.text}>Giá</Text>
                <TextInput
                  style={styles.textinput}
                  keyboardType="numeric"
                  value={{}}
                  placeholder=""
                />
              </View>
            </View>
            <View style={styles.domoi}>
              <Text style={styles.text}>Độ mới</Text>
              <SelectDropdown
                buttonStyle={styles.buttondropdown}
                buttonTextStyle={styles.textdropdown}
                dropdownStyle={styles.dropdown}
                data={domoi}
                defaultValue={domoi[0]}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <View style={styles.theloai}>
              <Text style={styles.text}>Thể loại</Text>
              <SelectDropdown
                buttonStyle={styles.buttondropdown}
                buttonTextStyle={styles.textdropdown}
                dropdownStyle={styles.dropdown}
                data={theloai}
                defaultValue={theloai[0]}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <View style={styles.khuvuc}>
              <Text style={styles.text}>Khu vực</Text>
              <SelectDropdown
                buttonStyle={styles.buttondropdown}
                buttonTextStyle={styles.textdropdown}
                dropdownStyle={styles.dropdown}
                data={khuvuc}
                defaultValue={khuvuc[0]}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
              />
            </View>
            <View style={styles.ghichu}>
              <Text style={styles.text}>Ghi chú</Text>
              <TextInput style={styles.textinput} value={{}} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
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
                    <Text style={styles.modalText}>Gửi bán thành công</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Xác nhận</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable
                style={styles.button}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textbutton}>Xác nhận</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'green',
  },
  backgroundImage: {flex: 1, resizeMode: 'cover', justifyContent: 'center'},
  header: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  scrollview: {
    marginTop: 30,
  },
  viewimage: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 190,
  },
  form: {
    paddingHorizontal: 40,
  },

  text: {
    marginBottom: 10,
    color: '#2F80ED',
    fontWeight: '400',
    fontSize: 18,
  },
  textinput: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2F80ED',
    fontSize: 18,
    color: '#000000',
    paddingHorizontal: 15,
  },
  soluongvagia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  soluong: {flex: 2, marginRight: 30},
  gia: {flex: 5},
  domoi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  theloai: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  khuvuc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ghichu: {
    marginBottom: 20,
  },
  button: {
    width: '50%',
    alignItems: 'center',
    backgroundColor: '#2F80ED',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  textbutton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    fontSize: 18,
  },
  buttondropdown: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2F80ED',
    fontSize: 18,
  },
  textdropdown: {color: '#000000', fontWeight: '400', fontSize: 18},
  dropdown: {borderWidth: 0, borderRadius: 10, fontSize: 18},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    paddingHorizontal: 40,
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
    marginTop: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#2F80ED',
    fontWeight: 'bold',
    fontSize: 28,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#34C855',
  },
  textStyle: {
    fontSize: 22,
    color: '#FFFFFF',
  },
});
