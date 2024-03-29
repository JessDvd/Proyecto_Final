import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './StackNavigation1';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator1() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{//Versiones anteriores tabBarOptions
                tabBarActiveTintColor: "#ff6600",//activeTintColor
                tabBarInactiveTintColor: "#060606",//inactiveTintColor
                tabBarShowIcon: true,//showIcon
                tabBarShowLabel: true,//showLabel
                tabBarLabelStyle: {//labelStyle
                    fontSize: 11
                },
                tabBarStyle: {//style
                    paddingTop: Constants.statusBarHeight,
                    backgroundColor: "#f3f3f1"
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    )
                }}

            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "History",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-time"} size={20} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-star"} size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}