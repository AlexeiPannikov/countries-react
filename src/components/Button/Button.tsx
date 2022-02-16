import React, {FC} from 'react';
// @ts-ignore
import cl from "./Button.module.scss";

interface IProps {
    padding?: string;
    fontSize?: number;
    onClick: any;
}

const Button: FC<IProps> = ({children, padding, fontSize, onClick}) => {

    function getStyleButton(): object {
        return {
            padding: padding || '10px 20px',
            fontSize: fontSize || 'var(--fs-sm)'
        }
    }

    return (
        <div onClick={() => onClick()} className={cl.Button} style={getStyleButton()}>
            <div className={cl.Text}>{children}</div>
        </div>
    );
};

export default Button;