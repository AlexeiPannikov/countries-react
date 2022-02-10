import React, {FC, useEffect} from 'react';
// @ts-ignore
import cl from "./ThemeSwitcher.module.scss";
import {setTheme, ThemesEnum} from "../../../store/reducers/ThemesSlice";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/useTypedSelector";

const ThemeSwitcher: FC = () => {
    const {theme} = useTypedSelector(state => state.theme);
    const dispatch = useTypedDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(theme === ThemesEnum.Light ? ThemesEnum.Dark : ThemesEnum.Light));
        console.log(theme)
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    })
    return (
        <div className={cl.ThemeSwitcher} onClick={toggleTheme}>
            { theme === ThemesEnum.Light ?
                <div className={cl.Wrapper}><IoMoon/><span>Light Theme</span></div>  :
                <div className={cl.Wrapper}><IoMoonOutline /><span>Dark Theme</span></div>
            }
        </div>
    );
};

export default ThemeSwitcher;