import React, {FC} from 'react';
// @ts-ignore
import cl from "./Preloader.module.scss"

interface IProps {
    isLoading: boolean;
}

const Preloader: FC<IProps> = ({isLoading}) => {

    if (!isLoading) return null;
    return (
        <div className={cl.Preloader}>

        </div>
    );
};

export default Preloader;