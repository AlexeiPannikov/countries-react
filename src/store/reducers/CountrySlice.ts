import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CountryModel from "../../models/CountryModel";

interface ICountry {
    isLoading: boolean;
    country: CountryModel[];
    error: any;
}

const initialState: ICountry = {
    isLoading: false,
    country: [],
    error: null,
};

const countrySlice = createSlice({
    name: "allCountries",
    initialState,
    reducers: {
        gettingCountry(state) {
            state.isLoading = true;
        },
        getCountrySuccess(state, action: PayloadAction<CountryModel[]>) {
            state.isLoading = false;
            state.country = action.payload;
        },
        getCountryError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default countrySlice.reducer;
export const {gettingCountry, getCountrySuccess, getCountryError} = countrySlice.actions;