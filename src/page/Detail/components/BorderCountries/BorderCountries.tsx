import React, {FC} from 'react';
// @ts-ignore
import cl from "./BorderCountries.module.scss";
import Button from "../../../../components/Button/Button";
import {useNavigate} from "react-router-dom";

interface IProps {
  countries: string[];
}

const BorderCountries: FC<IProps> = ({countries}) => {

    const navigate = useNavigate();

    function openCountryPage(value: string) {
        navigate(`../country/${value}`, {replace: true})
    }

    return (
        <div className={cl.BorderCountries}>
            <h3 className={cl.Title}>Border countries: </h3>
            <div className={cl.Buttons}>
                {
                    countries.map(item => <Button padding="5px 10px" margin={"5px 5px"} key={item} onClick={() => openCountryPage(item)}>{item}</Button>)
                }
            </div>
        </div>
    );
};

export default BorderCountries;