import React, {FC} from 'react';
// @ts-ignore
import cl from "./Search.module.scss";
import {IoSearchSharp} from "react-icons/io5"

interface IProps {
    placeholder?: string;
    onChange: (value: string) => any;
}

const Search: FC<IProps> = ({placeholder, onChange}) => {
    return (
        <div className={cl.Search}>
            <input onChange={e => onChange(e.target.value)} type="text" required/>
            <div className={cl.Icon}><IoSearchSharp/></div>
            <div className={cl.Placeholder}>{placeholder}</div>
        </div>
    );
};

export default Search;