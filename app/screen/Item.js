import React from 'react'

import {
  View,
  StyleSheet
} from 'react-native'

const Item = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>

      </View>
      <View styles={styles.details}>

      </View>
    </View> 
  )
}

export default Item;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    backgroundColor: 'red',
    marginBottom: 10
  },
  imagecontainer: {

  },
  details: {

  }
})