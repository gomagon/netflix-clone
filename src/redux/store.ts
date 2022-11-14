import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import configSlice from './configSlice';
import topratedSlice from './topratedSlice';
import mainviewSlice from './mainviewSlice';
import mylistSlice from './mylistSlice';
import upcomingSlice from './upcomingSlice';
import popularSlice from './popularSlice';
import nowplayingSlice from './nowplayingSlice';
import genresSlice from './genresSlice';
import modalSlice from './modalSlice';
import moviesSlice from './moviesSlice';

export const store = configureStore({
  reducer: {
    config: configSlice,
    toprated: topratedSlice,
    mainview: mainviewSlice,
    mylist: mylistSlice,
    upcoming: upcomingSlice,
    popular: popularSlice,
    nowplaying: nowplayingSlice,
    genres: genresSlice,
    modal: modalSlice,
    movies: moviesSlice,
  },
  devTools: false
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
