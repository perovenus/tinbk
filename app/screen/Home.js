import React, {useState} from 'react'
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
    Dimensions
  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ItemInHome from './ItemInHome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

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

  const renderItem = ({ item }) => (
    <ItemInHome item={item} />
  );

  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    setQuery(text)
  }

   return (
      <SafeAreaView style={styles.homeScreen}>

        <View style ={styles.header}>
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
                source={require('../assets/hakyu.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
                />
              <Text style={styles.typename}>Giáo trình</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image 
                source={require('../assets/hakyu.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
                />
              <Text style={styles.typename}>Bài tập</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image 
                source={require('../assets/hakyu.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
                />
              <Text style={styles.typename}>Tham khảo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.booktype}>
            <View>
              <Image 
                source={require('../assets/hakyu.jpg')}
                style={styles.categoryImages}
                resizeMode='contain'
                />
              <Text style={styles.typename}>Truyện</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.productlist}>
          <View style={styles.productlistHeader}>
            <Text style={[styles.typename, {fontSize: 15}]}>Sản phẩm mới</Text>
            <TouchableOpacity>
              <View style={styles.allProduct}>
                <Text style={[styles.typename, {fontSize: 15}]}>Tất cả</Text>
                <FontAwesome5 name='angle-right' size={24} color='#000000'/>
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
    flex: 1
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
    height: Dimensions.get('window').height-185,
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
    height: Dimensions.get('window').height-225,
    justifyContent: 'space-between'
  }
});
export default Home