import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, } from 'react-native';
import { createBottomTabNavigator, BottomTabBar, } from '@react-navigation/bottom-tabs';
// import LinearGradient from 'react-native-linear-gradient';

import currency_converter_screen from '../screens/currency_converter.js'
import about_screen from '../screens/about.js';
import currency_converter_history_screen from '../screens/currency_converter_history.js';
import home_screen from '../screens/homescreen.js';
import start_view_screen from '../screens/start_view_screen.js';
import test_screen from '../screens/test.js';
import news_screen from '../screens/news.js';

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    elevation: 0,
                    backgroundColor: 'white',
                    borderTopColor: 'transparent',
                    height: 50
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={home_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: "bold" }}
                            >HOME</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Converter"
                component={currency_converter_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/interchange.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: "bold" }}
                            >CONVERT</Text>
                        </View>
                    )
                }}
            />
            {/* <Tab.Screen
                name="Test"
                component={test_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/interchange.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: "bold" }}
                            >TEST</Text>
                        </View>
                    )
                }}
            /> */}
            <Tab.Screen
                name="History"
                component={currency_converter_history_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/history.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: "bold" }}
                            >HISTORY</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="News"
                component={news_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/news.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: "bold" }}
                            >NEWS</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Game"
                component={start_view_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/game.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: 'bold' }}
                            >GAME</Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={about_screen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/info.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#52d8f2' : 'black',
                                }}
                            />
                            <Text
                                style={{ color: focused ? '#52d8f2' : 'black', fontSize: 8, fontWeight: "bold" }}
                            >ABOUT</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs