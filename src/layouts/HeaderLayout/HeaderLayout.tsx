import React from 'react';
import {Container} from "../../components/Container/Container";
// @ts-ignore
import cl from "./HeaderLayout.module.scss"
import {NavLink} from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";

const HeaderLayout = () => {

    return (
        <header className={cl.HeaderLayout}>
            <Container>
                <div className={cl.Wrapper}>
                    <NavLink className={cl.Title} to="/">Where in the world?</NavLink>
                    <ThemeSwitcher />
                </div>
            </Container>
        </header>
    );
};

export default HeaderLayout;