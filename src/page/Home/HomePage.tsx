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
import {useSearchParams} from "react-router-dom";

const HomePage = () => {
    const {isLoading, countries, error} = useTypedSelector(state => state.allCountries);
    const [filteredCountries, setFilteredCountries] = useState<CountryModel[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const [list, setList] = useState([
        new DropdownItemModel({name: "All Regions", value: "", isActive: true}),
        new DropdownItemModel({name: "Africa", value: "Africa"}),
        new DropdownItemModel({name: "America", value: "America"}),
        new DropdownItemModel({name: "Asia", value: "Asia"}),
        new DropdownItemModel({name: "Europe", value: "Europe"}),
        new DropdownItemModel({name: "Oceania", value: "Oceania"}),
    ])

    useEffect(() => {
        handleSearch();
    }, [countries, searchParams.get("text"), searchParams.get("region")])

    function handleSearch(isFirstRender: boolean = false) {
        if (countries.length === 0) return;
        let data = [...countries];
        if (isFirstRender) {
            setFilteredCountries(data);
            return;
        }
        const textFromParams = searchParams.get("text");
        const regionFromParams = searchParams.get("region");
        if (textFromParams) {
            data = data.filter(item => item.name.official.toLocaleLowerCase().replace(/\s/g, '').includes(textFromParams.toLocaleLowerCase()))
        }
        if (regionFromParams) {
            data = data.filter(item => item.region.toLocaleLowerCase().includes(regionFromParams.toLocaleLowerCase()))
        }
        setFilteredCountries(data)
    }

    function setText(text: string) {
        setSearchParams({text, region: searchParams.get("region") || ""});
    }

    function setRegion(region: string) {
        setSearchParams({text: searchParams.get("text") || "", region});
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