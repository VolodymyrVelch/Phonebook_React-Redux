import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // забираємо помилки з консолі  уникаючи перерахованих екшенів
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedPhonebookReducer } from './phonebookSlice';
// import { contactReducer } from './phonebookSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    phonebooks: persistedPhonebookReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
