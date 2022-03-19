import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import styles from './style'
const { width } = Dimensions.get('window')

export default class MovieHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>MOVIES</Text>
        </View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <View style={{ backgroundColor: "blue", flex: 1, width: width }}></View>
          <View style={{ backgroundColor: "red", flex: 1, width: width }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1, width: width }}></View>
        </ScrollView>
      </View>
    );
  }
}