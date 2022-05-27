import React, { useState, useRef } from 'react'
import { 
  Dimensions,
  StyleSheet, 
  View, 
  TextInput, 
  Text,
  TouchableOpacity,
} from "react-native";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import CheckBox from '@react-native-community/checkbox';
import Toast from 'react-native-toast-message';

const { height } = Dimensions.get("screen");
const modalHeight = height * 0.75;

const FilterModal = ({modalRef, onClose, filter}) => {
  // Search('alooooo')
  const [newCheckbox, setNewCheckbox] = useState(false)
  const [likeNewCheckbox, setLikeNewCheckbox] = useState(false)
  const [oldCheckbox, setOldCheckbox] = useState(false)
  const showToastErr = message => {
    Toast.show({
      type: 'error',
      text1: message,
    });
  };
  const handleNewCheckbox = (newValue) => {
    if (newCheckbox == false) {
      setNewCheckbox(newValue)
      setLikeNewCheckbox(!newValue)
      setOldCheckbox(!newValue)
      setBookStatus(0)
    }
  }

  const handleLikeNewCheckbox = (newValue) => {
    if (likeNewCheckbox == false) {
      setNewCheckbox(!newValue)
      setLikeNewCheckbox(newValue)
      setOldCheckbox(!newValue)
      setBookStatus(1)
    }
  }
  
  const handleOldCheckBox = (newValue) => {
    if (oldCheckbox == false) {
      setNewCheckbox(!newValue)
      setLikeNewCheckbox(!newValue)
      setOldCheckbox(newValue)
      setBookStatus(2)
    }
  }

  const resetFilter = () => {
    setBookType('')
    setPriceFrom('')
    setPriceTo('')
    setBookStatus('')
    setNewCheckbox(false)
    setLikeNewCheckbox(false)
    setOldCheckbox(false)
    setLocation('')
    bookTypeDropdownRef.current.reset()
    locationDropdownRef.current.reset()
  }

  const bookTypeDropdownRef = useRef(null)
  const locationDropdownRef = useRef(null)

  const [bookType, setBookType] = useState('')
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [bookStatus, setBookStatus] = useState('')
  const [location, setLocation] = useState('')

  const dropdownIcon = () => {
    return(
      <FontAwesome5
        name='angle-down'
        size={20}
        color='#000000'
        style={{left: 10}}
      />
    )
  }

  const bookTypes = ['Giáo trình', 'Bài tập', 'Truyện', 'Tham khảo']
  const locations = ['ĐHBK cơ sở 1', 'ĐHBK cơ sở 2', 'KTX khu A', 'KTX khu B']

  return(
    <Portal>
      <Modalize modalStyle={styles.filtermodal} ref={modalRef} modalHeight={modalHeight}>
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome5 name='times' size={30} color='#000000'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetFilter}>
              <FontAwesome5 name='sync' size={28} color='#000000'/>
            </TouchableOpacity>
          </View>
          <View style={styles.body}>          
            <View style={styles.booktype}>
              <Text style={[styles.sectiontext,{flex: 2}]}>Loại sách</Text>
              <View style={[styles.dropdown, {flex: 3}]}>
                <SelectDropdown
                  ref={bookTypeDropdownRef}
                  data={bookTypes}
                  buttonStyle={styles.dropdownbutton}
                  buttonTextStyle={styles.dropdowntext}
                  dropdownStyle={styles.dropdown}
                  rowTextStyle={{
                    textAlign: 'left'
                  }}
                  defaultButtonText=' '
                  onSelect={(selectedItem, index) => {
                    setBookType(selectedItem)
                  }}
                  renderDropdownIcon={dropdownIcon}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                />
              </View> 
            </View>
            <Text style={styles.sectiontext}>Giá</Text>
            <View style={styles.priceselector}>
              <Text style={styles.textstyle}>Từ</Text>
              <TextInput 
                keyboardType='numeric'
                value={priceFrom}
                onChangeText={(newText) => setPriceFrom(newText)}
                style={styles.priceinput}/>
              <Text style={styles.textstyle}>Đến</Text>
              <TextInput
                keyboardType='numeric'
                value={priceTo}
                onChangeText={(newText) => setPriceTo(newText)}
                style={styles.priceinput}/>
              <Text style={styles.textstyle}>VNĐ</Text>
            </View>
            <View style={styles.status}>
              <Text style={styles.sectiontext}>Tình trạng</Text>
              <View style={styles.checkbox}>
                <CheckBox
                  tintColors={{true: '#2F80ED', false: '#B1B1B1'}}
                  disabled={false}
                  value={newCheckbox}
                  onValueChange={(newValue) => handleNewCheckbox(newValue)}
                />
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: newCheckbox ? '#2F80ED' : '#181725'
                }}>Sách mới</Text>
              </View>
              <View style={styles.checkbox}>
                <CheckBox
                  tintColors={{true: '#2F80ED', false: '#B1B1B1'}}
                  disabled={false}
                  value={likeNewCheckbox}
                  onValueChange={(newValue) => handleLikeNewCheckbox(newValue)}
                />
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: likeNewCheckbox ? '#2F80ED' : '#181725'
                }}>Sách 99%</Text>
              </View>
              <View style={styles.checkbox}>
                <CheckBox
                  tintColors={{true: '#2F80ED', false: '#B1B1B1'}}
                  disabled={false}
                  value={oldCheckbox}
                  onValueChange={(newValue) => handleOldCheckBox(newValue)}
                />
                <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: oldCheckbox ? '#2F80ED' : '#181725'
                }}>Sách cũ</Text>
              </View>
              <View style={styles.booktype}>
                <Text style={[styles.sectiontext,{flex: 2}]}>Khu vực</Text>
                <View style={{flex: 3}}>
                  <SelectDropdown
                    ref={locationDropdownRef}
                    data={locations}
                    buttonStyle={styles.dropdownbutton}
                    buttonTextStyle={styles.dropdowntext}
                    dropdownStyle={styles.dropdown}
                    rowTextStyle={{
                      textAlign: 'left'
                    }}
                    defaultButtonText=' '
                    onSelect={(selectedItem, index) => {
                      setLocation(selectedItem)
                    }}
                    renderDropdownIcon={dropdownIcon}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      return item
                    }}
                  />
                </View> 
              </View>
            </View>
            <TouchableOpacity onPress={()=>{
              if (parseInt(priceFrom) > parseInt(priceTo) && priceFrom != '' && priceTo != ''){
                showToastErr('Giá khởi điểm phải nhỏ hơn giá chốt')
              }
              else {
                let to = priceTo == '' ? 9999999999 : parseInt(priceTo);
                let from = priceFrom == '' ? 0 : parseInt(priceFrom);
                filter({
                  'bookType' : bookType,
                  'priceFrom' : from,
                  'priceTo' : to,
                  'location' : location,
                  'status' : newCheckbox ? 'Sách mới' : (likeNewCheckbox ? 'Sách 99%' : (oldCheckbox ? 'Sách cũ' : ''))
                })
                onClose()
              }
            }} style={styles.applybutton}>
              <View>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: 'bold',
                    color: '#F8F8F8'
                }}>Áp dụng</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </Modalize>
    </Portal>
  )
}

export default FilterModal

const styles = StyleSheet.create({
  filtermodal: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  content: {
    flex: 1,
    height: modalHeight,
    backgroundColor: "#F2F3F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    paddingHorizontal: 30,
    height: modalHeight-80,
    justifyContent: 'space-between',
  },
  booktype: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  sectiontext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181725',
  },
  dropdown: {
    borderRadius: 15,
  },
  dropdownbutton: {
    borderWidth: 1,
    borderColor: '#2F80ED',
    borderRadius: 15,
    
  },
  dropdowntext: {
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '600'
  },
  priceselector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceinput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.18)',
    width: '30%',
    height: 38,
    backgroundColor: '#FFFFFF',
    textAlign: 'center'
  },
  textstyle: {
    fontSize: 15,
    color: '#686868',
    fontWeight: '600'
  },
  status: {
    flexDirection: 'column'
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  applybutton: {
    marginTop: 20,
    width: 130,
    height: 53,
    backgroundColor: '#2f80ed',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});