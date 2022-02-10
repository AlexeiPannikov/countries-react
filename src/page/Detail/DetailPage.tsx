import React, {useEffect} from 'react';
import {Container} from "../../components/Container/Container";
import {useParams} from "react-router-dom";
import {getCountryAsync} from "../../store/asyncActions/CountryActionCreator";
import {useTypedDispatch, useTypedSelector} from "../../hooks/useTypedSelector";
import Preloader from "../../components/Preloader/Preloader";
import Content from "../../components/Content/Content";
import Toolbar from "../../components/Toolbar/Toolbar";
// @ts-ignore
import cl from "./DetailPage.module.scss"

const DetailPage = () => {
    const {name} = useParams();
    const dispatch = useTypedDispatch();

    const {isLoading, country, error} = useTypedSelector(state => state.country);

    useEffect(() => {
        dispatch(getCountryAsync(name))
    }, [dispatch, name])

    return (
        <Container>
            <Toolbar></Toolbar>
            <Content>
                <Preloader isLoading={isLoading}/>
                <div className={cl.Wrapper}>
                    {
                        country.length &&
                        <div className={cl.Flag}>
                            <img src={country[0].flags.svg} alt={country[0].name.official}/>
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