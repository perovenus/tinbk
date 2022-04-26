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
const UserInfo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.appbar}>
        <View style={styles.appbar_left}>
          <Text>Profile</Text>
        </View>
        <View style={styles.appbar_right}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesome name="edit" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {/*Kết thúc phần appbar */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'rgba(47,128,237,0.76)',
    height: 70,
    width: '100%',
    opacity: 0.76,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
  },
  appbar_left: {
    display: 'flex',
    justifyContent: 'center',
  },
  appbar_right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
export default UserInfo;
