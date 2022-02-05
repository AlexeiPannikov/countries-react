import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {themeReducer} from "./ThemeReducer";
import {allCountries} from "./AllCountriesReducer";

const reducers = combineReducers({
    theme: themeReducer,
    allCountries: allCountries,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof reducers>;
