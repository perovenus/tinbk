import React, { useState } from 'react'
import {
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	Modal
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';


const Notification = () => {
	var listData = [
		{
			id: 5,
			type: 'time',
			time: 'Hôm nay',
			status: 5
		},
		{
			id: 3,
			author: "anh da đen",
			price: "99.000 VNĐ",
			book_name: "Cách uống nước",
			type: 'notification',
			status: 2
		},
		{
			id: 2,
			author: "Khánh pờ rồ",
			book_name: "Vui vẻ cùng PPL",

			type: 'notification',
			price: "30.000 VNĐ",
			status: 3
		}
		, {
			id: 1,
			author: "Hải dúi",
			book_name: "Sách giải tỏa căng thẳng",
			price: "0.000 VNĐ",
			type: 'notification',
			status: 0
		},
		{
			id: 4,
			author: "Hải dúi",
			book_name: "Sách giải tỏa căng thẳng",
			price: "0.000 VNĐ",
			type: 'notification',
			status: 1
		},
		{
			id: 5,
			type: 'time',
			time: 'Hôm nay',
			status: 5
		},
		{
			id: 3,
			author: "anh da vàng",
			price: "99.000 VNĐ",
			book_name: "Cách uống nước",
			type: 'notification',
			status: 2
		},
	]
	const [modalVisible, setModalVisible] = useState(false);
	var newstatus = {};
	for (var i = 0; i < listData.length; i++) {
		newstatus[listData[i]['id']] = listData[i]['status'];

	}
	const [listStatus, setListStatus] = useState(newstatus);
	const handleClick = (idx, value) => {
		let news = {
			...listStatus
		}
		news[idx] = value;
		setListStatus(news);
	}
	return (
		<SafeAreaView>

			<View style={styles.header} >


				<View style={styles.startheader}>
					<Text style={styles.navbarText}>Thông báo</Text>
				</View>


				<View style={styles.endheader}>
					<Feather name="more-vertical" style={styles.iconStyle} />
				</View>


			</View>



			<View>
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}
				>
					<TouchableOpacity
						style={{
							backgroundColor: 'rgba(0,0,0,0.5)',
							width: '100%',
							height: '100%',
							position: 'absolute',
							zIndex: 1
						}}>
					</TouchableOpacity>

					<View style={styles.centeredView}>
						<View style={styles.SellerInfomation}>
							<View style={styles.avatar}>
								<Image
									style={styles.sellerImg}
									source={require('../assets/jerry.png')} />
							</View>
							<TouchableOpacity
								style={styles.closeModel}
								onPress={() => { setModalVisible(!modalVisible) }}
							>
								<FontAwesome5 name='times' size={24} color='black' />
							</TouchableOpacity>
							<View style={styles.infoContainer}>
								<View style={styles.infoElement}>
									<Text style={styles.title}>Tên</Text>
									<Text style={styles.description}>Nguyễn Đăng Hải</Text>
								</View>
								<View style={styles.infoElement}>
									<Text style={styles.title}>Email</Text>
									<Text style={styles.description}>contact.danghai@gmail.com</Text>
								</View>
								<View style={styles.infoElement}>
									<Text style={styles.title}>Tên</Text>
									<Text style={styles.description}>0349366789</Text>
								</View>
								<View style={styles.infoElement}>
									<Text style={styles.title}>Địa chỉ</Text>
									<Text style={styles.description}>KTX Khu A, Dĩ An, Bình Dương, Việt Nam.</Text>
								</View>
							</View>
						</View>
					</View>
				</Modal>
			</View>




			<ScrollView style={styles.body}>
				{/* <View style={styles.time}>
					<Text>
						Hôm nay
					</Text>
				</View>

				<View style={styles.time}>
					<Text>
						Hôm qua
					</Text>

				</View>

				<View style={styles.time}>
					<Text>
						Hom kia
					</Text>
				</View> */}
				{
					listData.map((data) => (
						<View>
							{
								(listStatus[data.id] == "0") &&
								<View style={styles.AlertNotification}>
									<View style={styles.container}>
										<TouchableOpacity
											onPress={() => { setModalVisible(!modalVisible) }}
											style={styles.notifiProcessingImg}>
											<Image
												style={{ width: '100%', height: '100%' }}
												source={require('../assets/yellow.png')} />
											<FontAwesome5 style={{ position: 'absolute' }} name='bell' size={18} color='white' solid />
										</TouchableOpacity>

										<Text style={styles.textContain}>
											{data.author} muốn mua sản phẩm {data.book_name} với giá {data.price}. bạn có đồng ý không ?
										</Text>
									</View>
									<View style={styles.buttonlist}>
										<TouchableOpacity
											onPress={() => {
												handleClick(data.id, 1)
											}}>
											<View style={[styles.PaymentButton, styles.PayColor]}>
												<Text style={{ color: 'white', fontSize: 18, fontFamily: 'Nunito' }}>Đồng ý</Text>
											</View>
										</TouchableOpacity>
										<TouchableOpacity
											onPress={() => {
												handleClick(data.id, 2);
											}}
										>
											<View style={[styles.PaymentButton, styles.CancelColor]}>
												<Text style={{ color: 'white', fontSize: 18 }}>Từ chối</Text>
											</View>
										</TouchableOpacity>
									</View>

								</View>
							}
							{
								(listStatus[data.id] == "1") &&
								<View style={styles.ProcessingNotification}>
									<TouchableOpacity
										onPress={() => { setModalVisible(!modalVisible) }}
										style={styles.notifiProcessingImg}>
										<Image
											style={{ width: '100%', height: '100%' }}
											source={require('../assets/blue.png')} />
										<FontAwesome5 style={{ position: 'absolute' }} name='check-circle' size={18} color='white' solid />
									</TouchableOpacity>
									<Text style={styles.textContain}>
										Bạn đã đồng ý bán cho {data.author} sản phẩm {data.book_name} với giá {data.price}.
									</Text>
								</View>
							}
							{
								(listStatus[data.id] == "2") &&
								<View style={styles.ProcessingNotification}>
									<TouchableOpacity
										onPress={() => { setModalVisible(!modalVisible) }}
										style={styles.notifiProcessingImg}>
										<Image
											style={{ width: '100%', height: '100%' }}
											source={require('../assets/red.png')} />
										<FontAwesome5 style={{ position: 'absolute' }} name='times-circle' size={18} color='white' solid />
									</TouchableOpacity>
									<Text style={styles.textContain}>
										Bạn đã từ chối bán cho {data.author} sản phẩm {data.book_name} với giá {data.price}.
									</Text>
								</View>
							}
							{
								(listStatus[data.id] == "3") &&
								<View style={styles.ProcessingNotification}>
									<TouchableOpacity
										onPress={() => { setModalVisible(!modalVisible) }}
										style={styles.notifiProcessingImg}>
										<Image
											style={{ width: '100%', height: '100%' }}
											source={require('../assets/green.png')} />
										<FontAwesome5 style={{ position: 'absolute' }} name='calendar-minus' size={18} color='white' solid />
									</TouchableOpacity>
									<Text style={styles.textContain}>
										Bạn đã đăng ký mua sản phẩm {data.book_name} của {data.author} với giá {data.price}.
									</Text>
								</View>
							}
							{
								(data.type == 'time') &&
								<View style={styles.time}>
									<Text>
										{data.time}
									</Text>

								</View>
							}
						</View>
					))
				}

			</ScrollView>
		</SafeAreaView>
	)
}
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
		// borderRadius: 17.5,
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
		fontSize: 18
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
export default Notification