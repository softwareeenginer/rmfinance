import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainStore } from "../stores/MainStore";
import { Button } from "native-base";

const Home = () => {

    const [modal, setModal] = React.useState(false);
    const [whichBalance, setWhichBalance] = React.useState(0); // 1-need, 2-enjoy, 3-saving, 4-investment

    return (
        <SafeAreaView style={styles.main}>
            {/* SET BALANCE MODAL */}
            <Modal
                visible={modal}
                transparent={true}
            >
                <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ height: '50%', width: '90%', backgroundColor: '#f4f4f4', alignItems: 'center', padding: 10, borderRadius: 10, elevation: 10 }}>
                        <TouchableOpacity
                            onPress={() => {
                                setModal(false)
                            }}
                            style={{ position: 'absolute', right: 20, top: 5 }}
                        >
                            <Text style={{ fontSize: 40, fontWeight: 'bold' }}>×</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>
                            {
                                whichBalance == 1 ? "İhtiyaç Hesap" :
                                    whichBalance == 2 ? "Şahsi Hesap" :
                                        whichBalance == 3 ? "Birikim Hesabı" :
                                            "Yatırım Hesabı"
                            }
                        </Text>
                        <Text style={{ marginTop: 5 }}>Para Eklemek mi istiyorsunuz yoksa çıkarmak mı?</Text>
                        <View style={{ flexDirection: 'row', width: '40%', justifyContent: 'space-between',marginTop:5 }}>
                            <Button style={{ backgroundColor: '#709655' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Eklemek</Text>
                            </Button>
                            <Button style={{ backgroundColor: '#c4302b' }}>
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Çıkarmak</Text>
                            </Button>
                        </View>

                    </View>
                </View>
            </Modal>

            {/* HEADER */}
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require('../assets/home/logo.png')}
                />
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
                        <Text style={styles.money}>{MainStore.needMoney}₺</Text>
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
                        <Text style={styles.money}>{MainStore.enjoyMoney}₺</Text>
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
                        <Text style={styles.money}>{MainStore.savingsMoney}₺</Text>
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
                        <Text style={styles.money}>{MainStore.investMoney}₺</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom_area}>
                    <View style={styles.flex_row}>
                        <Text style={styles.left_text}>Toplam birikiminiz</Text>
                        <Text style={styles.right_text_success}>: +400₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>Toplam Yatırımınız</Text>
                        <Text style={styles.right_text_success}>: +400₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>Toplam Giderler</Text>
                        <Text style={styles.right_text_fatal}>: -400₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>Şahsi Giderler</Text>
                        <Text style={styles.right_text_fatal}>: -400₺</Text>
                    </View>
                    <View style={styles.flex_row_v2}>
                        <Text style={styles.left_text}>İhtiyaç Giderler</Text>
                        <Text style={styles.right_text_fatal}>: -400₺</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;

const styles = StyleSheet.create({
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
        fontSize: 18
    },
    money: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-end'
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
    }
});