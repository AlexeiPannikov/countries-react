import React, {FC, useRef, useState} from 'react';
// @ts-ignore
import cl from "./Dropdown.module.scss";
import {IoChevronUpSharp} from "react-icons/io5";
import {CSSTransition} from "react-transition-group";
import DropdownItemModel from "./DropdownItemModel";
import DropdownItem from "./DropdownItem";
import {useClickOutside} from "../../hooks/useClickOutside";

interface IProps {
    placeholder: string;
    list: DropdownItemModel[];
}

const Dropdown: FC<IProps> = ({list, placeholder}) => {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
    const [currentItem, setCurrentItem] = useState<DropdownItemModel>(new DropdownItemModel())
    const dropdownEl = useRef(null);

    function toggleVisibility() {
        setIsVisibleDropdown(!isVisibleDropdown);
    }

    function selectItem(item: DropdownItemModel) {
        setIsVisibleDropdown(false);
        setCurrentItem(item);
    }

    useClickOutside(dropdownEl, () => setIsVisibleDropdown(false));

    return (
        <div ref={dropdownEl} className={cl.Dropdown}>
            <input onClick={toggleVisibility} className={cl.CurrentItem} type="text" placeholder={placeholder}
                   readOnly value={currentItem.name}/>
            <div className={`${cl.Icon} ${isVisibleDropdown ? cl.ActiveIcon : ""}`}><IoChevronUpSharp/></div>

            <CSSTransition in={isVisibleDropdown} timeout={100} mountOnEnter unmountOnExit classNames={{
                enterActive: cl.EnterActive,
                enterDone: cl.EnterDone,
                exitActive: cl.ExitActive,
                exitDone: cl.ExitDone,
            }}>
                <div className={cl.List}>
                    {list.map(item => <DropdownItem key={item.value} item={item} click={selectItem}/>)}
                </div>
            </CSSTransition>

        </div>
    );
};

export default Dropdown;