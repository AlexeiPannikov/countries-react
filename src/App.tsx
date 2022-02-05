import React, {useEffect} from 'react';
import './assets/styles/App.scss';
import AppRouter from "./router/router";
import {getAllCountriesThunk} from "./store/AllCountriesReducer";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountriesThunk());
  }, [dispatch])
  return (
      <AppRouter />
  );
}

export default App;
