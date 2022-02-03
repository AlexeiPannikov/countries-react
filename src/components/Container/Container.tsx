import {FC} from "react";
// @ts-ignore
import cl from "./Container.module.css"
export const Container: FC = ({children}) => {
    return (
        <div className={cl.Container}>
            {children}
        </div>
    )
}