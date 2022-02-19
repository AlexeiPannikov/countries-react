import React, {FC} from 'react';
import {MessageTypesEnum} from "./MessageTypesEnum";
// @ts-ignore
import cl from "./Message.module.scss";
import {IoAlertCircle} from "react-icons/io5"

interface IProps {
    type: MessageTypesEnum
    message: string;
}

const Message: FC<IProps> = ({type, message}) => {

    function setClassByType(): string {
        switch (type) {
            case MessageTypesEnum.Error:
                return cl.Error;
            default:
                return "";
        }
    }

    return (
        <div className={cl.Message}>
            <div className={`${cl.TextMessage} ${setClassByType()}`}><IoAlertCircle/><span>{message}</span></div>
        </div>
    );
};

export default Message;