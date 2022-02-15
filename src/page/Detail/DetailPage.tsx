import React, {useEffect, useMemo, useState} from 'react';
import {Container} from "../../components/Container/Container";
import {useParams} from "react-router-dom";
import {getCountryAsync} from "../../store/asyncActions/CountryActionCreator";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useTypedSelector";
import Preloader from "../../components/Preloader/Preloader";
import Content from "../../components/Content/Content";
import Toolbar from "../../components/Toolbar/Toolbar";
// @ts-ignore
import cl from "./DetailPage.module.scss"
import InfoItem from "./components/InfoItem/InfoItem";
import Button from "../../components/Button/Button";
import { IoArrowBack } from "react-icons/io5";
import {removeCountry} from "../../store/reducers/CountrySlice";

const DetailPage = () => {
    const {name} = useParams();
    const dispatch = useTypedDispatch();

    const {isLoading, country, error} = useTypedSelector(state => state.country);

    useEffect(() => {
        dispatch(removeCountry())
        dispatch(getCountryAsync(name))
    }, [dispatch, name])

    function getArrOfValue(obj: object, ...indexes: Array<number>): any[] {
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

    return (
        <Container>
            <Toolbar>
                <Button><IoArrowBack/><span style={{marginLeft: '7px'}}>Back</span></Button>
            </Toolbar>
            <Content>
                <Preloader isLoading={isLoading}/>
                <div className={cl.Wrapper}>
                    {
                        country.length > 0 &&
                        <div className={cl.Content}>
                            <div className={cl.Flag}>
                                <img src={country[0].flags.svg} alt={country[0].name.official}/>
                            </div>

                            <div className={cl.Info}>
                                <h1 className={cl.Title}>{country[0].name.official}</h1>
                                <div className={cl.Sub}>
                                    <div className={cl.LeftCol}>
                                        <InfoItem title="Native Name"
                                                  text={getArrOfValue(country[0].name.nativeName, 0)}/>
                                        <InfoItem title="Population" text={country[0].population}/>
                                        <InfoItem title="Region" text={country[0].region}/>
                                        <InfoItem title="Subregion" text={country[0].subregion}/>
                                    </div>
                                    <div className={cl.RightCol}>
                                        <InfoItem title="Capital" text={country[0].capital}/>
                                        <InfoItem title="Currencies"
                                                  text={getArrOfValue((country[0] as any).currencies, 0)}/>
                                        <InfoItem title="Capital" text={country[0].capital}/>
                                    </div>
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