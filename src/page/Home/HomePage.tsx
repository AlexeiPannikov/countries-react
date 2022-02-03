import React from 'react';
import {Container} from "../../components/Container/Container";
import Toolbar from "../../components/Toolbar/Toolbar";
import Search from "../../components/Search/Search";
import Dropdown from "../../components/Dropdown/Dropdown";

const HomePage = () => {
    return (
        <Container>
            <Toolbar>
                <Search placeholder={"Search for a country..."}/>
                <Dropdown/>
            </Toolbar>
        </Container>
    );
};

export default HomePage;