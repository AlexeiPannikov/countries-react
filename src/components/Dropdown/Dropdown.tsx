import React, {useState} from 'react';
// @ts-ignore
import cl from "./Dropdown.module.scss";
import {IoChevronUpSharp} from "react-icons/io5";
import {CSSTransition} from "react-transition-group";

const defaultStyle = {
    transition: `opacity ${500}ms ease-in-out`,
    opacity: 0,
}

const Dropdown = () => {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

    function toggleVisibility() {
        setIsVisibleDropdown(!isVisibleDropdown);
    }

    return (
        <div className={cl.Dropdown}>
            <input onClick={toggleVisibility} className={cl.CurrentItem} type="text" readOnly/>
            <div className={`${cl.Icon} ${isVisibleDropdown ? cl.ActiveIcon : ""}`}><IoChevronUpSharp/></div>

            <CSSTransition in={isVisibleDropdown} timeout={2000} mountOnEnter unmountOnExit classNames={{
                enterActive: cl.EnterActive,
                enterDone: cl.EnterDone,
                exitActive: cl.ExitActive,
                exitDone: cl.ExitDone,
            }}>
                <div className={cl.List}></div>
            </CSSTransition>

        </div>
    );
};

export default Dropdown;