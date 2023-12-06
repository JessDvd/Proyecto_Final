import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TopTabNavigator1 from './Navigations/TopTabNavigator1'
import { JokeProvider } from './Screens/JokeContext';

export default function App() {
    return (
        <JokeProvider>
            <NavigationContainer>
                <TopTabNavigator1 />
            </NavigationContainer>
        </JokeProvider>
    );
}