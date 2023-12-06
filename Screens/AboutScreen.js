import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { JokeContext } from './JokeContext';

export default function AboutScreen() {
    const { favorites, removeFavorite } = useContext(JokeContext);

    const openURL = () => {
        Linking.openURL('https://sv443.net/');
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>Your Favorite Jokes</Text>
                </View>
                {favorites.map((joke, index) => (
                    <View key={index} style={styles.jokeContainer}>
                        <Text style={styles.jokeText}>{joke}</Text>
                        <TouchableOpacity onPress={() => removeFavorite(joke)} style={styles.deleteButton}>
                            <Text style={styles.buttonText}>✕</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottomBanner}>
                <TouchableOpacity onPress={openURL}>
                    <Text style={styles.bottomBannerText}>
                        Created with Joke API from Sv443 Network
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    banner: {
        backgroundColor: '#800080',
        padding: 10,
        alignItems: 'center',
    },
    bannerText: {
        color: '#fff',
        fontSize: 20,
    },
    jokeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    jokeText: {
        flex: 1,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
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
    bottomBannerText: {
        color: '#fff',
        textDecorationLine: 'underline',
    },
});
