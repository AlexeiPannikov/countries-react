import React from 'react';
import {Container} from "../../components/Container/Container";
// @ts-ignore
import cl from "./ErrorPage.module.scss";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    function goToMain() {
        navigate("/")
    }

    return (
        <Container>
            <div className={cl.ErrorPage}>
                PAGE NOT FOUND
                <Button margin={"10px 0"} onClick={goToMain}>Go To Main</Button>
            </div>
        </Container>
    );
};

export default ErrorPage;