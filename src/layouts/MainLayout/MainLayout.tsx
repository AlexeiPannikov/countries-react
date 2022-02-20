import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
// @ts-ignore
import cl from "./MainLayout.module.scss";
import Button from "../../components/Button/Button";
import {IoArrowUp} from "react-icons/io5"

const MainLayout = () => {

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth',})
    }

    return (
        <div className={cl.MainLayout}>
            <HeaderLayout/>
            <main className={cl.Main}>
                <Outlet/>
            </main>
            <div className={cl.ScrollButton}>
                <Button padding={"0px 0px"} width={"100%"} height={"100%"} contentCenter onClick={scrollToTop}><IoArrowUp /></Button>
            </div>
        </div>
    );
};

export default MainLayout;