import {AppDispatch} from "../store";
import {clearCountry, getCountryError, getCountrySuccess, gettingCountry} from "../reducers/CountrySlice";
import {RequestService} from "../../api/RequestService";



export const getCountryAsync = (countryName: string | undefined) => {
    return async (dispatch: AppDispatch) => {
        dispatch(gettingCountry())
        try {
            if(!countryName) return;
            dispatch(clearCountry())
            const res = await RequestService.getCountryByName(countryName);
            if (!res) {
                dispatch(getCountryError({message: `Country ${countryName} not found`}));
                return;
            }
            dispatch(getCountrySuccess(res[0]));
        } catch (e) {
            dispatch(getCountryError({message: "Error while loading"}));
            console.log(e);
        }
    }
}