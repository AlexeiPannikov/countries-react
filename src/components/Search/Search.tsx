import React, {FC} from 'react';
// @ts-ignore
import cl from "./Search.module.scss";
import {IoSearchSharp} from "react-icons/io5"

interface IProps {
    placeholder?: string;
}

const Search: FC<IProps> = ({placeholder}) => {
    return (
        <div className={cl.Search}>
            <input type="text" required/>
            <div className={cl.Icon}><IoSearchSharp/></div>
            <div className={cl.Placeholder}>{placeholder}</div>
        </div>
    );
};

export default Search;