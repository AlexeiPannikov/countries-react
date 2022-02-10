import themesSlice from "./reducers/ThemesSlice";
import allCountriesSlice from "./reducers/AllCountriesSlice";
import countrySlice from "./reducers/CountrySlice"

import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    theme: themesSlice,
    allCountries: allCountriesSlice,
    country: countrySlice
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
