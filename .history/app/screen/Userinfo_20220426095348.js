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
      {/* NAVBAR */}
      <View style={styles.appbar}>
        <View style={styles.appbar_left}>
          <Text style={styles.navbarText}>Cá nhân</Text>
        </View>
        <View style={styles.appbar_right}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FontAwesome name="edit" size={34} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {/*END NAVBAR*/}
      {/*CONTENT*/}
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image
              source={require('../assets/hutao.jpg')}
              style={styles.avatar}
            />
          </View>
          <View>
            <Text style={styles.name}>Nguyễn Văn A</Text>
            <Text style={styles.info}>
              <FontAwesome name="envelope" size={16} color="#000" />
            </Text>
            <Text style={styles.email}>
              <Ionicons name="md-call" size={16} color="#000" />
            </Text>
            <Text style={styles.email}>
              <Ionicons name="md-pin" size={16} color="#000" />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appbar: {
    backgroundColor: 'rgba(47,128,237,0.76)',
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
  },
  appbar_left: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 1,
    marginLeft: 16,
  },
  appbar_right: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 1,
    marginRight: 16,
  },
  navbarText: {
    color: 'white',
    fontSize: 21,
    fontWeight: '900',
    letterSpacing: 1.2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  avatar: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 1,
  },
});
export default UserInfo;
