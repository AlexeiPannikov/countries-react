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

const DetailPage = () => {
    const {name} = useParams();
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const {isLoading, country, error} = useTypedSelector(state => state.country);

    useEffect(() => {
        if (!(name === country.name.common)) {
            dispatch(getCountryAsync(name))
        }
    }, [dispatch, country.name.common])

    function getValueArrOfObject(obj: object, ...indexes: Array<number>): any[] {
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
                                <div className={cl.BorderButtons}>
                                    {
                                        !error && country.hasOwnProperty("borders") &&
                                        country.borders.map(item => <div>{item}</div>)
                                    }
                                </div>
                            </div>
                        </div>
                    }
                    {
                        error && <div>{error.message}</div>
                    }
                </div>
            </Content>

        </Container>
    );
};

export default DetailPage;