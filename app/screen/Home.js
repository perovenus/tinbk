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
  Dimensions, BackHandler, Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ItemInHome from './ItemInHome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


const Home = () => {
    let currUid = auth().currentUser.uid;
    let temp_data = []
    const [datalist, setDatalist] = useState([]);
    const renderItem = ({ item }) => (
      <ItemInHome item={item} />
    );
  
    const [query, setQuery] = useState('')
  
    const handleSearch = (text) => {
      setQuery(text)
    }
    const [imageUrl, setImageUrl] = useState([]);
    let list_href = [];
    const func = async (name) => {
      await storage().ref('type_book/' + name).getDownloadURL().then(x => {
        list_href.push(x);
  
        return () => { }
      }).catch(err => {
      });
    }
    // useEffect(async () => {
    //   await func('giao_trinh.jpg')
    //   await func('bai_tap.jpg')
    //   await func('tham_khao.jpg')
    //   await func('manga.jpg')
    //   await setImageUrl(list_href);
    // }, [])
  
    useEffect(() => {
      firestore()
      .collection('Books')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          temp_data.push(temp)
        });
  
        if (datalist.length == 0){
          setDatalist(temp_data)
        }
      });
      return () => temp_data
    })
  
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
                source={require('../assets/giao_trinh.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Giáo trình</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image
                source={require('../assets/bai_tap.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Bài tập</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image
                source={require('../assets/tham_khao.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
              />
              <Text style={styles.typename}>Tham khảo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
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