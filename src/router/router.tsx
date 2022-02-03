import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../page/Home/HomePage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;