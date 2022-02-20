import React, {FC} from 'react';
// @ts-ignore
import cl from "./Search.module.scss";
import {IoSearchSharp} from "react-icons/io5"
import {useSearchParams} from "react-router-dom";

interface IProps {
    placeholder?: string;
    onChange: (value: string) => any;
}

const Search: FC<IProps> = ({placeholder, onChange}) => {

    function changeHandle(value: string) {
        onChange(value)
    }

    return (
        <div className={cl.Search}>
            <input onChange={e => changeHandle(e.target.value)} type="text" required/>
            <div className={cl.Icon}><IoSearchSharp/></div>
            <div className={cl.Placeholder}>{placeholder}</div>
        </div>
    );
};

export default Search;