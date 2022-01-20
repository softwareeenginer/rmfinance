import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainStore } from "../stores/MainStore";
import { Button, Input, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {


    const [modal, setModal] = React.useState(false);
    const [modalFirst, setModalFirst] = React.useState(false);
    const [whichBalance, setWhichBalance] = React.useState(0); // 1-need, 2-enjoy, 3-saving, 4-investment
    const [addSubtract, setAddSubtract] = React.useState(2); // 1-add, 2-substract
    const [money, setMoney] = React.useState(0);

    // --- BALANCES --- //
    const [need, setNeed] = React.useState(MainStore.needMoney);
    const [enjoy, setEnjoy] = React.useState(MainStore.enjoyMoney);
    const [savings, setSavings] = React.useState(MainStore.savingsMoney);
    const [invest, setInvest] = React.useState(MainStore.investMoney);
    const [needGoes, setNeedGoes] = React.useState(MainStore.needGoes);
    const [enjoyGoes, setEnjoyGoes] = React.useState(MainStore.enjoyGoes);

    // --- FIRST SETTINGS --- ///
    const setFirstBalance = () => {
        MainStore.setEnjoyMoney(enjoy)
        MainStore.setNeedMoney(need)
        MainStore.setSavingsMoney(savings)
        MainStore.setInvestMoney(invest)
        MainStore.setNeedGoes(needGoes)
        MainStore.setEnjoyGoes(enjoyGoes)
    }

    // --- ADD SUBSTRACT FUNCTION --- //
    const addSubtractf = () => {
        console.log(typeof money)
        //money,whichBalance,addSubtract
        switch (whichBalance) {
            case 1: {
                if (addSubtract == 1) {
                    MainStore.setNeedMoney(MainStore.needMoney + money)
                } else {
                    MainStore.setNeedMoney(MainStore.needMoney - money)
                    MainStore.setNeedGoes(MainStore.needGoes + money)
                }
                break;
            }
            case 2: {
                if (addSubtract == 1) {
                    MainStore.setEnjoyMoney(MainStore.enjoyMoney + money)
                } else {
                    MainStore.setEnjoyMoney(MainStore.enjoyMoney - money)
                    MainStore.setEnjoyGoes(MainStore.enjoyGoes + money)
                }
                break;
            }
            case 3: {
                if (addSubtract == 1) {
                    MainStore.setSavingsMoney(MainStore.savingsMoney + money)
                } else {
                    MainStore.setSavingsMoney(MainStore.savingsMoney - money)
                }
                break;
            }
            case 4: {
                if (addSubtract == 1) {
                    MainStore.setInvestMoney(MainStore.investMoney + money)
                } else {
                    MainStore.setInvestMoney(MainStore.investMoney - money)
                }
                break;
            }
        }

    }

    // ----- SCORE ----- // 
    const total = (MainStore.investMoney + MainStore.savingsMoney + MainStore.needMoney + MainStore.enjoyMoney)

    return (
        <SafeAreaView style={styles.main}>
            {/* FIRST SETTINGS MODAL */}
            <Modal
                visible={modalFirst}
                transparent={true}
            >
                <View style={styles.modal_first}>
                    <View style={styles.modal_view_first}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalFirst(false)
                            }}
                            style={styles.x_touch_first}
                        >
                            <Text style={styles.x_text_first}>×</Text>
                        </TouchableOpacity>
                        <Text style={styles.title_first}>Tüm hesaplarınızın ilk durumunu giriniz.</Text>
                        <Text style={styles.title_first_warn}>UYARI! Önceden girilmiş verileri girmenize gerek yoktur!</Text>

                        {/* NEED AND ENJOY */}
                        <View style={styles.input_view_first}>
                            <Input
                                marginTop={5}
                                keyboardType="numeric"
                                marginRight={2.5}
                                width={'35%'}
                                backgroundColor={'#cb997e'}
                                placeholder="İhtiyaç Hesap"
                                placeholderTextColor={'white'}
                                borderRadius={10}
                                color={'white'}
                                onChangeText={(text: any) => {
                                    setNeed(parseFloat(text))
                                }}
                            />
                            <Input
                                marginTop={5}
                                keyboardType="numeric"
                                marginLeft={2.5}
                                width={'35%'}
                                backgroundColor={'#709655'}
                                placeholder="Şahsi Hesap"
                                placeholderTextColor={'white'}
                                borderRadius={10}
                                color={'white'}
                                onChangeText={(text: any) => {
                                    setEnjoy(parseFloat(text))
                                }}
                            />
                        </View>

                        {/* SAVINGS AND INVEST */}
                        <View style={styles.input_view_first}>
                            <Input
                                marginTop={5}
                                marginRight={2.5}
                                width={'35%'}
                                keyboardType="numeric"
                                backgroundColor={'#A5A58D'}
                                placeholder="Birikim Hesabı"
                                placeholderTextColor={'white'}
                                borderRadius={10}
                                color={'white'}
                                onChangeText={(text: any) => {
                                    setSavings(parseFloat(text))
                                }}
                            />
                            <Input
                                marginTop={5}
                                marginLeft={2.5}
                                width={'35%'}
                                keyboardType="numeric"
                                backgroundColor={'#f67290'}
                                placeholder="Yatırım Hesabı"
                                placeholderTextColor={'white'}
                                borderRadius={10}
                                color={'white'}
                                onChangeText={(text: any) => {
                                    setInvest(parseFloat(text))
                                }}
                            />
                        </View>

                        {/* DEFAULT GOES */}
                        <View style={styles.input_view_first}>
                            <Input
                                marginTop={5}
                                marginRight={2.5}
                                width={'35%'}
                                keyboardType="numeric"
                                backgroundColor={'#c4302b'}
                                placeholder="Önceki İhtiyaç Gider Top."
                                placeholderTextColor={'white'}
                                borderRadius={10}
                                color={'white'}
                                onChangeText={(text: any) => {
                                    setNeedGoes(parseFloat(text))
                                }}
                            />
                            <Input
                                marginTop={5}
                                marginLeft={2.5}
                                width={'35%'}
                                keyboardType="numeric"
                                backgroundColor={'#c4302b'}
                                placeholder="Önceki Şahsi Gider Top."
                                placeholderTextColor={'white'}
                                borderRadius={10}
                                color={'white'}
                                onChangeText={(text: any) => {
                                    setEnjoyGoes(parseFloat(text))
                                }}
                            />
                        </View>
                        <Button
                            onPress={() => {
                                setFirstBalance();
                                setModalFirst(false);
                            }}
                            style={styles.modal_complete_button}
                        >
                            <Text style={styles.modal_complete_text}>Hesapla</Text>
                        </Button>
                    </View>
                </View>
            </Modal>


            {/* SET BALANCE MODAL */}
            <Modal
                visible={modal}
                transparent={true}
            >
                <View style={styles.modal}>

                    <View style={styles.modal_view}>
                        <TouchableOpacity
                            onPress={() => {
                                setModal(false)
                                setAddSubtract(0)
                            }}
                            style={styles.x_touch}
                        >
                            <Text style={styles.x_text}>×</Text>
                        </TouchableOpacity>
                        <Text style={styles.which_balance}>
                            {
                                whichBalance == 1 ? "İhtiyaç Hesap" :
                                    whichBalance == 2 ? "Şahsi Hesap" :
                                        whichBalance == 3 ? "Birikim Hesabı" :
                                            "Yatırım Hesabı"
                            }
                        </Text>

                        {/* WHAT'S YOUR PREFER */}
                        <Text style={styles.whats_your_prefer}>Para Eklemek mi istiyorsunuz yoksa çıkarmak mı?</Text>
                        <View style={styles.modal_button_view}>
                            {/* ADD BALANCE */}
                            <Button
                                onPress={() => {
                                    setAddSubtract(1)
                                }}
                                style={{ backgroundColor: '#709655' }}
                            >
                                <Text style={styles.modal_button_text}>Eklemek</Text>
                            </Button>


                            {/* EXIST BALANCE */}
                            <Button
                                onPress={() => {
                                    setAddSubtract(2)
                                }}
                                style={{ backgroundColor: '#c4302b' }}
                            >
                                <Text style={styles.modal_button_text}>Çıkarmak</Text>
                            </Button>
                        </View>
                        {
                            addSubtract != 0 ?
                                <>
                                    <Input
                                        borderRadius={20}
                                        marginTop={3}
                                        width={20}
                                        keyboardType="numeric"
                                        color={'#000'}
                                        placeholderTextColor={'#808080'}
                                        textAlign={'center'}
                                        borderColor={addSubtract == 1 ? '#709655' : '#c4302b'}
                                        borderWidth={2}
                                        placeholder="Tutar"
                                        onChangeText={(text: any) => {
                                            setMoney(parseFloat(text))
                                        }}
                                    />
                                    <Button
                                        onPress={() => {
                                            addSubtractf()
                                            setModal(false)
                                        }}
                                        style={styles.modal_complete_button}
                                    >
                                        <Text style={styles.modal_complete_text}>Hesapla</Text>
                                    </Button>
                                </>
                                :
                                <></>
                        }
                    </View>
                </View>
            </Modal>

            {/* HEADER */}
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/home/logo.png')}
                />
                <TouchableOpacity
                    onPress={() => {
                        setModalFirst(true)
                    }}
                    style={styles.setting_touch}
                >
                    <Icon
                        as={AntDesign}
                        name='setting'
                    />
                </TouchableOpacity>
            </View>

            {/* GRAY LINE */}
            <View style={styles.gray_line} />
            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.money_general}>
                    {/* NEED ACCOUNT BOX */}
                    <TouchableOpacity
                        onPress={() => {
                            setModal(true)
                            setWhichBalance(1)
                        }}
                        style={[styles.box_view, { backgroundColor: '#cb997e' }]}
                    >
                        <Text style={styles.title}>İhtiyaç Hesap</Text>
                        <Text style={styles.money}>{MainStore.needMoney.toFixed(2)}₺</Text>
                    </TouchableOpacity>

                    {/* ENJOY ACCOUNT BOX */}
                    <TouchableOpacity
                        onPress={() => {
                            setModal(true)
                            setWhichBalance(2)
                        }}
                        style={[styles.box_view, { backgroundColor: '#eddcd2' }]}
                    >
                        <Text style={styles.title}>Şahsi Hesap</Text>
                        <Text style={styles.money}>{MainStore.enjoyMoney.toFixed(2)}₺</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.money_general}>
                    {/* SAVINGS ACCOUNT BOX */}
                    <TouchableOpacity
                        onPress={() => {
                            setModal(true)
                            setWhichBalance(3)
                        }}
                        style={[styles.box_view, { backgroundColor: '#A5A58D' }]}
                    >
                        <Text style={styles.title}>Birikim Hesabı</Text>
                        <Text style={styles.money}>{MainStore.savingsMoney.toFixed(2)}₺</Text>
                    </TouchableOpacity>

                    {/* INVEST ACCOUNT BOX */}
                    <TouchableOpacity
                        onPress={() => {
                            setModal(true)
                            setWhichBalance(4)
                        }}
                        style={[styles.box_view, { backgroundColor: '#f67290' }]}
                    >
                        <Text style={styles.title}>Yatırım Hesabı</Text>
                        <Text style={styles.money}>{MainStore.investMoney.toFixed(2)}₺</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom_area}>
                    <View style={styles.flex_row}>
                        <Text style={styles.left_text}>Toplam birikiminiz</Text>
                        <Text style={styles.right_text_success}>: +{MainStore.savingsMoney.toFixed(2)}₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>Toplam Yatırımınız</Text>
                        <Text style={styles.right_text_success}>: +{MainStore.investMoney.toFixed(2)}₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>Şahsi Giderler</Text>
                        <Text style={styles.right_text_fatal}>: -{MainStore.enjoyGoes.toFixed(2)}₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>İhtiyaç Giderler</Text>
                        <Text style={styles.right_text_fatal}>: -{MainStore.needGoes.toFixed(2)}₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>Toplam Giderler</Text>
                        <Text style={styles.right_text_fatal}>: -{MainStore.needGoes + MainStore.enjoyGoes}₺</Text>
                    </View>
                </View>
                <View style={styles.total_view}>
                    <Text style={styles.total_text}>Toplam Varlığınız</Text>
                    <View style={styles.total_shows_view}>
                        <Text style={styles.total}> {total.toFixed(2)} ₺</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;

