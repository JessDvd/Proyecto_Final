// JokeContext.js
import React, { createContext, useState } from 'react';

export const JokeContext = createContext();

export const JokeProvider = ({ children }) => {
    const [jokes, setJokes] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const addJoke = (joke) => {
        setJokes((prevJokes) => [...prevJokes, joke]);
    };

    const addFavorite = (joke) => {
        setFavorites((prevFavorites) => [...prevFavorites, joke]);
    };

    const removeFavorite = (joke) => {
        setFavorites((prevFavorites) => prevFavorites.filter(fav => fav !== joke));
    };

    return (
        <JokeContext.Provider value={{ jokes, addJoke, favorites, addFavorite, removeFavorite }}>
            {children}
        </JokeContext.Provider>
    );
};
