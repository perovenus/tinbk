import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {ScrollView} from 'react-native-gesture-handler';
import {Actions, Router, Scene} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ViewImageScreen from './ViewImageScreen';

const domoi = ['Sách mới', 'Sách 99%', 'Sách cũ'];
const theloai = ['Giáo trình', 'Tiểu thuyết', 'Truyện tranh', 'Sách bài tập'];
const khuvuc = [
  'ĐHBK cơ sở 2',
  'ĐHBK cơ sở 1',
  'KTX khu A',
  'KTX khu B',
  'Khác (Ghi chú)',
];

export default function UploadProduct() {
  const goToViewImageScreen = () => {
    Actions.viewImageScreen();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/upload-background.jpg')}>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <Text style={styles.Title}>Đăng ký gửi bán</Text>
          <Image
            style={{
              width: 160,
              height: 190,
              left: 100,
              top: 97,
            }}
            source={require('../assets/chair.jpg')}
          />
        </View>
        <ScrollView
          style={{
            width: '100%',
            height: '100%',
            ...styles.forms,
          }}>
          <View>
            <Text
              style={{
                marginBottom: 10,
                color: '#2F80ED',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Tên sách
            </Text>
            <TextInput
              style={{
                width: '80%',
                height: 40,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#2F80ED',
                fontSize: 18,
              }}
            />
            <View>
              <Text
                style={{
                  marginRight: 50,
                  marginBottom: 10,
                  color: '#2F80ED',
                  fontWeight: '400',
                  fontSize: 18,
                }}>
                Số lượng
              </Text>
              <TextInput
                style={{
                  width: '30%',
                  height: 40,
                  marginBottom: 10,
                  marginRight: 50,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#2F80ED',
                  fontSize: 18,
                  textAlign: 'center',
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginBottom: 10,
                  color: '#2F80ED',
                  fontWeight: '400',
                  fontSize: 18,
                }}>
                Giá
              </Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{
                    width: '50%',
                    height: 40,
                    marginBottom: 10,
                    marginRight: 30,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#2F80ED',
                    fontSize: 18,
                    textAlign: 'center',
                  }}
                />
                <Text
                  style={{
                    top: 5,
                    color: '#2F80ED',
                    fontWeight: '400',
                    fontSize: 18,
                  }}>
                  đồng
                </Text>
              </View>
            </View>
            <Text
              style={{
                marginBottom: 10,
                color: '#2F80ED',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Độ mới
            </Text>
            <SelectDropdown
              buttonStyle={{
                width: '55%',
                height: 40,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#2F80ED',
                fontSize: 18,
              }}
              buttonTextStyle={{
                color: '#000000',
                fontWeight: '400',
                fontSize: 18,
              }}
              dropdownStyle={{
                borderWidth: 0,
                borderRadius: 10,
                fontSize: 18,
              }}
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
            <Text
              style={{
                marginBottom: 10,
                color: '#2F80ED',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Thể loại
            </Text>
            <SelectDropdown
              buttonStyle={{
                width: '55%',
                height: 40,
                marginBottom: 10,

                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#2F80ED',
                fontSize: 18,
              }}
              buttonTextStyle={{
                color: '#000000',
                fontWeight: '400',
                fontSize: 18,
              }}
              dropdownStyle={{
                borderWidth: 0,
                borderRadius: 10,
                fontSize: 18,
              }}
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
            <Text
              style={{
                marginBottom: 10,
                color: '#2F80ED',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Khu vực
            </Text>
            <SelectDropdown
              buttonStyle={{
                width: '80%',
                height: 40,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#2F80ED',
                fontSize: 18,
              }}
              buttonTextStyle={{
                color: '#000000',
                fontWeight: '400',
                fontSize: 18,
              }}
              dropdownStyle={{
                borderWidth: 0,
                borderRadius: 10,
                fontSize: 18,
              }}
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
            <Text
              style={{
                marginBottom: 10,
                color: '#2F80ED',
                fontWeight: '400',
                fontSize: 18,
              }}>
              Ghi chú
            </Text>
            <TextInput
              style={{
                width: '80%',
                height: 160,
                marginBottom: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#2F80ED',
                fontSize: 18,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              

            }}>
            <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
              color="#2F90ED"
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  forms: {
    flex: 1,
    position: 'absolute',
    width: '90%',
    height: 340,
    left: 40,
    top: 320,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  Title: {
    position: 'absolute',
    color: 'white',
    left: 89,
    top: 22,
    textAlign: 'center',
    fontStyle: 'normal',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 33,
  },
});
