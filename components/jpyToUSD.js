import React, { useState, useEffect } from 'react';
import { ScrollView, ImageBackground, FlatList, Text, View, StyleSheet, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TouchableOpacity } from 'react-native-web';

const jpyToUSD = () => {
    const [num1, setNum1] = useState(1)
    const [num2, setNum2] = useState(0.009)
    const convert = (value) => { return (Math.floor(value * 0.009*1000)/1000) }
    const [history, setHistory] = useState([])
    const [viewingHis, setViewingHis] = useState(false)
    const [converted, setConverted] = useState(0)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // justifyContent: 'center',
            padding: 10,
            backgroundColor: 'rgba(255,255,255,.5)',
            // alignItems: 'center',
            // backgroundColor: 'grey',
        },
        convert_area: {
            // flexDirection: 'row',
            flex: 3,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10
            // alignItems: 'center',
        },
        box1: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            // backgroundColor: 'limegreen',
            // paddingRight: 10,
            //alignItems: 'center'
        },
        box2: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            // backgroundColor: 'pink',
            // paddingLeft: 10,
            //alignItems: 'center'
        },
        text: {
            color: 'white',
            // fontFamily: 'Times',
            fontSize: 24,
            textAlign: 'center',
            backgroundColor: "#000000c0",
        },
        button: {
            alignItems: "flex-start"
        }
    })

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        const newHistory = history.concat(
            {
                'time': Date.now(),
                'jpy': num1,
                'usd': num2,
            }
        )
        setHistory(newHistory)
        storeData(newHistory)
    }, [converted])

    

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@jpyToUSD', jsonValue)
        } catch (e) {
            console.dir(e)
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@jpyToUSD')
            let data = null
            if (jsonValue != null) {
                data = JSON.parse(jsonValue)
                setHistory(data)
            } else {
                setHistory([])
            }
        } catch (e) {
            console.dir(e)
        }
    }

    const clearHistory = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            console.dir(e)
        }
    }

    const renderHistory = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, backgroundColor: 'lightgrey', width: 50, textAlign: 'center' }}>{item.jpy}</Text>
                <Text style={{ fontSize: 14, width: 50, textAlign: 'center' }}>{item.usd}</Text>
                {/* <Button 
                    title='Close History'
                    onPress={() => setViewingHis(false)}
                /> */}
            </View>
        )
    }
    
    // function view1() {
    //     return(
            
    //     )
    // }

    let viewJPYEdit = (
        <ImageBackground source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg' }}
            resizeMode='cover' style={{ height: '100%', width: '100%', flex: 1 }}>
            <View style={styles.box1}>
                <Text style={styles.text}>
                    Japanese Yen
                </Text>
                <View style={{ flexDirection: 'row' }}>

                    <Text style={styles.text}>¥</Text>
                    <TextInput
                        style={{
                            width: '91%',
                            color: 'white',
                            // fontFamily: 'Times',
                            fontSize: 24,
                            textAlign: 'center',
                            backgroundColor: "#000000c0",
                        }}
                        placeholder="1"
                        onChangeText={text => setNum1(text)}
                    />
                </View>
            </View>
        </ImageBackground>
    )


    let viewUSD = (
        <ImageBackground source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' }}
            resizeMode='cover' style={{height: '100%', width: '100%', flex: 1 }}>
            <View style={styles.box2}>
                <Text style={styles.text}>
                    US Dollar
                </Text>
                <Text style={styles.text}>
                    ${num2}
                </Text>
            </View>
        </ImageBackground>
    )

    let historyView = (<View></View>)

    if (viewingHis) {

        historyView =
            <View>
                <FlatList
                    data={history.reverse()}
                    renderItem={renderHistory}
                    KeyExtractor={(item) => item.time}
                />
                <Button
                    title='Clear History'
                    onPress={() => {
                        clearHistory()
                        setHistory([])
                    }
                    }
                />
            </View>
    }


    return (
            
                < View style={styles.container} >
                    <View style={styles.convert_area}>
                        {viewJPYEdit}
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/35/35660.png' }}
                        />
                        {viewUSD}
                    </View>
                    <View style={{ flex: 2 }}>
                        <Button
                            title='Convert'
                            style={styles.button}
                            onPress={() => {setNum2(convert(num1))
                                setConverted(converted+1)
                            }}
                        />
                    </View>
                    <Button
                        title='Toggle history'
                        onPress={() => { setViewingHis(!viewingHis) }}
                        />
                    {historyView}
                </ View >
    )
}

export default jpyToUSD