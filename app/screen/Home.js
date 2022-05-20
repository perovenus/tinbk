import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,BackHandler, Alert 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ItemInHome from './ItemInHome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

const DATA = [
  {
    id: '1',
    name: 'Giải tích 1',
    price: '10000 VNĐ',
    location: 'KTX khu A',
  },
  {
    id: '2',
    name: 'Giải tích 2',
    price: '20000 VNĐ',
    location: 'KTX khu B',
  },
  {
    id: '3',
    name: 'Kinh tế chính trị Mác-Lênin',
    price: '30000 VNĐ',
    location: 'ĐHBK cơ sở 1',
  },
  {
    id: '4',
    name: 'Chủ nghĩa xã hội',
    price: '40000 VNĐ',
    location: 'ĐHBK cơ sở 2',
  },
  {
    id: '5',
    name: 'PPL',
    price: '50000 VNĐ',
    location: 'Quận 1',
  },
  {
    id: '6',
    name: 'Sách loz',
    price: '300000 VNĐ',
    location: 'KTX khu A',
  },
]

const Home = () => {
  let currUid = auth().currentUser.uid;

  const renderItem = ({ item }) => (
    <ItemInHome item={item} />
  );

  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    setQuery(text)
  }
  const [imageUrl, setImageUrl] = useState([]);
  // const func = async () => {
  //   console.log('aloooooooooooooooooooooooooo')
  //   const ref = storage().ref('hakyu.jpg');
  //   console.log('aloooooooooooooooooooooooooo111111111111111111111111111111')

  //   await ref.getDownloadURL().then(
  //     url => {
  //       console.log('aloooooooooooooooooooooooo22222222222222222222222222')

  //       setImageUrl(url);
  //     }
  //   ).catch((err) => {
  //     console.log("Api call error");
  //   })

  // }
  // func();
  var list_href = [];
  const func = async (name) => {
    await storage().ref('type_book/' + name).getDownloadURL().then(x => {
      list_href.push(x);
      if (name == 'manga.jpg'){
        setImageUrl(list_href);
      }
      console.log(list_href);
    }).catch(err => {
      console.log(err)
    });
  }
  // func('type_book/giao_trinh.jpg')
  const getBookTypeImage = () => {
    
      let listName = ['giao_trinh.jpg', 'bai_tap.jpg', 'tham_khao.jpg', 'manga.jpg'];
      console.log('aloooo')
      for (var i  = 0 ; i < 4 ; i ++ ){
        func(listName[i])
      }
      console.log(list_href)
      
      
  }
  useEffect(() => {
    if (imageUrl[0] == undefined){
      // getBookTypeImage();
      func('giao_trinh.jpg')
      func('bai_tap.jpg')
      func('tham_khao.jpg')
      func('manga.jpg')
    }
  }, [])
  // firestore()
  //   .collection('Users')
  //   // Filter results
  //   .get()
  //   .then(querySnapshot => {
  //     /* ... */
  //     console.log(querySnapshot.docs)
  //     querySnapshot.forEach(documentSnapshot => {
  //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //     });
  //   });

  // firestore()
  // .collection('Users')
  // .add({
  //   name: 'Ada Lovelace',
  //   age: 30,
  // })
  // .then(() => {
  //   console.log('User added!');
  // });
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
        />
      </View>
      <View style={styles.body}>
        <View style={styles.appName}>
          <Text style={styles.appname}>tinBK</Text>
        </View>

        <View style={styles.category}>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image
                source={{ uri: imageUrl[0] }}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Giáo trình</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image
                source={{ uri: imageUrl[1] }}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Bài tập</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image
                source={{ uri: imageUrl[2] }}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Tham khảo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image
                source={{ uri: imageUrl[3] }}
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
            <TouchableOpacity>
              <View style={styles.allProduct}>
                <Text style={[styles.typename, { fontSize: 15 }]}>Tất cả</Text>
                <FontAwesome5 name='angle-right' size={24} color='#000000' />
              </View>
            </TouchableOpacity>
          </View>
          <View styles={styles.productlistContainer}>
            <FlatList
              numColumns={2}
              data={DATA}
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
    height: 90,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  booktype: {
    height: 85,
    width: 80,
  },
  categoryImages: {
    width: 60,
    height: 68,
    alignSelf: 'center'
  },
  typename: {
    fontSize: 14,
    fontWeight: '600',
    color: '#303030',
    alignSelf: 'center'
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
    paddingTop: 10,
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