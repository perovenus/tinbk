import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from './Tabs';
import Editmodal from './Editmodal';
import {ListItem} from '@rneui/themed';
const UserInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.startheader}>
          <Text style={{color: 'white', fontSize: 30, marginLeft: 10}}>
            Cá nhân
          </Text>
        </View>

        <View style={styles.endheader}>
          <FontAwesome
            name="edit"
            style={styles.iconStyle}
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

      <ScrollView style={{height: '100%', width: '100%'}}>
        <View style={styles.body}>
          <View
            style={{
              backgroundColor: 'white',
              width: '50%',
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/hutao.jpg')}
              style={{
                width: '80%',
                height: '80%',
                borderRadius: 80,
              }}
            />
          </View>
          <View
            style={{
              width: '50%',
              height: 200,
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignContent: 'center',
            }}>
            <Text
              style={{
                width: '40%',
                height: 30,
                marginTop: 60,
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}>
              Tên{' '}
            </Text>
            <Text
              style={{
                width: '60%',
                justifyContent: 'center',
                paddingTop: 20,
                marginTop: 40,
                fontSize: 16,
              }}>
              Perovenus
            </Text>

            <Text
              style={{
                width: '40%',
                height: 30,
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}>
              Giới tính{' '}
            </Text>
            <Text
              style={{width: '60%', justifyContent: 'center', fontSize: 16}}>
              Nam
            </Text>

            <Text
              style={{
                width: '40%',
                height: 30,
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 16,
              }}>
              Ngày sinh{' '}
            </Text>
            <Text
              style={{width: '60%', justifyContent: 'center', fontSize: 16}}>
              02/05/2001
            </Text>
          </View>
        </View>
        {Editmodal(modalVisible, setModalVisible)}
        <View
          style={{
            backgroundColor: 'white',
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 10,
            borderTopWidth: 2,
          }}>
          <Ionicons name="mail" style={{fontSize: 40}} />
          <Text
            style={{
              width: '80%',
              paddingLeft: 20,
              height: 40,
              fontSize: 24,
              paddingTop: 4,
            }}>
            han.cao509@gmail.com
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 10,
            borderTopWidth: 2,
          }}>
          <FontAwesome name="mobile-phone" style={{fontSize: 40}} />
          <Text
            style={{
              width: '60%',
              paddingLeft: 40,
              height: 40,
              fontSize: 24,
              paddingTop: 4,
            }}>
            0349362424
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 10,
            borderTopWidth: 2,
          }}>
          <Ionicons name="ios-location-sharp" style={{fontSize: 40}} />
          <Text
            style={{
              width: '80%',
              paddingLeft: 20,
              height: 40,
              fontSize: 24,
              paddingTop: 4,
            }}>
            ktx khu A đại học quốc gia
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 10,
            borderTopWidth: 2,
          }}>
          <FontAwesome name="shopping-cart" style={{fontSize: 40}} />
          <Text
            style={{
              width: '60%',
              paddingLeft: 20,
              height: 40,
              fontSize: 24,
              paddingTop: 4,
            }}>
            Lịch sử giao dịch
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            height: 70,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 10,
            borderTopWidth: 2,
          }}>
          <FontAwesome name="lock" style={{fontSize: 40}} />
          <Text
            style={{
              width: '60%',
              paddingLeft: 20,
              height: 40,
              fontSize: 24,
              paddingTop: 4,
            }}>
            Đổi mật khẩu
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            height: 250,
            width: '100%',
            flexDirection: 'row',
            paddingTop: 15,
            paddingLeft: 10,
            borderTopWidth: 2,
          }}>
          <FontAwesome name="power-off" style={{fontSize: 40}} />
          <Text
            style={{
              width: '60%',
              paddingLeft: 20,
              height: 40,
              fontSize: 24,
              paddingTop: 4,
            }}>
            Đăng xuất
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '0x2F80ED',
    height: 70,
    width: '100%',
  },
});
export default UserInfo;
