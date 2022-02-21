import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../page/Home/HomePage";
import DetailPage from "../page/Detail/DetailPage";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="country/:name" element={<DetailPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;