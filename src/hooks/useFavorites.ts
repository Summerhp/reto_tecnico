import { useState, useEffect } from 'react';

const useFavorites = () => {
    const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '{}');
        setFavorites(storedFavorites);
    }, []);

    const toggleFavorite = (id: string) => {
        const updatedFavorites = {
            ...favorites,
            [id]: !favorites[id],
        };
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return { favorites, toggleFavorite };
};

export default useFavorites;