const styles = StyleSheet.create({
    modal_first: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_view_first: {
        width: '90%',
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        paddingVertical: 50,
        borderRadius: 10,
        elevation: 10
    },
    x_touch_first: {
        position: 'absolute',
        right: 0,
        top: -10,
        padding: 15
    },
    x_text_first: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    title_first: { fontWeight: 'bold' },
    title_first_warn: { color: 'red' },
    input_view_first: { flexDirection: 'row' },
    modal: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal_view: {
        width: '90%',
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        paddingVertical: 50,
        borderRadius: 10,
        elevation: 10
    },
    x_touch: {
        position: 'absolute',
        right: 0,
        top: -10,
        padding: 15
    },
    x_text: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    which_balance: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    whats_your_prefer: {
        marginTop: 5,
        textAlign: 'center'
    },
    modal_button_view: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        marginTop: 5
    },
    modal_button_text: {
        color: 'white',
        fontWeight: 'bold'
    },
    modal_complete_button: {
        width: '50%',
        height: 50,
        marginTop: 20,
        backgroundColor: '#5a7b5b'
    },
    modal_complete_text: {
        fontWeight: 'bold',
        color: 'white'
    },
    main: {
        flexGrow: 1,
        backgroundColor: '#f4f4f4'
    },
    header: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 40,
        width: 40
    },
    setting_touch: {
        position: 'absolute',
        right: 10
    },
    gray_line: {
        height: 1,
        width: '100%',
        backgroundColor: '#c0c0c0'
    },
    scroll: { flexGrow: 1 },
    money_general: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginTop: 20
    },
    box_view: {
        height: 200,
        width: '45%',
        elevation: 6,
        borderRadius: 10,
        padding: 17.5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    money: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-end',
        color: 'white'
    },
    bottom_area: {
        margin: 20,
        marginTop: 30,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 10
    },
    flex_row: { flexDirection: 'row' },
    flex_row_v2: {
        flexDirection: 'row',
        marginTop: 5
    },
    left_text: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '80%'
    },
    right_text_fatal: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '20%',
        color: 'red'
    },
    right_text_success: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '20%',
        color: 'green'
    },
    total_view: { alignItems: 'center' },
    total_text: {
        fontWeight: 'bold',
        color: '#808080',
        fontSize: 22
    },
    total_shows_view: {
        borderRadius: 100,
        backgroundColor: '#427330',
        width: 120,
        height: 120,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    total: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 22
    }
});