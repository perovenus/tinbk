import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  Text
} from 'react-native'

import Item from './Item';
// import filter from 'lodash.filter'
import FilterModal from './FilterModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { PortalProvider } from "@gorhom/portal";
import { Actions } from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';


const ProductList = (props) => {
  const [datalist, setDatalist] = useState([]);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const backAction = () => {
      Actions.pop();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  let temp_data = []
  useEffect(() => {
    const ref = firestore()
      .collection('Books')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          // console.log(documentSnapshot.id)
          if (props.search != undefined) {
            if (temp.bookName.toLowerCase().includes(props.data.toLowerCase())) {
              // console.log(temp)
              temp['id'] = documentSnapshot.id
              temp_data.push(temp)
            }
          }
          else if ((props.data == 'tham_khao' && temp.bookType == 'Tham khảo') || (props.data == 'bai_tap' && temp.bookType == 'Bài tập') || (props.data == 'giao_trinh' && temp.bookType == 'Giáo trình') || (props.data == 'manga' && temp.bookType == 'Truyện')) {
            // console.log(temp)
            temp['id'] = documentSnapshot.id
            temp_data.push(temp)
          }
        });
        if (isInitialRender) {
          setIsInitialRender(false);
          setDatalist(() => temp_data)
        }

      });
    // return () => ''
  }, [temp_data, isInitialRender])


  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const [query, setQuery] = useState(props.search ? props.data : '')



  const handleSearch = (text) => {
    setQuery(text)
  }
  const filter = async (data) => {
    // temp_data = []
    console.log(data);
    // console.log(datalist);
    // temp_data = []
    // for (let i of datalist){
    //   // console.log(i)
    //   if (i.price <= data.priceTo && 
    //     i.price >= data.priceFrom && 
    //     (i.bookRegion.includes(data.location) || data.location == '') &&
    //     (i.bookType.includes(data.bookType) || data.bookType == '') &&
    //     (i.bookStatus.includes(data.status) || data.status == '')){
    //     temp_data.push(i)
    //     console.log('alooooooooooooo')
    //   }
    // }
    // setDatalist(() => temp_data)


    temp_data = []
    await firestore()
      .collection('Books')
      .where('price', '<=', data.priceTo)
      .where('price', '>=', data.priceFrom)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          if ((temp.bookRegion.includes(data.location) || data.location == '') &&
            (temp.bookType.includes(data.bookType) || data.bookType == '') &&
            (temp.bookStatus.includes(data.status) || data.status == '')) {
            temp['id'] = documentSnapshot.id
            temp_data.push(temp)
            console.log(temp)
          }

        })
        console.log(temp_data)
        setDatalist(() => temp_data)


      })
  }
  const Search = async (data) => {
    console.log(data)
    // console.log(data)
    temp_data = []
    await firestore()
      .collection('Books')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          // console.log("research......")
          if (temp.bookName.toLowerCase().includes(data.toLowerCase()) && temp_data.some(el => el.id == documentSnapshot.id) == false) {
            // console.log(temp)
            console.log(temp_data.some(el => el.id == documentSnapshot.id))
            temp['id'] = documentSnapshot.id
            temp_data.push(temp)
          }
        })
        // console.log(temp_data)
        setDatalist(() => temp_data)


      })
  }
  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  }

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <SafeAreaView style={styles.productlistscreen}>
      <View style={styles.header}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          clearButtonMode='always'
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder='Bạn muốn tìm gì'
          style={styles.searchbar}
          onSubmitEditing={() => {
            Search(query)
          }}
        />

        <TouchableOpacity onPress={onOpen}>
          <FontAwesome5
            name='filter'
            size={20}
            color='#FFFFFF'
            style={styles.filterbutton} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {
          datalist.length == 0 ?
            <View>
              <Text>Không tìm thấy sản phẩm</Text>
            </View> :
            <FlatList
              data={datalist}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
        }

      </View>
      <View style={styles.menubar}>
      </View>
      <PortalProvider>
        <View style={styles.container1}>
          <FilterModal modalRef={modalRef} onClose={onClose} filter={filter} />
        </View>
      </PortalProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productlistscreen: {
    flex: 1,
  },
  header: {
    height: 65,
    display: 'flex',
    backgroundColor: 'rgba(47,128,237,0.75)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  searchbar: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginLeft: 15,
    paddingLeft: 25,
    width: '80%',
    borderRadius: 17,
    fontSize: 15,
  },
  filterbutton: {
    // marginLeft: 25,
    marginRight: '5%'
  },
  filtermodal: {
    justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  },
  categories: {
    height: '5%',
    width: '80%',
    backgroundColor: 'red'
  },
  container: {
    height: Dimensions.get('window').height - 65,
    backgroundColor: 'rgba(0,0,0,0.000000001)',
  },
  detail: {
    marginLeft: 20,
    width: '70%'
  },
  menubar: {
    height: 65,
    // backgroundColor: 'yellow'
  },
  container1: {
    flex: 1,
    backgroundColor: "#C9D6DF",
    alignItems: "center",
    justifyContent: "center",
  },

});

export default ProductList;
