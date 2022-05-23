import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    Pressable,
    ScrollView,
    Button,
    Modal
} from 'react-native'

import { Actions } from 'react-native-router-flux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ModalProps } from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
export default function ProductScreen(item) {
    // const goToSignupScreen = () => {
    //     Actions.signupScreen()
    // }
    console.log(item)
    const ProductInfo = {
        'name' : 'Thanh gươm diệt quỷ chap 3345',
        'price' : '30000',
        'status' : 'Like new (99.9%)',
        'seller' : 'Nguyễn Đăng Hải',
        'phone' : '0836585244',
        'address' : 'tòa nhà A20 KTX khu A',
        'imagelist' : [require('../assets/t1.jpg')],
        'sellerAvatar' : require('../assets/jerry.png')
    }
    // const goToGetOTPScreen = () => {
    //     Actions.getOTPScreen()
    // }
    // const [isModalVisible, setModalVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [payStatus, setPayStatus] = useState(false);
    const [number, onChangeNumber] = React.useState(null);
    const [notificationPayment, setNotification] = useState(false);
    const [imageActive, setimageActive] = useState(0);
    const [cancelModel, setCancelModel] = useState(false);
    const [PaymentConfirm, setPaymentConfirm] = useState(false);

    const onChangeSlide = (nativeEvent)  =>{
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive){
                setimageActive(slide);
            }
        }
    }
    const goToPreviousScreen = () =>{
        Actions.pop();
        return true;
    }
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/Product-Background.png')}>
            <View style={styles.NavigationTop}>
                <TouchableOpacity 
                    style={styles.angleleft}
                    onPress={goToPreviousScreen}
                >
                    <FontAwesome5 name='angle-left' size={34} color='white' />
                </TouchableOpacity>

            </View>
            {/* Modal tra gia */}
            <View
            styles = {
                {
                    
                }
            }>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: '100%',
                        height: '100%',
                        // position: 'absolute',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => setModalVisible(false)}>
                    
                    <View
                    onStartShouldSetResponder={(event) => true}
                    onTouchEnd={(e) => {
                      e.stopPropagation();
                    }}
                    style={styles.centeredView}>
                        
                        <View style={styles.modalView}>
                            <Text style={styles.initPrice}>Giá khởi điểm:<Text style={{color: 'red'}}> {item.price} VNĐ</Text></Text>
                            <Text style={styles.modalText}>Nhập giá bạn yêu cầu :</Text>
                            <View style={styles.inputcontainer}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChangeNumber}
                                    value={number}
                                    placeholder="VD : 20000"
                                    keyboardType="numeric" />
                                <Text>VNĐ</Text>
                            </View>

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    setPayStatus(!payStatus);
                                    setNotification(!notificationPayment);
                                }}
                            >
                                <Text style={styles.textStyle}>Gửi yêu cầu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </TouchableOpacity>
                    
                    
                </Modal>
            </View>
            {/* Model huy dang ky */}
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={cancelModel}
                    onRequestClose={() => {
                        setCancelModel(!cancelModel);
                    }}>
                    <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: '100%',
                        height: '100%',
                        // position: 'absolute',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => setCancelModel(false)}>
                        <View
                        onStartShouldSetResponder={(event) => true}
                        onTouchEnd={(e) => {
                          e.stopPropagation();
                        }}
                        style={styles.centeredView}>
                        <View style={[styles.modalView, {display: 'flex',}]}>
                            <Text style={{
                                fontSize: 20,
                                marginTop: '15%',
                                marginBottom: 20,
                                textAlign: 'center',
                            }}>Bạn có chắc muốn hủy đăng ký không ?</Text>
                            <View style={[styles.ButtonBlock, {marginTop: 0}]}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, styles.CancelColor]}
                                onPress={() => {
                                    setCancelModel(!cancelModel);
                                    setPayStatus(false);
                                }}
                            >
                                <Text style={styles.textStyle}>Có</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, styles.DealColor]}
                                onPress={() => {
                                    setCancelModel(!cancelModel);
                                }}
                            >
                                <Text style={styles.textStyle}>Không</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>     
                    
                </Modal>
            </View>
            {/* model dang ky mua */}
            <View
            >
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={PaymentConfirm}
                    onRequestClose={() => {
                        setPaymentConfirm(!PaymentConfirm);
                    }}
                >       
                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: '100%',
                        height: '100%',
                        // position: 'absolute',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => setPaymentConfirm(false)}>
                        <View
                        onStartShouldSetResponder={(event) => true}
                        onTouchEnd={(e) => {
                          e.stopPropagation();
                        }}
                        style={styles.centeredView}>
                        <View style={[styles.modalView, {display: 'flex',}]}>
                            <Text style={{
                                fontSize: 20,
                                marginTop: '15%',
                                marginBottom: 20,
                                textAlign: 'center'
                            }}>Bạn có chắc muốn đăng ký mua sản phẩm không ?</Text>
                            <View style={[styles.ButtonBlock, {marginTop: 0}]}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, styles.DealColor]}
                                onPress={() => {
                                    setPaymentConfirm(!PaymentConfirm);
                                    setPayStatus(true);
                                }}
                            >
                                <Text style={styles.textStyle}>Có</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose, styles.CancelColor]}
                                onPress={() => {
                                    setPaymentConfirm(!PaymentConfirm);
                                }}
                            >
                                <Text style={styles.textStyle}>Không</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                        </TouchableOpacity>      
                    
                </Modal>
            </View>











            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={notificationPayment}
                    onRequestClose={() => {
                        setNotification(!notificationPayment);
                    }}
                >         

                <TouchableOpacity
                    activeOpacity={1}
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: '100%',
                        height: '100%',
                        // position: 'absolute',
                        zIndex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={() => setNotification(false)}>
                        <View
                        onStartShouldSetResponder={(event) => true}
                        onTouchEnd={(e) => {
                          e.stopPropagation();
                        }}
                        style={styles.centeredView}>
                        <View style={[styles.modalView, {display: 'flex',}]}>
                            <Text style={{
                                fontSize: 20,
                                marginTop: '15%',
                                marginBottom: 20
                            }}>Đăng ký thành công !!!</Text>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setNotification(!notificationPayment)}
                            >
                                <Text style={styles.textStyle}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </TouchableOpacity>
                    
                </Modal>
            </View>




            <ScrollView
                style={styles.scrollStyle}>
                <View style={styles.imageView}>
                    <ScrollView 
                    onScroll={({nativeEvent}) => {onChangeSlide(nativeEvent)}}
                    showsHorizontalScrollIndicator= {false}
                    horizontal 
                    
                    pagingEnabled>
                        {
                            // ProductInfo['imagelist'].map((image) => (
                            // <Image
                            //     style={styles.mangastyle}
                            //     source={image} />
                            // ))
                            <Image
                                style={styles.mangastyle}
                                source={{uri: item.image}} />
                        }
                       
                    </ScrollView>
                </View>
                <View style={styles.radioList}>
                    {
                        Array.from({length:ProductInfo['imagelist'].length},(v,k)=>k).map((number) => (
                        <RadioButton
                            status={imageActive == number? 'checked' : 'unchecked'}
                            color='black'/>
                        ))
                    }
                </View>
                <View style={styles.ProductInfoBlock}>
                    <Text style={styles.ProductTitle}>
                        {item.bookName}
                    </Text>
                    <Text style={styles.ProductPrice}>
                        Giá : {item.price} VNĐ
                    </Text>
                    <Text style={styles.ProductStatus}>
                        Tình trạng : {item.bookStatus}
                    </Text>
                </View>
                <View style={styles.line}></View>


                <View style={styles.SellerInfoBlock}>
                    <View style={styles.avatar}>
                        <Image
                            style={styles.sellerImg}
                            source={ProductInfo['sellerAvatar']} />
                    </View>

                    <View style={styles.SellerInfo}>
                        <Text style={{ color: 'black' }}>Chủ sở hữu : {item.seller}</Text>
                        <Text style={{ color: 'black' }}>Số điện thoại : {ProductInfo['phone']}</Text>
                        <Text style={{ color: 'black' }}>Địa chỉ giao dịch : {ProductInfo['address']}</Text>
                    </View>
                </View>
                <View style={styles.line}></View>


                <View style={styles.ButtonBlock}>
                    
                    {
                        !payStatus &&
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={[styles.PaymentButton, styles.DealColor]}>
                            <Text style={{ color: 'white', }}>Trả giá</Text>
                        </View>
                        </TouchableOpacity>
                    }
                    {
                        !payStatus &&
                        <TouchableOpacity onPress={() => {
                            setPaymentConfirm(true);
                            }}>
                        <View style={[styles.PaymentButton, styles.PayColor]}>
                            <Text style={{ color: 'white', }}>Đăng ký mua</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    {
                        payStatus &&
                        <TouchableOpacity onPress={
                            () => {
                                
                                setCancelModel(true);
                                }}>
                        <View style={[styles.PaymentButton, styles.CancelColor]}>
                            <Text style={{ color: 'white', }}>Hủy đăng ký</Text>
                        </View>
                    </TouchableOpacity>
                    }
                    
                </View>
            </ScrollView>
            {/* <View style={styles.NavigationBotton}> */}
                {/* <TouchableOpacity>
                    <View style={styles.Navigationbtn}>
                        <FontAwesome5 name='home' size={24} color='#757575' />
                        <Text style={styles.Navtext}>Trang chủ</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Navigationbtn}>
                        <FontAwesome5 name='plus' size={24} color='#757575' />
                        <Text>Đăng bán</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Navigationbtn}>
                        <FontAwesome5 name='bell' size={24} color='#757575' solid />
                        <Text>Thông báo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.Navigationbtn}>
                        <FontAwesome5 name='user' size={24} color='#757575' solid />
                        <Text>Cá nhân</Text>
                    </View>
                </TouchableOpacity> */}

            {/* </View> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    mangastyle: {
        marginTop: 80,
        width: 224,
        height: 331,
        marginLeft: (Dimensions.get('window').width - 224) / 2,
        marginRight: (Dimensions.get('window').width - 224) / 2,
    },
    scrollStyle: {
        display: 'flex',
        width: '100%',
    },
    imageView: {
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    ProductInfoBlock: {
        display: 'flex',
        width: '90%',
        marginLeft: '5%'
    },
    ProductTitle: {
        color: '#000',
        fontSize: 24,
        marginTop: 50
    },
    ProductPrice: {
        marginTop: 10,
        color: 'black',
        fontSize: 14
    },
    input: {
        height: 40,
        width: '50%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    ProductStatus: {
        color: 'black',
        marginTop: 5,
        fontSize: 14
    },
    line: {
        marginTop: 20,
        width: '92%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginLeft: '4%'
    },
    SellerInfoBlock: {
        display: 'flex',
        width: '90%',
        marginLeft: '5%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    sellerImg: {
        width: 62,
        height: 62,
        borderRadius: 50
    },
    avatar: { // view co image
        flex: 3,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    SellerInfo: {
        flex: 7,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        color: '#000',
    },
    ButtonBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginLeft: '5%',
        marginTop: 40,
        marginBottom: 30
    },
    PaymentButton: {
        width: 140,
        height: 50,
        backgroundColor: '#4CAF50',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    DealColor : {
        backgroundColor: '#4CAF50',
    },
    PayColor : {
        backgroundColor: '#2F80ED',
    },
    CancelColor: {
        backgroundColor: '#C52929',
    },
    // NavigationBotton: {
    //     height: 72,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-around',
    //     width: '100%',
    //     // borderTopWidth: 1,
    //     // borderTopColor: '#D7CFCF'
    // },
    Navigationbtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Navtext: {
        fontSize: 12
    },
    NavigationTop: {
        height: 69,
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        opacity: 1
    },
    angleleft: {
        marginLeft: 20,
        marginTop: 20
    },
    centeredView: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        // position: 'absolute',
        width: '100%',
        height: 174,
    },
    modalView: {
        width: '80%',
        height: '100%',
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
        elevation: 5,
    },
    button: {
        borderRadius: 5,
        width : 124,
        height : 42,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 5,
        textAlign: "center",
        fontSize: 16,
        color: 'black'
    },
    initPrice: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        marginTop: 10
    },
    inputcontainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '10%',
        alignItems: 'center'
    },
    radioList : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }
})