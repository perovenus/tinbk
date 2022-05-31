import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions, BackHandler, Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ItemInHome from './ItemInHome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';

const Home = () => {
  const gotoProductList = (type) => {
    Actions.ProductList(type)
  }
  let temp_data = []
  const [datalist, setDatalist] = useState([]);
  const renderItem = ({ item }) => (
    <ItemInHome item={item} />
  );
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    setQuery(text)
  }
  const showToastErr = message => {
    Toast.show({
      type: 'error',
      text1: message,
    });
  };
  useEffect(() => {
    const ref = firestore()
      .collection('Books')
      .limit(6)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          // console.log(documentSnapshot.id)
          temp['id'] = documentSnapshot.id
          temp_data.push(temp)
        });

        if (isInitialRender) {
          setIsInitialRender(false);
          setDatalist(() => temp_data)
        }
      });
    // return () => temp_data
  }, [temp_data, isInitialRender])
  console.log('aloooo')

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Bạn có muốn thoát ứng dụng", [
        {
          text: "Không",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Có", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={styles.homeScreen}>

      <View style={styles.header}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          clearButtonMode='always'
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder='Tìm kiếm...'
          style={styles.searchbar}
          onSubmitEditing={() =>{
            if (query == ''){
              showToastErr("Vui lòng nhập ít nhất một ký tự !!")
            }
            else {
              gotoProductList({
                'data': query,
                'search': true
              })
            }
          } 
          }
        />
      </View>
      <View style={styles.body}>
        <View style={styles.appName}>
          <Text style={styles.appname}>tinBK</Text>
        </View>

        <View style={styles.category}>
          <TouchableOpacity
            onPress={() => gotoProductList('giao_trinh')}
            style={styles.booktype}>
            <View>
              <Image
                source={require('../assets/giao_trinh.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Giáo trình</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => gotoProductList('bai_tap')}
            style={styles.booktype}>
            <View>
              <Image
                source={require('../assets/bai_tap.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Bài tập</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => gotoProductList('tham_khao')}
            style={styles.booktype}>
            <View>
              <Image
                source={require('../assets/tham_khao.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Tham khảo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => gotoProductList('manga')}
            style={styles.booktype}>
            <View>
              <Image
                source={require('../assets/manga.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Truyện</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.productlist}>
          <View style={styles.productlistHeader}>
            <Text style={[styles.typename, { fontSize: 15 }]}>Sản phẩm mới</Text>
            <TouchableOpacity
              onPress={() => gotoProductList({
                'data': '',
                'search': true
              })
              }>
              <View style={styles.allProduct}>
                <Text style={[styles.typename, { fontSize: 15 }]}>Tất cả</Text>
                <FontAwesome5 name='angle-right' size={24} color='#000000' />
              </View>
            </TouchableOpacity>
          </View>
          <View styles={styles.productlistContainer}>
            <FlatList
              numColumns={2}
              data={datalist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 65,
    backgroundColor: 'rgba(47,128,237,0.75)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbar: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 25,
    height: 45,
    width: '88%',
    borderRadius: 17,
    fontSize: 15,

  },
  body: {
    backgroundColor: '#EEEEEE'
  },
  appName: {
    backgroundColor: '#FFFFFF',
    height: 35,
    justifyContent: 'center'
  },
  appname: {
    color: '#2f80ed',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  category: {
    backgroundColor: '#FFFFFF',
    height: 120,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  booktype: {
    height: 95,
    width: 80,
    // marginTop: 5
  },
  categoryImages: {
    width: 60,
    height: 68,
    alignSelf: 'center',
    marginBottom: '5%'
  },
  typename: {
    fontSize: 14,
    fontWeight: '600',
    color: '#303030',
    alignSelf: 'center',
    // marginTop: '3%'
  },
  productlist: {
    height: Dimensions.get('window').height - 335,
    marginTop: 5,
    backgroundColor: '#FFFFFF',
  },
  productlistHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    // paddingTop: 10,
    paddingHorizontal: 15,
  },
  allProduct: {
    flexDirection: 'row',
    width: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productlistContainer: {
    justifyContent: 'space-between',
  }
});
export default Home
