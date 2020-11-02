import { createSlice, createSelector } from '@reduxjs/toolkit';

const artistSlice = createSlice({
    name: 'artists',
    initialState: [],
    reducers: {
        addArtist(state, action) {
            const { id, artistName, stars = 0 } = action.payload;
            state.push({ id, artistName, stars });
        },
        removeArtist(state, action) {
            const { id } = action.payload;
            state = state.filter(artist => artist.id !== id);
        }
    }
});

export const { addArtist, removeArtist } = artistSlice.actions;

export const selectAllArtists = createSelector(
    state => state.artists,
    artists => artists
);

export const artistReducer = artistSlice.reducer;