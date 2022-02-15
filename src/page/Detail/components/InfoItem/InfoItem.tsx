import React, {FC} from 'react';
// @ts-ignore
import cl from "./InfoItem.module.scss";

interface IProps {
    title: string;
    text: string | number | Array<any>;
}

const InfoItem: FC<IProps> = ({title, text}) => {

    function textToString(): string {
        if (typeof text !== "string" && typeof text !== "number") {
            return text.join(", ");
        }
        return text.toString();
    }

    return (
        <div className={cl.InfoItem}>
            <h3>{title}: </h3>
            <span>{textToString()}</span>
        </div>
    );
};

export default InfoItem;