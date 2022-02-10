import {AppDispatch} from "../store";
import {RequestService} from "../../api/RequestService";
import {getAllCountriesError, getAllCountriesSuccess, gettingAllCountries} from "../reducers/AllCountriesSlice";

export const getAllCountriesAsync = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(gettingAllCountries());
        try {
            const res = await RequestService.getAllCountries();
            if (!res) {
                dispatch(getAllCountriesError({message: "Countries not found"}));
            }
            dispatch(getAllCountriesSuccess(res));
        } catch (e) {
            dispatch(getAllCountriesError({message: "Error while loading"}));
            console.log(e)
        }
    }
}