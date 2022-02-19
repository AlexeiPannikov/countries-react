import React, {useEffect, useState} from 'react';
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
import CountryModel from "../../models/CountryModel";
import {MessageTypesEnum} from "../../components/Message/MessageTypesEnum";
import Message from "../../components/Message/Message";

const HomePage = () => {
    const {isLoading, countries, error} = useTypedSelector(state => state.allCountries);
    const [filteredCountries, setFilteredCountries] = useState<CountryModel[]>([]);
    const [searchText, setSearchText] = useState("");
    const [currentRegion, setCurrentRegion] = useState("");

    const [list, setList] = useState([
        new DropdownItemModel({name: "All Regions", value: "", isActive: true}),
        new DropdownItemModel({name: "Africa", value: "Africa"}),
        new DropdownItemModel({name: "America", value: "America"}),
        new DropdownItemModel({name: "Asia", value: "Asia"}),
        new DropdownItemModel({name: "Europe", value: "Europe"}),
        new DropdownItemModel({name: "Oceania", value: "Oceania"}),
    ])

    useEffect(() => {
        handleSearch()
    }, [countries, searchText, currentRegion])

    function handleSearch() {
        if (countries.length === 0) return [];
        let data = [...countries];
        if (searchText) {
            data = data.filter(item => item.name.official.toLocaleLowerCase().replace(/\s/g, '').includes(searchText.toLocaleLowerCase()))
        }
        if (currentRegion) {
            data = data.filter(item => item.region.toLocaleLowerCase().includes(currentRegion.toLocaleLowerCase()))
        }
        setFilteredCountries(data)
    }

    function setText(text: string) {
        setSearchText(text)
    }

    function setRegion(region: string) {
        setCurrentRegion(region)
    }

    return (
        <Container>
            <Toolbar>
                <Search onChange={setText} placeholder={"Search for a country..."}/>
                <Dropdown onChange={setRegion} list={list} placeholder={"Filter by Region"}/>
            </Toolbar>
            <Content>
                <Preloader isLoading={isLoading}/>
                <div className={cl.Countries}>
                    {!error ?
                        filteredCountries.map(country => <CountryBox key={country.name.official}
                                                                     country={country}/>)
                        :
                        <Message type={MessageTypesEnum.Error} message={error.message}/>
                    }
                </div>
                {
                    !error && !isLoading && filteredCountries.length === 0 &&
                    <Message type={MessageTypesEnum.Simple} message="Not found"/>
                }
            </Content>
        </Container>
    );
};

export default HomePage;