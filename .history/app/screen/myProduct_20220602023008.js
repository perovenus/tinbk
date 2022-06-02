import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  Text,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Actions} from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import MyProductItem from './myProductItem';

const MyProductScreen = props => {
  const [datalist, setDatalist] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const goBack = () => {
    Actions.pop();
  };
  useEffect(() => {
    const backAction = () => {
      Actions.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);
  const user = auth().currentUser;
  let temp_data = [];
  useEffect(() => {
    const ref = firestore()
      .collection('Books')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          if (temp.seller == user.uid) {
            temp['id'] = documentSnapshot.id;
            temp_data.push(temp);
          }
        });
        if (isInitialRender) {
          setIsInitialRender(false);
          setDatalist(() => temp_data);
        }
      });
    // return () => ''
  }, [temp_data, isInitialRender]);

  const renderItem = ({item}) => <MyProductItem item={item} />;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.productlistscreen}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}
          style={{
            marginLeft: '5%',
          }}>
          <FontAwesome5 name="angle-left" size={34} color="white" />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text
            style={{
              color: 'white',
              fontSize: 21,
              fontWeight: '900',
              letterSpacing: 0.5,
            }}>
            Sản phẩm của tôi
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        {datalist.length == 0 ? (
          <View>
            <Text>Không tìm thấy sản phẩm</Text>
          </View>
        ) : (
          <FlatList
            data={datalist}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      <View style={styles.menubar}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productlistscreen: {
    flex: 1,
  },
  title: {
    marginLeft: '5%',
  },
  header: {
    height: 65,
    backgroundColor: 'rgba(47,128,237,0.75)',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  searchbar: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginLeft: 15,
    paddingLeft: 25,
    width: '75%',
    borderRadius: 17,
    fontSize: 15,
  },
  filterbutton: {
    marginLeft: 25,
  },
  filtermodal: {
    justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  },
  categories: {
    height: '5%',
    width: '80%',
    backgroundColor: 'red',
  },
  container: {
    height: Dimensions.get('window').height - 65,
  },
  detail: {
    marginLeft: 20,
    width: '70%',
  },
  menubar: {
    height: 65,
    // backgroundColor: 'yellow'
  },
  container1: {
    flex: 1,
    backgroundColor: '#C9D6DF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  angleleft: {
    marginLeft: 20,
    marginTop: 20,
  },
});

export default MyProductScreen;
