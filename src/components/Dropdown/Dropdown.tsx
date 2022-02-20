import React, {FC, useEffect, useRef, useState} from 'react';
// @ts-ignore
import cl from "./Dropdown.module.scss";
import {IoChevronUpSharp} from "react-icons/io5";
import {CSSTransition} from "react-transition-group";
import DropdownItemModel from "./DropdownItemModel";
import DropdownItem from "./DropdownItem";
import {useClickOutside} from "../../hooks/useClickOutside";
import {useSearchParams} from "react-router-dom";

interface IProps {
    placeholder: string;
    list: DropdownItemModel[];
    onChange: (value: string) => any;
}

const Dropdown: FC<IProps> = ({list, placeholder, onChange}) => {
    const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
    const [currentItem, setCurrentItem] = useState<DropdownItemModel>(new DropdownItemModel())
    const dropdownEl = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();

    function toggleVisibility() {
        setIsVisibleDropdown(isVisibleDropdown => !isVisibleDropdown);
    }

    useEffect(() => {
        const region = searchParams.get("region");
        if (region) {
            const foundItem = list.find(item => item.value === region);
            if (foundItem) {
                foundItem.isActive = true;
                setCurrentItem(foundItem)
                list.forEach(el => {
                    if (el.value !== foundItem.value) {
                        el.isActive = false
                    }
                })
            }
        }
    })

    useEffect(() => {
        const activeItem = list.find(item => item.isActive);
        if (activeItem) {
            setCurrentItem(activeItem);
        }
    }, [list])

    function selectItem(item: DropdownItemModel) {
        setIsVisibleDropdown(false);
        list.forEach(el => {
            el.isActive = el.value === item.value;
        })
        setCurrentItem(item);
        onChange(item.value as string)
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