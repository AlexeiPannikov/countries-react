import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../page/Home/HomePage";
import DetailPage from "../page/Detail/DetailPage";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./Transitions.scss"
import ErrorPage from "../page/ErrorPage/ErrorPage";

const AppRouter = () => {
    const location = useLocation();
    // const routes = [
    //     {path: "/", name: "HomePage", element: HomePage},
    //     {path: "/:name", name: "DetailPage", element: DetailPage},
    // ]

    return (


        <Routes>
            <Route path="/" element={<MainLayout/>}>
                {/*<CSSTransition key={location.key} className="slide" timeout={2000}>*/}
                <Route index element={<HomePage/>}/>
                <Route path="country/:name" element={<DetailPage/>}/>
                {/*</CSSTransition>*/}
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;