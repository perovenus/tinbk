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
            if (temp.bookName.includes(props.data)) {
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

  const [query, setQuery] = useState(props.data)

  const handleSearch = (text) => {
    setQuery(text)
  }

  const Search = async(data) => {
    // console.log(data)
    temp_data = []
    await firestore()
      .collection('Books')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          let temp = documentSnapshot.data();
          // console.log("research......")
          if (temp.bookName.includes(data)) {
            // console.log(temp)
            temp['id'] = documentSnapshot.id
            temp_data.push(temp)
          }
        })
        
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
            size={30}
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
          <FilterModal modalRef={modalRef} onClose={onClose} />
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
    backgroundColor: 'rgba(47,128,237,0.75)',
    flexDirection: 'row',
    alignItems: 'center'
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
    marginLeft: 25
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
