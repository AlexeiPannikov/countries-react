import React from 'react';
import {Container} from "../../components/Container/Container";
import Toolbar from "../../components/Toolbar/Toolbar";
import Search from "../../components/Search/Search";
import Dropdown from "../../components/Dropdown/Dropdown";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Content from "../../components/Content/Content";

const HomePage = () => {
    const countries = useTypedSelector(state => state.allCountries)

    return (
        <Container>
            <Toolbar>
                <Search placeholder={"Search for a country..."}/>
                <Dropdown/>
            </Toolbar>
            <Content>

            </Content>
        </Container>
    );
};

export default HomePage;