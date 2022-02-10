import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CountryModel from "../../models/CountryModel";

interface IAllCountries {
    isLoading: boolean;
    countries: CountryModel[];
    error: any;
}

const initialState: IAllCountries = {
    isLoading: false,
    countries: [],
    error: null,
};

const allCountriesSlice = createSlice({
    name: "allCountries",
    initialState,
    reducers: {
        gettingAllCountries(state) {
            state.isLoading = true;
        },
        getAllCountriesSuccess(state, action: PayloadAction<CountryModel[]>) {
            state.isLoading = false;
            state.countries = action.payload;
        },
        getAllCountriesError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default allCountriesSlice.reducer;
export const {gettingAllCountries, getAllCountriesSuccess, getAllCountriesError} = allCountriesSlice.actions;