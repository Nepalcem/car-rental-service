import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { carsSlice } from "./cars/carsSlice";
import favoriteSlice from "./favorites/favoriteSlice";
import currencySlice from "./currency/currencySlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteCars", "currency"],
};

const rootReducer = combineReducers({
  cars: carsSlice.reducer,
  favoriteCars: favoriteSlice.reducer,
  currency: currencySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
