import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CountryModel from "../../models/CountryModel";
import FlagsModel from "../../models/FlagsModel";
import NameModel from "../../models/NameModel";

interface ICountry {
    isLoading: boolean;
    country: CountryModel;
    error: any;
}

const initialState: ICountry = {
    isLoading: false,
    country: {
        borders: [],
        capital: [],
        currencies: {},
        flags: {svg: "", png: ""},
        languages: {},
        name: {nativeName: {}, official: "", common: ""},
        population: 0,
        region: "",
        subregion: "",
    } as CountryModel,
    error: null,
};

const countrySlice = createSlice({
    name: "allCountries",
    initialState,
    reducers: {
        gettingCountry(state) {
            // state.country = {};
            state.isLoading = true;
        },
        getCountrySuccess(state, action: PayloadAction<CountryModel>) {
            state.isLoading = false;
            state.country = action.payload;
        },
        getCountryError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        clearCountry(state) {
            state.country = {
                borders: [],
                capital: [],
                currencies: {},
                flags: {svg: "", png: ""},
                languages: {},
                name: {nativeName: {}, official: "", common: ""},
                population: 0,
                region: "",
                subregion: "",
            } as CountryModel
        }
    }
})

export default countrySlice.reducer;
export const {gettingCountry, getCountrySuccess, getCountryError, clearCountry} = countrySlice.actions;