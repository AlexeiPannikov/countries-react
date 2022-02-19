import React, {useEffect, useMemo, useState} from 'react';
import {Container} from "../../components/Container/Container";
import {useNavigate, useParams} from "react-router-dom";
import {getCountryAsync} from "../../store/asyncActions/CountryActionCreator";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useTypedSelector";
import Preloader from "../../components/Preloader/Preloader";
import Content from "../../components/Content/Content";
import Toolbar from "../../components/Toolbar/Toolbar";
// @ts-ignore
import cl from "./DetailPage.module.scss"
import InfoItem from "./components/InfoItem/InfoItem";
import Button from "../../components/Button/Button";
import {IoArrowBack} from "react-icons/io5";
import BorderCountries from "./components/BorderCountries/BorderCountries";
import Message from "../../components/Message/Message";
import {MessageTypesEnum} from "../../components/Message/MessageTypesEnum";

const DetailPage = () => {
    const {name} = useParams();
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const {isLoading, country, error} = useTypedSelector(state => state.country);
    const countries = useTypedSelector(state => state.allCountries).countries;

    useEffect(() => {
        if (!(name === country.name.common)) {
            dispatch(getCountryAsync(name))
        }
    }, [dispatch, country.name.common, name])

    function getValueArrOfObject(obj: object, ...indexes: Array<number>): string[] {
        const valueArr: string[] = [];
        for (const key in obj) {
            if (typeof (obj as any)[key] === "object") {
                for (const key2 in (obj as any)[key]) {
                    valueArr.push((obj as any)[key][key2])
                }
            } else {
                valueArr.push((obj as any)[key])
            }
        }
        if (indexes.length) {
            const newValueArr = [];
            for (let i = 0; i < indexes.length; i++) {
                newValueArr.push(valueArr[indexes[i]])
            }
            return newValueArr;
        }
        return valueArr;
    }

    function getBorderCountries(borderCountries: string[]): string[] {
        if (countries.length === 0) return [];
        const names: string[] = [];
        for (let value of borderCountries) {
            let foundCountry = countries.find(item => item.cca3 === value)
            if (foundCountry) {
                names.push(foundCountry.name.common)
            }
        }
        return names
    }

    function goBack() {
        navigate(-1)
    }

    return (
        <Container>
            <Toolbar>
                <Button onClick={goBack}><IoArrowBack/><span style={{marginLeft: '7px'}}>Back</span></Button>
            </Toolbar>
            <Content>
                <Preloader isLoading={isLoading}/>
                <div className={cl.Wrapper}>
                    {
                        !error && Object.keys(country).length > 0 &&
                        <div className={cl.Content}>
                            <div className={cl.Flag}>
                                <img src={country.flags.svg} alt={country.name.official}/>
                            </div>

                            <div className={cl.Info}>
                                <h1 className={cl.Title}>{country.name.official}</h1>
                                <div className={cl.Sub}>
                                    <div className={cl.LeftCol}>
                                        <InfoItem title="Native Name"
                                                  text={getValueArrOfObject(country.name.nativeName, 0)}/>
                                        <InfoItem title="Population" text={country.population}/>
                                        <InfoItem title="Region" text={country.region}/>
                                        <InfoItem title="Subregion" text={country.subregion}/>
                                    </div>
                                    <div className={cl.RightCol}>
                                        <InfoItem title="Capital" text={country.capital}/>
                                        <InfoItem title="Currencies"
                                                  text={getValueArrOfObject((country as any).currencies, 0)}/>
                                        <InfoItem title="Languages" text={getValueArrOfObject(country.languages)}/>
                                    </div>
                                </div>
                                {
                                    !error && country.hasOwnProperty("borders") &&
                                    <BorderCountries countries={getBorderCountries(country.borders)}/>
                                }
                            </div>
                        </div>
                    }
                    {
                        error &&
                        <Message type={MessageTypesEnum.Error} message={error.message}/>
                    }
                </div>
            </Content>

        </Container>
    );
};

export default DetailPage;