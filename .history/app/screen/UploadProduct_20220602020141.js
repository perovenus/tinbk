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
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const UploadProduct = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const domoi = ['Sách mới', 'Sách 99%', 'Sách cũ'];
  const theloai = ['Giáo trình', 'Bài tập', 'Tham khảo', 'Truyện'];
  const khuvuc = ['ĐHBK cơ sở 2', 'ĐHBK cơ sở 1', 'KTX khu A', 'KTX khu B'];

  const showToast = message => {
    Toast.show({
      type: 'error',
      text1: message,
    });
  };

  const bookNameRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const bookTypeRef = useRef(null);
  const bookStatusRef = useRef(null);
  const bookRegionRef = useRef(null);

  const [image, setImage] = useState(null);
  const [bookName, setBookName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [bookType, setBookType] = useState('');
  const [bookRegion, setBookRegion] = useState('');
  const [bookStatus, setBookStatus] = useState('');

  const uploadImage = async () => {
    let img = image.split('/');
    const reference = storage().ref(
      `book_image/${auth().currentUser.uid}/${img[img.length - 1]}`,
    );
    await reference.putFile(image);
    const url = await reference.getDownloadURL();
    return url;
  };

  const handleUploadProduct = async () => {
    if (!image) {
      showToast('Bạn chưa chọn ảnh sách');
    } else if (bookName == '' || bookName.length < 5 || bookName.length > 50) {
      bookNameRef.current.focus();
      showToast('Tên sách không hợp lệ');
    } else if (price == '' || price < 0 || price > 10000000) {
      priceRef.current.focus();
      showToast('Giá không hợp lệ');
    } else if (bookType == '') {
      showToast('Bạn chưa chọn loại sách');
    } else if (bookRegion == '') {
      showToast('Bạn chưa chọn khu vực');
    } else if (bookStatus == '') {
      showToast('Bạn chưa chọn trạng thái sách');
    } else {
      setModalVisible(true);
      let link_img = await uploadImage();
      let img = image.split('/');
      firestore()
        .collection('Books')
        .add({
          bookName: bookName,
          price: parseInt(price),
          description: description,
          bookType: bookType,
          bookRegion: bookRegion,
          bookStatus: bookStatus,
          image: link_img,
          seller: auth().currentUser.uid,
          quantity: 1,
          orderList: [],
        });

      setImage(null);
      setBookName('');
      setPrice('');
      setDescription('');
      setBookType('');
      setBookRegion('');
      setBookStatus('');
      setDescription('');
      bookTypeRef.current.reset();
      bookRegionRef.current.reset();
      bookStatusRef.current.reset();
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/upload-background.jpg')}>
        <Text style={styles.header}>Đăng ký bán</Text>
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
            <Text style={styles.text}>
              Tên sách <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              ref={bookNameRef}
              style={styles.textinput}
              onChangeText={text => setBookName(text)}
              value={bookName}
              placeholder="Nhập tên sách (5 đến 50 ký tự)"
            />

            <View style={styles.gia}>
              <Text style={styles.text}>
                Giá <Text style={{color: 'red'}}>*</Text>
              </Text>
              <TextInput
                ref={priceRef}
                onChangeText={text => setPrice(text)}
                style={styles.textinputgia}
                keyboardType="numeric"
                value={price}
                placeholder="0 - 10.000.000"
              />
            </View>

            <View style={styles.domoi}>
              <Text style={styles.text}>
                Độ mới <Text style={{color: 'red'}}>*</Text>
              </Text>
              <SelectDropdown
                ref={bookStatusRef}
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
              <Text style={styles.text}>
                Thể loại <Text style={{color: 'red'}}>*</Text>
              </Text>
              <SelectDropdown
                ref={bookTypeRef}
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
              <Text style={styles.text}>
                Khu vực <Text style={{color: 'red'}}>*</Text>
              </Text>
              <SelectDropdown
                ref={bookRegionRef}
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
                value={description}
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
                      style={[styles.buttonmodal, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Xác nhận</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              {/* <Pressable
                style={styles.button}
                onPress={() => {
                  handleUploadProduct();
                }}>
                <Text style={styles.textbutton}>Xác nhận</Text>
              </Pressable> */}
              <TouchableOpacity
                onPress={handleUploadProduct}
                style={styles.button}>
                <View>
                  <Text style={styles.textbutton}>Xác nhận</Text>
                </View>
              </TouchableOpacity>
              <View style={{height: 70}}></View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default UploadProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
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
    marginTop: 60,
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
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2F80ED',
    fontSize: 18,
    color: '#000000',
    paddingHorizontal: 15,
  },
  textinputgia: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#2F80ED',
    fontSize: 18,
    color: '#000000',
    paddingHorizontal: 20,
    padding: 10,
    textAlign: 'center',
    alignItems: 'center',
  },

  gia: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
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
    justifyContent: 'center',
    backgroundColor: 'rgba(47,128,237,0.9)',
    borderRadius: 10,
    height: 60,
  },
  buttonmodal: {
    width: '65%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(47,128,237,0.9)',
    borderRadius: 10,
    height: 40,
  },
  textbutton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttondropdown: {
    width: '60%',
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
    width: '80%',
    height: '20%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
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
