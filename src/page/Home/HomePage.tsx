import React, {useMemo, useState} from 'react';
import {Container} from "../../components/Container/Container";
import Toolbar from "../../components/Toolbar/Toolbar";
import Search from "../../components/Search/Search";
import Dropdown from "../../components/Dropdown/Dropdown";
import Content from "../../components/Content/Content";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import DropdownItemModel from "../../components/Dropdown/DropdownItemModel";
import Preloader from "../../components/Preloader/Preloader";
import CountryBox from "./components/CountryBox";
// @ts-ignore
import cl from "./HomePage.module.scss";

const HomePage = () => {
    const {isLoading, countries, error} = useTypedSelector(state => state.allCountries);

    const [list, setList] = useState([
        new DropdownItemModel({name: "Africa", value: "Africa"}),
        new DropdownItemModel({name: "America", value: "America"}),
        new DropdownItemModel({name: "Asia", value: "Asia"}),
        new DropdownItemModel({name: "Europe", value: "Europe"}),
        new DropdownItemModel({name: "Oceania", value: "Oceania"}),
    ])

    return (
        <Container>
            <Toolbar>
                <Search placeholder={"Search for a country..."}/>
                <Dropdown list={list} placeholder={"Filter by Region"}/>
            </Toolbar>
            <Content>
                <Preloader isLoading={isLoading}/>
                <div className={cl.Countries}>
                    {   !error ?
                        countries.map(country => <CountryBox key={country.name.official} country={country} />)
                        :
                        <div>{error.message}</div>
                    }
                </div>
            </Content>
        </Container>
    );
};

export default HomePage;