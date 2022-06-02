import React, { useState, useEffect } from 'react'
import {

	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,

} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Actions } from 'react-native-router-flux';


const RejectedNoti = ({notification}) => {
  const user = auth().currentUser

  const date = new Date()

  const today = String(date.getDate()).padStart(2, '0') + '/' 
            + String(date.getMonth() + 1).padStart(2, '0') + '/' 
            + date.getFullYear()

  const gotoPartnerInfoScreen =async (partnerInfo) => {
	  console.log(partnerInfo)
	let temp_data = await firestore().collection('Users').doc(partnerInfo.partner).get().then(async(doc) => {
		// console.log(doc.data())
		let temp_data = doc.data()
		// await Actions.partnerInfoScreen(await doc.data())
		return temp_data
	})
	console.log(temp_data)
	Actions.partnerInfoScreen(temp_data)
    // Actions.partnerInfoScreen(partnerInfo)
  }

  const gotoProductInfo = async (i) => {
	//   console.log(i)
	let temp_data = await firestore().collection('Books').doc(i.bookId).get().then(doc => {
		  console.log(doc.data())
		//   Actions.ProductScreen(doc.data())
		return doc.data()
	  })
    Actions.ProductScreen(temp_data)
  }

  if(notification.kind == 'buyer') {
    return(
      <>
        <Text style={{
          marginLeft: 25,
          color: 'black'
        }}>{notification.date == today ? 'Hôm nay' : notification.date}</Text>
        <View style={styles.ProcessingNotification}>
          <TouchableOpacity
            onPress={() => gotoProductInfo(notification)}
            style={styles.notifiProcessingImg}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../assets/red.png')} />
            <FontAwesome5 style={{ position: 'absolute' }} name='times-circle' size={18} color='white' solid />
          </TouchableOpacity>
          <Text style={styles.textContain}>
            {notification.partnerName} đã từ chối bán {notification.bookName} cho bạn với giá {notification.price} đ
          </Text>
        </View>
      </>
      
    )
  }
  return (
    <>
      <Text style={{
          marginLeft: 25,
          color: 'black'
        }}>{notification.date == today ? 'Hôm nay' : notification.date}</Text>
      <View style={styles.ProcessingNotification}>
        <TouchableOpacity
          onPress={() => gotoPartnerInfoScreen(notification)}
          style={styles.notifiProcessingImg}>
          <Image
            style={{ width: '100%', height: '100%' }}
            source={require('../assets/red.png')} />
          <FontAwesome5 style={{ position: 'absolute' }} name='times-circle' size={18} color='white' solid />
        </TouchableOpacity>
        <Text style={styles.textContain}>
          Bạn đã từ chối bán {notification.bookName} cho {notification.partnerName} với giá {notification.price} đ
        </Text>
      </View>
    </>
  )
}

export default RejectedNoti;

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 66,
		backgroundColor: 'rgba(47, 128, 237, 0.75)',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	startheader: {
		width: 200,
		paddingTop: 15,
		flexDirection: 'row',
	},
	endheader: {
		width: 50,
		marginRight: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	body: {
		width: '100%',
		backgroundColor: 'white',
		display: 'flex',
		height: Dimensions.get('window').height - 70 - 66,
	},
	footer: {
		width: '100%',
		height: 72,
		backgroundColor: 'white',
		flexDirection: 'row',
	},
	iconfooter: {
		height: 72,
		width: '25%',
		flexDirection: 'column',
		backgroundColor: 'white',
		textAlign: "center",
		backgroundColor: 'black'
	},
	iconfooterstyle: {
		color: '#757575',
		textAlign: "center",
		fontSize: 35,
	},
	iconStyle: {
		color: 'white',
		fontSize: 40,
		paddingLeft: 9
	},
	textfooter: {
		color: '#4D4D4D',
		fontWeight: 'bold',
		textAlign: 'center',
		frontFamily: 'inter',
	},
	imgfooter: {
		width: 35,
		height: 35,
		justifyContent: 'space-between',
		textAlign: "center",
		backgroundColor: 'black'
	},
	navbarText: {
		color: 'white',
		fontSize: 21,
		marginLeft: 32,
		fontWeight: '900',
		letterSpacing: 1.2
	},
	notifiProcessingImg: {
		width: 55,
		height: 55,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	ProcessingNotification: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#eeeeee',
		paddingVertical: 10,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		width: '88%',
		marginLeft: '6%',
		borderRadius: 10,
		marginBottom: 10
	},
	textContain: {
		width: '80%',
		fontSize: 18,
    color: 'black'
	},
	time: {
		marginTop: 20,
		marginBottom: 20,
		marginLeft: '6%'
	},
	AlertNotification: {
		display: 'flex',
		flexDirection: 'column',
		width: '88%',
		marginLeft: '6%',
		borderRadius: 10,
		marginBottom: 10,
		backgroundColor: '#eeeeee'
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		paddingVertical: 10,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
	},
	PaymentButton: {
		width: 120,
		height: 41,
		backgroundColor: '#4CAF50',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
	},
	PayColor: {
		backgroundColor: '#67D67F',
	},
	CancelColor: {
		backgroundColor: '#FF0000',
	},
	buttonlist: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 15
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
		zIndex: 2,
	},
	SellerInfomation: {
		width: '80%',
		height: 361,
		backgroundColor: "white",
		borderRadius: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	avatar: { // view co image
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: 24
	},
	sellerImg: {
		width: 120,
		height: 120,
		borderRadius: 1000
	},
	infoContainer: {
		width: '90%',
		marginTop: '10%',
		display: 'flex',
		height: 150,
		justifyContent: 'space-between'

	},
	infoElement: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	title: {
		color: 'black'
	},
	description: {
		color: 'black',
		alignContent: 'flex-start',
		width: '70%',
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 3,
		borderRadius: 10
	},
	closeModel: {
		position: 'absolute',
		right: 0,
		top: 10,
		height: 40,
		width: 40
	},
});