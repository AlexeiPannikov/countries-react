import React, {FC} from 'react';
// @ts-ignore
import cl from "./Preloader.module.scss"
import {CSSTransition} from "react-transition-group";

interface IProps {
    isLoading: boolean;
}

const Preloader: FC<IProps> = ({isLoading}) => {

    return (
        <CSSTransition in={isLoading} timeout={200} mountOnEnter unmountOnExit classNames={{
            enterActive: cl.EnterActive,
            enterDone: cl.EnterDone,
            exitActive: cl.ExitActive,
            exitDone: cl.ExitDone,
        }}>
            <div className={cl.Preloader}>
                <div className={cl.First}></div>
                <div className={cl.Second}></div>
                <div className={cl.Third}></div>
                <div className={cl.Fourth}></div>
            </div>
        </CSSTransition>
    );
};

export default Preloader;