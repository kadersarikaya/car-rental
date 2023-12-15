import { createSlice } from "@reduxjs/toolkit";

// Load favorites from local storage if available
const loadFavoritesFromStorage = () => {
    if (typeof window !== 'undefined') {
        const storedFavorites = localStorage.getItem("favorites");
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    }
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: loadFavoritesFromStorage(),
    reducers: {
        toggleFavorite: (state, action) => {
            const { id } = action.payload;
            // Toggle favorite status
            state[id] = !state[id];

            // Update local storage
            localStorage.setItem("favorites", JSON.stringify(state));
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
