import React, {FC} from 'react';
// @ts-ignore
import cl from "./Dropdown.module.scss";
import DropdownItemModel from "./DropdownItemModel";

interface IProps {
    item: DropdownItemModel;
    click: (item: DropdownItemModel) => void;
}

const DropdownItem: FC<IProps> = ({item, click}) => {
    return (
        <div className={cl.Item} onClick={() => click(item)}>
            {item.name}
        </div>
    );
};

export default DropdownItem;