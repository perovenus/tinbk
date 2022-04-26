import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

import Item from './Item';
// import filter from 'lodash.filter'
import FilterModal from './FilterModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { PortalProvider } from "@gorhom/portal";

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

const ProductList = () => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );
  
  const [query, setQuery] = useState('')

  const handleSearch = (text) => {
    setQuery(text)
  }

  const [showModal, setShowModal] = useState(false)

  const [modalVisible, setModalVisible] = useState(false);

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
        />
        
        <TouchableOpacity onPress={onOpen}>
          <FontAwesome5
            name='filter'
            size={30}
            color='#FFFFFF'
            style={styles.filterbutton}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList 
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
  filterbutton:{
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
    height: Dimensions.get('window').height - 154,
  },
  detail: {
    marginLeft: 20,
    width: '70%'
  },
  menubar: {
    height: 65,
    backgroundColor: 'yellow'
  },
  container1: {
    flex: 1,
    backgroundColor: "#C9D6DF",
    alignItems: "center",
    justifyContent: "center",
  },
  
});

export default ProductList;