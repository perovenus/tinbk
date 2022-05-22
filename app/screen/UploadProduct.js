import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  SafeAreaView,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {utils} from '@react-native-firebase/app';

export default function UploadProduct() {
  const [modalVisible, setModalVisible] = useState(false);
  const domoi = ['Sách mới', 'Sách 99%', 'Sách cũ'];
  const theloai = ['Giáo trình', 'Bài tập', 'Tham khảo', 'Truyện'];
  const khuvuc = ['ĐHBK cơ sở 2', 'ĐHBK cơ sở 1', 'KTX khu A', 'KTX khu B'];

  const showToast = message => {
    Toast.show({
      type: 'success',
      text1: message,
    });
  };

  const bookNameRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const bookTypeRef = useRef(null);
  const bookRegionRef = useRef(null);
  const bookStatusRef = useRef(null);

  const [image, setImage] = useState(null);
  const [bookName, setBookName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [bookType, setBookType] = useState('');
  const [bookRegion, setBookRegion] = useState('');
  const [bookStatus, setBookStatus] = useState('');

  const handleUploadProduct = () => {
    if (!image) {
      showToast('Bạn chưa chọn ảnh sách');
    } else if (bookName == '') {
      bookNameRef.current.focus();
      showToast('Bạn chưa nhập tên sách');
    } else if (quantity == '' || quantity == '0') {
      quantityRef.current.focus();
      showToast('Bạn chưa nhập số lượng sách');
    } else if (price == '') {
      priceRef.current.focus();
      showToast('Bạn chưa nhập giá sách');
    } else if (bookType == '') {
      showToast('Bạn chưa chọn loại sách');
    } else if (bookRegion == '') {
      showToast('Bạn chưa chọn khu vực');
    } else if (bookStatus == '') {
      showToast('Bạn chưa chọn trạng thái sách');
    } else {
      firestore().collection('Books').add({
        bookName: bookName,
        quantity: quantity,
        price: price,
        description: description,
        bookType: bookType,
        bookRegion: bookRegion,
        bookStatus: bookStatus,
        image: image,
        seller: auth().currentUser.uid,
      });

      setModalVisible(true);
    }
  };

  const dropdownIcon = () => {
    return (
      <FontAwesome5
        name="caret-down"
        size={20}
        color="#2F80ED"
        style={{left: 10}}
      />
    );
  };

  //pick photo
  const pickImage = async () => {
    let result = await launchImageLibrary();
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
    console.log(image);
  };



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/upload-background.jpg')}>
        <Text style={styles.header}>Đăng ký gửi bán</Text>
        <View style={styles.viewimage}>
          {!image && (
            <Image
              style={styles.image}
              source={require('../assets/grey.jpg')}
            />
          )}
          {image && <Image style={styles.image} source={{uri: image}} />}
          <TouchableOpacity onPress={pickImage} style={styles.getImageButton}>
            <FontAwesome5 name="camera" size={30} color="#494949" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.form}>
            <Text style={styles.text}>Tên sách</Text>
            <TextInput
              ref={bookNameRef}
              style={styles.textinput}
              onChangeText={text => setBookName(text)}
              value={{}}
              placeholder=""
            />
            <View style={styles.soluongvagia}>
              <View style={styles.soluong}>
                <Text style={styles.text}>Số lượng</Text>
                <TextInput
                  ref={quantityRef}
                  onChangeText={text => setQuantity(text)}
                  style={styles.textinput}
                  keyboardType="numeric"
                  value={{}}
                  placeholder=""
                />
              </View>
              <View style={styles.gia}>
                <Text style={styles.text}>Giá</Text>
                <TextInput
                  ref={priceRef}
                  onChangeText={text => setPrice(text)}
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
                rowTextStyle={{
                  textAlign: 'left',
                  paddingLeft: 20,
                }}
                data={domoi}
                onSelect={(selectedItem, index) => {
                  setBookStatus(selectedItem);
                }}
                renderDropdownIcon={dropdownIcon}
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
                onSelect={(selectedItem, index) => {
                  setBookType(selectedItem);
                }}
                renderDropdownIcon={dropdownIcon}
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
                onSelect={(selectedItem, index) => {
                  setBookRegion(selectedItem);
                }}
                renderDropdownIcon={dropdownIcon}
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
              <TextInput
                ref={descriptionRef}
                onChangeText={text => setDescription(text)}
                style={[
                  styles.textinput,
                  {height: 140, textAlignVertical: 'top'},
                ]}
                multiline={true}
                numberOfLines={4}
              />
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
                onPress={() => {
                  handleUploadProduct();
                }}>
                <Text style={styles.textbutton}>Xác nhận</Text>
              </Pressable>
              <View style={{height: 70}}></View>
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
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    marginTop: 10,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  scrollview: {
    marginTop: 100,
    marginBottom: 70,
  },
  viewimage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 'auto',
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
    backgroundColor: 'white',
  },
  textdropdown: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'left',
    paddingLeft: 10,
  },
  dropdown: {borderWidth: 0, borderRadius: 10, backgroundColor: 'white'},
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
  getImageButton: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
});
