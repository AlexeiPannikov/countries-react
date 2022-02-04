import React, {useState} from 'react';
// @ts-ignore
import cl from "./Dropdown.module.scss";
import {IoChevronUpSharp} from "react-icons/io5"

const Dropdown = () => {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);

    function toggleVisibility() {
        setIsVisibleDropdown(!isVisibleDropdown)
    }

    return (
        <div className={cl.Dropdown}>
            <input onClick={toggleVisibility} className={cl.CurrentItem} type="text" readOnly/>
            <div className={`${cl.Icon} ${isVisibleDropdown ? cl.ActiveIcon : ""}`}><IoChevronUpSharp/></div>
            <div className={`${cl.List} ${isVisibleDropdown ? cl.Active : ""}`}></div>
        </div>
    );
};

export default Dropdown;