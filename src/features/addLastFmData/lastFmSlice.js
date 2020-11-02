import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// talk about createAsyncThunk

const lastFmAdapter = createEntityAdapter();

const lastFmSlice = createSlice({
    name: 'lastFm',
    initialState: lastFmAdapter.getInitialState(),
    reducers: {
        addLastFmData(state, action) {
            const { id, artist } = action.payload

            lastFmAdapter.addOne(state, { id, ...artist })
        }
    }
});

export const { addLastFmData } = lastFmSlice.actions;

export const { selectAll: selectAllLastFmData } = lastFmAdapter.getSelectors(
    (state) => state.lastFm
);

export const lastFmReducer = lastFmSlice.reducer;