import React, {FC} from 'react';
// @ts-ignore
import cl from "./Content.module.scss";

const Content: FC = ({children}) => {
    return (
        <div className={cl.Content}>
            {children}
        </div>
    );
};

export default Content;