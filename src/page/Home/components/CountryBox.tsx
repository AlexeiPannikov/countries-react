import React, {FC} from 'react';
import CountryModel from "../../../models/CountryModel";
// @ts-ignore
import cl from "./CountryBox.module.scss";
import {useNavigate} from "react-router-dom";

interface IProps {
    country: CountryModel;
}

const CountryBox: FC<IProps> = ({country}) => {

    const navigate = useNavigate()

    function openDetailPage() {
        navigate(`country/${country.name.common}`);
    }

    return (
        <section onClick={openDetailPage} className={cl.CountryBox}>
            <img src={country.flags.svg} alt=""/>
            <div className={cl.Body}>
                <h2>{country.name.official}</h2>
                <p><span className={cl.SubTitle}>Population: </span>{country.population}</p>
                <p><span className={cl.SubTitle}>Region: </span>{country.region}</p>
                <p><span className={cl.SubTitle}>Capital: </span>{country.capital?.join(", ")}</p>
            </div>
        </section>
    );
};

export default CountryBox;