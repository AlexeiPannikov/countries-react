import GetAllCountriesResponse from "../models/response/GetAllCountriesResponse";
import {Dispatch} from "redux";
import {RequestService} from "../api/RequestService";

interface IAction {
    type: string;
    payload: GetAllCountriesResponse | boolean | any;
}

interface ICountriesState {
    isLoading: boolean;
    countries: GetAllCountriesResponse;
    error: any;
}

const defaultState: ICountriesState = {
    isLoading: false,
    countries: new GetAllCountriesResponse(),
    error: null,
};

const GET_ALL_COUNTRIES = "GET_ALL_COUNTRIES";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_ERROR = "SET_ERROR";

export const allCountries = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return {...state, countries: action.payload};
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        case SET_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export const getAllCountriesAction = (payload: GetAllCountriesResponse) => ({
    type: GET_ALL_COUNTRIES,
    payload
} as IAction);

export const setIsLoadingAction = (payload: boolean) => ({type: SET_IS_LOADING, payload} as IAction);

export const setErrorAction = (payload: any) => ({type: SET_IS_LOADING, payload} as IAction);

export const getAllCountriesThunk = () => {
    return async (dispatch: Dispatch) => {
        dispatch(setIsLoadingAction(true));
        try {
            const res = await RequestService.getAllCountries();
            if (res) {
                dispatch(getAllCountriesAction(res));
                console.log(res);
            }
        } catch (e) {
            dispatch(setErrorAction(e));
            console.log(e)
        } finally {
            dispatch(setIsLoadingAction(false));
        }
    }
}