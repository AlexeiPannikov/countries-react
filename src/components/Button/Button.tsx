import React, {FC} from 'react';
// @ts-ignore
import cl from "./Button.module.scss";

interface IProps {
    padding?: string;
    margin?: string;
    fontSize?: string;
    width?: string;
    height?: string;
    contentCenter?: boolean;
    onClick: any;
}

const Button: FC<IProps> = ({
                                children,
                                padding,
                                margin,
                                fontSize,
                                width,
                                height,
                                contentCenter,
                                onClick
                            }) => {

    function getStyleButton(): object {
        return {
            padding: padding || '10px 20px',
            margin: margin || '0',
            fontSize: fontSize || 'var(--fs-sm)',
            width: width || 'auto',
            height: height || 'auto',
            display: contentCenter && 'flex',
            alignItems: contentCenter && 'center',
            justifyContent: contentCenter && 'center'
        }
    }

    return (
        <div onClick={() => onClick()} className={cl.Button} style={getStyleButton()}>
            <div className={cl.Text}>{children}</div>
        </div>
    );
};

export default Button;