import { configureStore } from '@reduxjs/toolkit';
import { artistReducer } from '../features/addArtist/artistSlice';
import { lastFmReducer } from '../features/addLastFmData/lastFmSlice';

const reducer = {
  artists: artistReducer,
  lastFm: lastFmReducer,
}

export default configureStore({
  reducer,
  devTools: true,
});
