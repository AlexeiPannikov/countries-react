import React, {FC, useEffect} from 'react';
// @ts-ignore
import cl from "./ThemeSwitcher.module.scss";
import {setThemeAction, ThemesEnum} from "../../../store/ThemeReducer";
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

const ThemeSwitcher: FC = () => {
    const theme = useTypedSelector(state => state.theme);
    const dispatch = useDispatch();

    const toggleTheme = () => dispatch(setThemeAction(theme === ThemesEnum.Light ? ThemesEnum.Dark : ThemesEnum.Light));

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