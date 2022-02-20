import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import cl from "./ThemeSwitcher.module.scss";
import {setTheme, ThemesEnum} from "../../../store/reducers/ThemesSlice";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/useTypedSelector";

const ThemeSwitcher: FC = () => {

    const toggleTheme = () => {
        if(localStorage.getItem("theme")) {
            let theme = (localStorage.getItem("theme") as string) == ThemesEnum.Light ? ThemesEnum.Dark : ThemesEnum.Light
            localStorage.setItem("theme", theme);
            document.body.setAttribute('data-theme', theme);
        }
    }

    useEffect(() => {
        const storageTheme = localStorage.getItem("theme");
        console.log(storageTheme)
        if (storageTheme) {
            document.body.setAttribute('data-theme', storageTheme);
        } else {
            localStorage.setItem("theme", ThemesEnum.Light);
            document.body.setAttribute('data-theme', ThemesEnum.Light);
        }
    })

    return (
        <div className={cl.ThemeSwitcher} onClick={toggleTheme}>
            {localStorage.getItem("theme") === ThemesEnum.Light ?
                <div className={cl.Wrapper}><IoMoon/><span>Light Theme</span></div> :
                <div className={cl.Wrapper}><IoMoonOutline/><span>Dark Theme</span></div>
            }
        </div>
    );
};

export default ThemeSwitcher;