import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { JokeContext } from './JokeContext';
import jokeImage from '../assets/joke.jpg'; 

const HomeScreen = () => {
    const [currentJoke, setCurrentJoke] = useState('');
    const { addJoke } = useContext(JokeContext);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
            const json = await response.json();
            const fetchedJoke = json.joke || `${json.setup} - ${json.delivery}`;
            setCurrentJoke(fetchedJoke); 
            addJoke(fetchedJoke); 
        } catch (error) {
            console.error('Error fetching joke:', error);
            setCurrentJoke('Failed to fetch joke');
        }
    };

    const openURL = () => {
        Linking.openURL('https://sv443.net/');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Image source={jokeImage} style={styles.image} />
                <Text style={styles.jokeText}>{currentJoke || 'Get a new joke!'}</Text>
                <Button title="Get a Joke" onPress={fetchJoke} />
            </ScrollView>

            <View style={styles.bottomBanner}>
                <TouchableOpacity onPress={openURL}>
                    <Text style={styles.bannerText}>
                        Created with Joke API from Sv443 Network
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    jokeText: {
        marginBottom: 20,
        paddingHorizontal: 20,
        textAlign: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
        marginTop:170,
        alignSelf: 'center',
    },
    bottomBanner: {
        backgroundColor: '#4CAF50',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bannerText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
});

