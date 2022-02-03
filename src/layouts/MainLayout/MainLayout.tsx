import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
// @ts-ignore
import cl from "./MainLayout.module.scss";

const MainLayout = () => {
    return (
        <div className={cl.MainLayout}>
            <HeaderLayout/>
            <main className={cl.Main}>
                <Outlet/>
            </main>
        </div>
    );
};

export default MainLayout;