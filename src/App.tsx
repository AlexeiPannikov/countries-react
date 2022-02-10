import React, {useEffect} from 'react';
import './assets/styles/App.scss';
import AppRouter from "./router/router";
import {useTypedDispatch} from "./hooks/useTypedSelector";
import {getAllCountriesAsync} from "./store/asyncActions/AllCountriesActionCreator";

function App() {
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getAllCountriesAsync());
    }, [dispatch]);

    return (
        <AppRouter/>
    );
}

export default App;
