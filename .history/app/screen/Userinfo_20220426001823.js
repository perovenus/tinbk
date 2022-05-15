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
      <View>
        <Text>Profile</Text>
      </View>
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