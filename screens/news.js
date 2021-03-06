import React, { useState, useEffect } from 'react';
import { RefreshControl, SafeAreaView, StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground, FlatList, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-community/picker' //try to incooperate it
import { DefaultLayout } from '../components/screen_layout';
import { NewsCard } from '../components/component_templates';
import axios from 'axios';

function news_screen({ navigation }) {
    return (
        <DefaultLayout>
            <News />
        </DefaultLayout>
    )
}

const News = () => {
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('544289bbd7d642b78ae1bdc4a6d78cce');

    const [isRefresh, setIsRefresh] = useState(false)
    const [newsLs, setNewsLs] = useState([])

    // const refreshIcon = () => {
    //     if (isRefresh) {
    //         return (<Image source={require('../assets/refresh.gif')} />)
    //     }
    //     else {
    //         return (<Image source={require('../assets/refresh.png')} />)
    //     }
    // }

    useEffect(() => {
        getNews()
    }, [isRefresh])

    const renderNews = ({ item }) => {
        return (
            <NewsCard link={item['url']} image={item['urlToImage']}>
                <Text style={{ paddingVertical: 5, paddingHorizontal: 10, fontSize: 16, color: 'white', backgroundColor: 'rgba(0,0,0,.5)' }}>{item['title']}</Text>
            </NewsCard>
        )
    }


    const getNews = async () => {
        let result = { data: [] }
        result = await axios.post("https://converter-game.herokuapp.com/news",
            { size: 50, category: 'business' })
        setNewsLs(result.data)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: 'grey', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 40 }}>News</Text>
                <TouchableOpacity
                    onPress={() => {
                        setIsRefresh(!isRefresh) //Better logic?
                    }}
                >
                    <Image
                        source={require('../assets/refresh.png')}
                        style={{ height: 30, width: 30 }}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={newsLs}
                renderItem={renderNews}
                style={{ paddingHorizontal: 10 }}
            />
        </SafeAreaView>
    )
}

export default news_screen